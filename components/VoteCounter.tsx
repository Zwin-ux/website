'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { motion, AnimatePresence } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function VoteCounter() {
    const { data, error, mutate } = useSWR('/api/vote', fetcher, {
        refreshInterval: 3000,
        revalidateOnFocus: true
    });

    const [isVoting, setIsVoting] = useState(false);

    const handleVote = async (type: 'good' | 'bad') => {
        setIsVoting(true);

        // Optimistic UI update
        const currentVotes = data || { good: 0, bad: 0 };
        mutate(
            { ...currentVotes, [type]: (currentVotes[type] || 0) + 1 },
            false // Don't revalidate immediately
        );

        try {
            await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type }),
            });
            // Trigger a revalidation to get the true server state
            mutate();
        } catch (error) {
            console.error('Vote failed', error);
            // Revert on error (optional, mostly handled by next revalidation)
        } finally {
            setIsVoting(false);
        }
    };

    const badVotes = data?.bad || 0;
    const goodVotes = data?.good || 0;
    const totalVotes = badVotes + goodVotes;

    const badPercentage = totalVotes === 0 ? 50 : Math.round((badVotes / totalVotes) * 100);
    const goodPercentage = totalVotes === 0 ? 50 : Math.round((goodVotes / totalVotes) * 100);

    if (error) return null;

    return (
        <div className="w-full max-w-2xl mx-auto my-12 p-6 border border-white/5 rounded-none bg-black">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="text-sm font-bold text-white tracking-[0.2em]">PUBLIC SENTIMENT ANALYSIS</h2>
                <div className="flex gap-2 text-[10px] text-zinc-500 font-mono">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-green-500">●</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">
                {/* BAD BUTTON */}
                <button
                    onClick={() => handleVote('bad')}
                    className="group relative h-32 bg-black hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center"
                >
                    <span className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{badPercentage}%</span>
                    <span className="text-xs text-zinc-500 tracking-widest font-mono">NEGATIVE</span>
                    <span className="text-[10px] text-zinc-700 mt-2 font-mono">({badVotes} VOTES)</span>
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white/20 text-[10px]">INCR +1</span>
                    </div>
                </button>

                {/* GOOD BUTTON */}
                <button
                    onClick={() => handleVote('good')}
                    className="group relative h-32 bg-black hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center"
                >
                    <span className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{goodPercentage}%</span>
                    <span className="text-xs text-zinc-500 tracking-widest font-mono">POSITIVE</span>
                    <span className="text-[10px] text-zinc-700 mt-2 font-mono">({goodVotes} VOTES)</span>
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white/20 text-[10px]">INCR +1</span>
                    </div>
                </button>
            </div>

            {/* LIVE BAR */}
            <div className="h-1 w-full bg-zinc-900 flex">
                <motion.div
                    className="h-full bg-white"
                    initial={{ width: '50%' }}
                    animate={{ width: `${badPercentage}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
                />
                <motion.div
                    className="h-full bg-zinc-800"
                    initial={{ width: '50%' }}
                    animate={{ width: `${goodPercentage}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
                />
            </div>

            <div className="flex justify-between mt-3 text-[10px] text-zinc-600 font-mono tracking-widest">
                <span>SECTOR A: NEGATIVE</span>
                <span>SECTOR B: POSITIVE</span>
            </div>
        </div>
    );
}
