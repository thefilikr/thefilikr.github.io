import React, { useEffect } from "react";
import { useMobileMenu } from "./hooks";
import { THEME_KEY, PROFILE_IMAGE } from "./constants";
import type { Theme } from "./types";

import { Header } from "./components/Header/Header";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { ProfileCard } from "./components/Profile";
// import { ProjectsDock } from "./components/Projects";
import { Footer } from "./components/Footer";

// --- Analytics ---
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-9HFKS8PCY3"; // <-- замените на свой

const COOKIE_NAME = "analytics_consent";

const CookieConsent: React.FC<{
    onAccept: () => void;
    onDecline: () => void;
}> = ({ onAccept, onDecline }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME);
        if (!consent) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_NAME, "accepted");
        setVisible(false);
        onAccept();
    };

    const decline = () => {
        localStorage.setItem(COOKIE_NAME, "declined");
        setVisible(false);
        onDecline();
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-md text-center">
            <p className="mb-2 text-sm">
                This website uses Google Analytics to improve its performance.
                the site. You can accept the use of analytics or opt out.
            </p>
            <div className="flex justify-center gap-4 mt-2">
                <button
                    onClick={accept}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                >
                    Accept
                </button>
                <button
                    onClick={decline}
                    className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-sm"
                >
                    Refuse
                </button>
            </div>
        </div>
    );
};

// --- App ---
const App: React.FC = () => {
    const mobileMenu = useMobileMenu();

    // Initialize theme on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(THEME_KEY) as Theme | null;
            if (!stored) {
                localStorage.setItem(THEME_KEY, "dark");
            }
            document.documentElement.classList.add(stored ?? "dark");
        } catch (error) {
            console.error("Failed to initialize theme:", error);
        }
    }, []);

    // Initialize GA if consent already given
    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME);
        if (consent === "accepted") {
            ReactGA.initialize(GA_MEASUREMENT_ID);
            ReactGA.send({
                hitType: "pageview",
                page: window.location.pathname,
            });
        }
    }, []);

    const handleConsentAccept = () => {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    };

    const handleConsentDecline = () => {
        // Здесь ничего не делаем, GA не инициализируется
        console.log("Пользователь отказался от аналитики");
    };

    return (
        <div
            id="app"
            className="dark-theme transition-colors duration-300 min-h-screen bg-[#1a1b26] text-[#c0caf5]"
        >
            <Header onOpenMobile={mobileMenu.open} />

            {/* Header spacer */}
            <div className="h-16" />

            <MobileMenu isOpen={mobileMenu.isOpen} onClose={mobileMenu.close} />

            <ProfileCard profileImage={PROFILE_IMAGE} />

            {/*<section id="projects" className="container mx-auto px-4 mt-10">
                <ProjectsDock projects={DEFAULT_PROJECTS} />
            </section>*/}

            <Footer />

            {/* Cookie Consent Banner */}
            <CookieConsent
                onAccept={handleConsentAccept}
                onDecline={handleConsentDecline}
            />
        </div>
    );
};

export default App;
