import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ReloadPrompt() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            console.log('SW Registered: ' + r);
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });

    const close = () => {
        setOfflineReady(false);
        setNeedRefresh(false);
    };

    return (
        <div className="ReloadPrompt-container">
            {(offlineReady || needRefresh) && (
                <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-[200] flex flex-col gap-2">
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {offlineReady ? (
                            <span>App lista para trabajar offline</span>
                        ) : (
                            <span>Nuevo contenido disponible, click para actualizar.</span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        {needRefresh && (
                            <button
                                className="px-3 py-1 bg-[var(--color-primary)] text-white rounded text-sm hover:opacity-90 transition-opacity"
                                onClick={() => updateServiceWorker(true)}
                            >
                                Actualizar
                            </button>
                        )}
                        <button
                            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => close()}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
