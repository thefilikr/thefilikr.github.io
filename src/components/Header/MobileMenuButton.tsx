import React from "react";
import { Button } from "../ui";

interface MobileMenuButtonProps {
    onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
    onClick,
}) => (
    <Button
        id="mobile-menu-button"
        onClick={onClick}
        className="md:hidden ml-2"
        aria-label="Открыть меню"
    >
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </Button>
);
