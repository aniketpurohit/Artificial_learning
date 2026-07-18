"use client";

import { useEffect, useRef } from 'react';
import { useTelemetry } from '../../hooks/useTelemetry';

export default function TelemetryCanvas() {
    // 1. DOM Refs for the container and canvas
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    // 2. Consume our new custom hook for API data fetching
    const { particlesRef, isStreaming, setIsStreaming } = useTelemetry(300);

    // 3. p5.js Rendering Layer
    useEffect(() => {
        let p5Instance: any = null;
        let isMounted = true;

        import('p5').then((p5Module) => {
            if (!isMounted) return; 
            
            const p5 = p5Module.default;

            const sketch = (p: any) => {
                p.setup = () => {
                    const width = containerRef.current?.clientWidth || 800;
                    const height = containerRef.current?.clientHeight || 600;
                    p.createCanvas(width, height, p.WEBGL);
                };

                p.draw = () => {
                    p.background(15);
                    p.orbitControl();

                    // Draw Axes
                    p.strokeWeight(3);
                    p.stroke(255, 60, 60); p.line(0, 0, 0, 250, 0, 0);       
                    p.stroke(60, 255, 60); p.line(0, 0, 0, 0, -250, 0);      
                    p.stroke(60, 150, 255); p.line(0, 0, 0, 0, 0, 250);      

                    p.noStroke();
                    
                    // Read from the shared reference updated by the hook
                    const points = particlesRef.current;
                    for (let i = 0; i < points.length; i++) {
                        let pt = points[i];
                        p.push();
                        p.translate(pt[0] * 250, -pt[1] * 250, pt[2] * 250);
                        
                        let alpha = p.map(i, 0, points.length, 30, 255);
                        p.emissiveMaterial(0, 255, 255, alpha);
                        p.sphere(6);
                        p.pop();
                    }
                };

                p.windowResized = () => {
                    if (containerRef.current) {
                        p.resizeCanvas(containerRef.current.clientWidth, containerRef.current.clientHeight);
                    }
                };
            };

            if (canvasRef.current) {
                p5Instance = new p5(sketch, canvasRef.current);
            }
        });

        return () => {
            isMounted = false;
            if (p5Instance) p5Instance.remove();
        };
    }, [particlesRef]); // Re-bind if the ref changes, though it usually remains stable

    // 4. React UI
    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-b-xl">
            <div className="absolute top-4 left-4 z-10">
                <button 
                    onClick={() => setIsStreaming(!isStreaming)}
                    className={`px-4 py-2 rounded font-mono text-xs shadow-lg transition-all ${
                        isStreaming 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30' 
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30'
                    }`}
                >
                    {isStreaming ? "STOP_TELEMETRY" : "INIT_TELEMETRY"}
                </button>
            </div>
            <div ref={canvasRef} className="w-full h-full outline-none cursor-move" />
        </div>
    );
}