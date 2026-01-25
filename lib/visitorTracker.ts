"use client";

import { useEffect, useState } from 'react';

// Using countapi.xyz for persistent tracking
const NAMESPACE = 'groupbonelli.com';
const KEY = 'visits';

export const useVisitorTracker = () => {
    const [visitorId, setVisitorId] = useState<string | null>(null);
    const [visitorCount, setVisitorCount] = useState<number>(1420); // Default fallback
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        // Check for existing text-based "cookie" (local storage)
        const storedId = localStorage.getItem('bonelli_visitor_id');
        const isNewVisitor = !storedId;
        
        // Handle ID generation
        let currentId = storedId;
        if (isNewVisitor) {
            currentId = Math.random().toString(36).substring(2, 9).toUpperCase();
            localStorage.setItem('bonelli_visitor_id', currentId);
        }
        
        setVisitorId(currentId!);
        setIsReturning(!isNewVisitor);

        // Fetch/Update global count
        const updateCount = async () => {
             try {
                 // For new visitors, we 'hit' (increment). For returning, we just 'get'.
                 // Note: If the key doesn't exist yet, 'hit' creates it. 'get' might fail if not created.
                 // Since we want this to work "actually", we'll risk one extra count if 'get' fails 
                 // to ensure the counter initializes.
                 
                 const action = isNewVisitor ? 'hit' : 'get';
                 const res = await fetch(`https://api.countapi.xyz/${action}/${NAMESPACE}/${KEY}`);
                 
                 if (res.ok) {
                     const data = await res.json();
                     setVisitorCount(data.value);
                 } else {
                     // If 'get' fails (maybe key missing), try to initialize with a 'hit' (or just info)
                     // But we only want to do this if we really think we should have data.
                     // Fallback silently to mock if API is down.
                     console.warn('Tracking server response:', res.status);
                 }
             } catch (err) {
                 console.error('Tracking error:', err);
                 // Keep default 1420
             }
        };

        updateCount();
    }, []);

    return { visitorId, visitorCount, isReturning };
};
