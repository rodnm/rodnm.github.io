import { useEffect } from 'react';

export default function LanguageDetector() {
    useEffect(() => {
        // Only run once
        if (typeof window !== 'undefined' && sessionStorage.getItem('language-detected')) return;

        const userLang = navigator.language.split('-')[0];
        const currentPath = window.location.pathname;

        // If root path and browser is English
        if (currentPath === '/' && userLang === 'en') {
            sessionStorage.setItem('language-detected', 'true');
            window.location.href = '/en';
        }
    }, []);

    return null;
}
