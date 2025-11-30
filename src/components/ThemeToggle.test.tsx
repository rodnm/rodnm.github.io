import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
    beforeEach(() => {
        // Reset DOM and localStorage
        document.documentElement.classList.remove('dark');
        localStorage.clear();
    });

    it('renders correctly', () => {
        render(<ThemeToggle />);
        const button = screen.getByRole('button', { name: /toggle theme/i });
        expect(button).toBeInTheDocument();
    });

    it('toggles theme on click', () => {
        render(<ThemeToggle />);
        const button = screen.getByRole('button', { name: /toggle theme/i });

        // Initial state should be light (based on default state in component)
        expect(document.documentElement.classList.contains('dark')).toBe(false);

        // Click to toggle to dark
        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(localStorage.getItem('theme')).toBe('dark');

        // Click to toggle back to light
        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(localStorage.getItem('theme')).toBe('light');
    });
});
