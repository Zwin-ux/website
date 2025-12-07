import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Lazy init to avoid build-time errors if env is missing
const getSql = () => {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined used in vote route');
    }
    return neon(process.env.DATABASE_URL);
};

// Helper to ensure table exists and get current votes
// We do this lazily to avoid a separate migration step for the user
async function ensureTableAndGetVotes() {
    const sql = getSql();
    // 1. Create table if not exists
    await sql`
    CREATE TABLE IF NOT EXISTS mazen_votes (
      id TEXT PRIMARY KEY DEFAULT 'global',
      bad_votes BIGINT DEFAULT 0,
      good_votes BIGINT DEFAULT 0
    );
  `;

    // 2. Ensure the 'global' row exists
    // We try to insert; on conflict do nothing.
    await sql`
    INSERT INTO mazen_votes (id, bad_votes, good_votes)
    VALUES ('global', 0, 0)
    ON CONFLICT (id) DO NOTHING;
  `;

    // 3. Fetch votes
    const rows = await sql`SELECT bad_votes, good_votes FROM mazen_votes WHERE id = 'global'`;

    if (rows.length > 0) {
        return {
            bad: Number(rows[0].bad_votes),
            good: Number(rows[0].good_votes)
        };
    }

    return { bad: 0, good: 0 };
}

export async function GET() {
    try {
        const votes = await ensureTableAndGetVotes();
        // Cache-control: no-store to ensure we always get fresh DB data
        return NextResponse.json(votes, {
            headers: {
                'Cache-Control': 'no-store, max-age=0'
            }
        });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Database Error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { type } = await req.json();
        if (type !== 'good' && type !== 'bad') {
            return NextResponse.json({ error: 'Invalid vote type' }, { status: 400 });
        }

        const sql = getSql();

        // Ensure table exists before update (just in case)
        await sql`
      CREATE TABLE IF NOT EXISTS mazen_votes (
        id TEXT PRIMARY KEY DEFAULT 'global',
        bad_votes BIGINT DEFAULT 0,
        good_votes BIGINT DEFAULT 0
      );
    `;

        // Ensure row
        await sql`
      INSERT INTO mazen_votes (id, bad_votes, good_votes)
      VALUES ('global', 0, 0)
      ON CONFLICT (id) DO NOTHING;
    `;

        // Atomic Increment
        let rows;
        if (type === 'bad') {
            rows = await sql`
        UPDATE mazen_votes 
        SET bad_votes = bad_votes + 1 
        WHERE id = 'global' 
        RETURNING bad_votes, good_votes
      `;
        } else {
            rows = await sql`
        UPDATE mazen_votes 
        SET good_votes = good_votes + 1 
        WHERE id = 'global' 
        RETURNING bad_votes, good_votes
      `;
        }

        if (rows.length === 0) {
            // Should not happen due to INSERT above
            return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
        }

        return NextResponse.json({
            bad: Number(rows[0].bad_votes),
            good: Number(rows[0].good_votes)
        });

    } catch (error) {
        console.error('Vote error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
