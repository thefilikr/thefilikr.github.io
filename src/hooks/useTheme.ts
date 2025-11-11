import { useEffect, useState } from "react";
import type { Theme } from "../types";
import { THEME_KEY } from "../constants";

export function useTheme(): [Theme, (t?: Theme) => void] {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const stored = localStorage.getItem(THEME_KEY) as Theme | null;
            return stored ?? "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);

        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            console.error("Failed to save theme preference:", error);
        }
    }, [theme]);

    const toggleTheme = (newTheme?: Theme) => {
        setTheme(
            (currentTheme) =>
                newTheme ?? (currentTheme === "dark" ? "light" : "dark"),
        );
    };

    return [theme, toggleTheme];
}
