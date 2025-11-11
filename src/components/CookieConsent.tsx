// src/components/CookieConsent.tsx
import { useState, useEffect } from "react";

const COOKIE_NAME = "analytics_consent";

export const CookieConsent = ({ onAccept }: { onAccept: () => void }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME);
        if (!consent) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_NAME, "true");
        setVisible(false);
        onAccept();
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-md text-center">
            <p className="mb-2">
                Этот сайт использует Google Analytics для улучшения работы
                сайта. Вы можете принять использование аналитики.
            </p>
            <button
                onClick={accept}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
                Принять
            </button>
        </div>
    );
};
