import React from "react";
import type { Theme } from "../../types";
import { Button } from "../ui";

interface ThemeToggleProps {
    theme: Theme;
    onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    theme,
    onToggle,
}) => (
    <Button
        id="theme-toggle"
        aria-label="Переключить тему"
        onClick={onToggle}
        className="text-2xl"
        title={`Переключить тему (текущая: ${theme})`}
    >
        <span className="theme-icon" aria-hidden="true">
            {theme === "dark" ? "🌙" : "☀️"}
        </span>
    </Button>
);
