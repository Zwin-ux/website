import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const BLOB_PATH = 'articles/votes.json';

// Helper to fetch current votes
async function getVotes() {
    const { blobs } = await list({ prefix: BLOB_PATH });
    if (blobs.length === 0) {
        return { good: 0, bad: 0 };
    }

    // Find the exact match or the latest one
    const blob = blobs.find(b => b.pathname === BLOB_PATH);

    if (!blob) {
        // If prefix matched but exact file didn't (unlikely with this specific path), return 0
        return { good: 0, bad: 0 };
    }

    try {
        const res = await fetch(blob.url);
        if (!res.ok) throw new Error('Failed to fetch blob');
        return await res.json();
    } catch (error) {
        console.error('Error parsing votes:', error);
        return { good: 0, bad: 0 };
    }
}

export async function GET() {
    const votes = await getVotes();
    return NextResponse.json(votes);
}

export async function POST(req: Request) {
    try {
        const { type } = await req.json();
        if (type !== 'good' && type !== 'bad') {
            return NextResponse.json({ error: 'Invalid vote type' }, { status: 400 });
        }

        const currentVotes = await getVotes();

        // Increment
        const newVotes = {
            ...currentVotes,
            [type === 'good' ? 'good' : 'bad']: (currentVotes[type === 'good' ? 'good' : 'bad'] || 0) + 1
        };

        // Save back to Blob
        // 'addRandomSuffix: false' ensures we overwrite the same file path if supported, 
        // but Vercel Blob architecture usually creates unique URLs. 
        // However, if we keep the pathname constant in 'put', it acts as an overwrite or we just read the latest by path logic.
        // Actually, Vercel Blob 'put' with same path overwrites? No, it returns a new URL usually.
        // But 'list' returns all. We need to be careful.
        // Documentation says: "The pathname is used to identify the blob." 
        // If we set access: 'public', it might overwrite? 
        // Let's rely on list() returning the latest uploaded if we use a consistent path.
        // Actually simpler: `put` will return a url.

        await put(BLOB_PATH, JSON.stringify(newVotes), {
            access: 'public',
            addRandomSuffix: false // This effectively overwrites the file at that path
        });

        return NextResponse.json(newVotes);
    } catch (error) {
        console.error('Vote error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
