import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
}

interface Props {
    items: NavItem[];
}

export default function MobileMenu({ items }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
                aria-label="Abrir menú"
            >
                <Menu className="w-8 h-8" />
            </button>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#1a1a1a] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-[var(--color-secondary)] dark:hover:text-[var(--color-secondary)] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
