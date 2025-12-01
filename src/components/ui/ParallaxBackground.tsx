import React, { useEffect, useState } from 'react';

export default function ParallaxBackground() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setOffset({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div
                className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-3xl opacity-20 dark:opacity-30 transition-transform duration-200 ease-out"
                style={{ transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)` }}
            />
            <div
                className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl opacity-20 dark:opacity-30 transition-transform duration-200 ease-out"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            />
        </div>
    );
}
