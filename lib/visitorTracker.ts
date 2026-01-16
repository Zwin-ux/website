"use client";

import { useEffect, useState } from 'react';

// Mock visitor data for visual demonstration until Supabase is hooked up
export const useVisitorTracker = () => {
    const [visitorId, setVisitorId] = useState<string | null>(null);
    const [visitorCount, setVisitorCount] = useState<number>(1420); // Starting mock number
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        // Check for existing text-based "cookie" (local storage)
        const storedId = localStorage.getItem('bonelli_visitor_id');
        
        if (storedId) {
            setVisitorId(storedId);
            setIsReturning(true);
        } else {
            // Generate a random ID for "new" users
            const newId = Math.random().toString(36).substring(2, 9).toUpperCase();
            localStorage.setItem('bonelli_visitor_id', newId);
            setVisitorId(newId);
            setIsReturning(false);
            // Simulate increment
            setVisitorCount(prev => prev + 1);
        }
    }, []);

    return { visitorId, visitorCount, isReturning };
};
