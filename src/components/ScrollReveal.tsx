import React, { useEffect, useRef, useState } from 'react';

interface Props {
    children: React.ReactNode;
    animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
    delay?: number;
    className?: string;
    duration?: number;
}

export default function ScrollReveal({
    children,
    animation = 'fade',
    delay = 0,
    className = '',
    duration = 700
}: Props) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    const animations = {
        fade: 'opacity-0',
        'slide-up': 'opacity-0 translate-y-10',
        'slide-left': 'opacity-0 -translate-x-10', // Fixed direction
        'slide-right': 'opacity-0 translate-x-10'  // Fixed direction
    };

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : animations[animation]
                } ${className}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    );
}
