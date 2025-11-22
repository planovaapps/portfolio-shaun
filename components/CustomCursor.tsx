'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<SVGSVGElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.innerWidth < 768) return;

        const cursor = cursorRef.current!;
        const container = trailRef.current!;

        const particles: HTMLDivElement[] = [];
        const poolSize = 5;

        // CRITICAL: Create particles with correct initial state + proper positioning
        for (let i = 0; i < poolSize; i++) {
            const p = document.createElement('div');
            p.className = 'comet-particle';

            // Start completely invisible and at (0,0) in absolute space
            gsap.set(p, {
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
                xPercent: -50,
                yPercent: -50,
                force3D: true,
            });

            container.appendChild(p);
            particles.push(p);
        }

        let index = 0;
        let hasFirstMove = false;

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            // First move: instantly snap cursor + show it
            if (!hasFirstMove) {
                gsap.set(cursor, { x, y, opacity: 1 });
                hasFirstMove = true;
            }

            gsap.to(cursor, {
                x,
                y,
                duration: 0.22,
                ease: 'power2.out',
                overwrite: true,
            });

            // Emit particle exactly at cursor position
            const p = particles[index];
            index = (index + 1) % poolSize;

            gsap.killTweensOf(p);

            // Instantly place at current mouse pos
            gsap.set(p, {
                x,
                y,
                scale: gsap.utils.random(0.5, 1),
                opacity: 0.9,
            });

            // Animate trail (slightly downward for comet effect)
            gsap.to(p, {
                opacity: 0,
                scale: 0,
                y: y + gsap.utils.random(14, 32),
                duration: gsap.utils.random(0.65, 0.9),
                ease: 'power3.out',
                overwrite: true,
                onComplete: () => {
                    gsap.set(p, { scale: 0, opacity: 0 }); // ready for reuse
                },
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Trail container */}
            <div
                ref={trailRef}
                className="fixed inset-0 pointer-events-none z-[49]"
                style={{ transform: 'translateZ(0)' }}
            />

            {/* Your original arrow cursor */}
            <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none"
                fill="none"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
                ref={cursorRef}
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <path
                    d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                    className="fill-foreground stroke-background/50"
                />
            </svg>
        </>
    );
};

export default CustomCursor;