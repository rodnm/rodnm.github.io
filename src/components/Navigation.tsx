import React, { useState, useEffect } from 'react';

interface NavItem {
    label: string;
    href: string;
}

interface Props {
    items: NavItem[];
}

export default function Navigation({ items }: Props) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px' // Active when section is in middle of viewport
            }
        );

        items.forEach((item) => {
            const id = item.href.replace('#', '');
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL without jump
            window.history.pushState(null, '', href);
        }
    };

    return (
        <ul className="hidden md:flex gap-6 font-medium">
            {items.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={`transition-colors relative py-1 ${isActive
                                    ? 'text-[var(--color-secondary)] font-bold'
                                    : 'hover:text-[var(--color-secondary)]'
                                }`}
                        >
                            {item.label}
                            {isActive && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-secondary)] rounded-full" />
                            )}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
