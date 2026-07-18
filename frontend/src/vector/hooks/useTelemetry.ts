// hooks/useTelemetry.ts
import { useEffect, useRef, useState } from 'react';

export function useTelemetry(intervalMs: number = 300) {
    const particlesRef = useRef<number[][]>([]);
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isStreaming) {
            let c = 30, r = 50, d = 10;
            const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
            const rand = (min: number, max: number) => Math.random() * (max - min) + min;

            interval = setInterval(async () => {
                c = clamp(c + rand(-8, 12), 5, 100);
                r = clamp(r + rand(-5, 5), 10, 100);
                d = clamp(d + rand(-15, 15), 0, 100);

                try {
                    const res = await fetch('http://localhost:8000/api/v1/vectorize', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ cpu: c, ram: r, disk: d })
                    });
                    const data = await res.json();

                    particlesRef.current.push(data.vector);
                    if (particlesRef.current.length > 40) {
                        particlesRef.current.shift();
                    }
                } catch (err) {
                    console.error("Backend unreachable:", err);
                }
            }, intervalMs);
        }
        return () => clearInterval(interval);
    }, [isStreaming, intervalMs]);

    return { particlesRef, isStreaming, setIsStreaming };
}