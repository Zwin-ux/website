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
        <div className="w-full max-w-2xl mx-auto my-12 p-6 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2 tracking-wider">CIVIL JUDGMENT SYSTEM</h2>
                <p className="text-white/50 text-sm font-mono">IS MAZEN A BAD PERSON?</p>
            </div>

            <div className="flex gap-4 justify-center items-stretch h-32 mb-6">
                {/* BAD BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleVote('bad')}
                    className="flex-1 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-colors flex flex-col items-center justify-center group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">😈</span>
                    <span className="font-bold text-red-400 tracking-widest text-sm">YES, ABSOLUTELY</span>
                    <span className="text-xs text-red-400/50 mt-1 font-mono">{badVotes.toLocaleString()} VOTES</span>
                </motion.button>

                {/* GOOD BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleVote('good')}
                    className="flex-1 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors flex flex-col items-center justify-center group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">😇</span>
                    <span className="font-bold text-emerald-400 tracking-widest text-sm">NO, HE'S PURE</span>
                    <span className="text-xs text-emerald-400/50 mt-1 font-mono">{goodVotes.toLocaleString()} VOTES</span>
                </motion.button>
            </div>

            {/* LIVE BAR */}
            <div className="h-4 bg-white/5 rounded-full overflow-hidden flex relative">
                <motion.div
                    className="h-full bg-red-500/50"
                    initial={{ width: '50%' }}
                    animate={{ width: `${badPercentage}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
                />
                <motion.div
                    className="h-full bg-emerald-500/50"
                    initial={{ width: '50%' }}
                    animate={{ width: `${goodPercentage}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
                />
                {/* Splitter Line used to look cool */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-black/20 -translate-x-1/2 z-10" />
            </div>

            <div className="flex justify-between mt-2 text-[10px] text-white/30 font-mono">
                <span>EVIL ({badPercentage}%)</span>
                <span>LIVE DATABASE CONNECTION ACTIVE</span>
                <span>GOOD ({goodPercentage}%)</span>
            </div>
        </div>
    );
}
