"use client";

import { useEffect, useState } from 'react';

// Using counterapi.dev for persistent tracking (countapi.xyz is deprecated)
const NAMESPACE = 'groupbonelli';
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
                 // counterapi.dev: '/up' to increment, '/' to just get
                 const endpoint = isNewVisitor 
                    ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`
                    : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`;
                 
                 const res = await fetch(endpoint);
                 
                 if (res.ok) {
                     const data = await res.json();
                     // counterapi.dev returns { count: number }
                     setVisitorCount(data.count);
                 } else {
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
