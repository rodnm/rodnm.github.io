import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
    formId?: string;
    labels: {
        name: string;
        email: string;
        message: string;
        send: string;
        sending: string;
        success: string;
        error: string;
    };
}

export default function ContactForm({ formId = 'YOUR_FORM_ID', labels }: Props) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                    {labels.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[var(--color-secondary)] outline-none transition-all"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                    {labels.email}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[var(--color-secondary)] outline-none transition-all"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                    {labels.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[var(--color-secondary)] outline-none transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl dark:bg-[var(--color-accent)] dark:text-gray-900 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? labels.sending : labels.send}
                <Send className="w-5 h-5" />
            </button>

            {status === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center">
                    {labels.success}
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-center">
                    {labels.error}
                </div>
            )}
        </form>
    );
}
