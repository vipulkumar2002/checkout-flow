"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const GlobalLoader = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        // Override the default router.push to track navigation
        const originalPush = router.push;

        router.push = async (...args) => {
            handleStart();
            await originalPush(...args);
            handleStop();
        };

        return () => {
            // Restore original router.push
            router.push = originalPush;
        };
    }, [router]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default GlobalLoader;
