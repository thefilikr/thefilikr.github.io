import React from "react";
// import { useTheme } from "../../hooks";
import { NavLink } from "../ui";
// import { ThemeToggle } from "./ThemeToggle";
import { MobileMenuButton } from "./MobileMenuButton";

interface HeaderProps {
    onOpenMobile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobile }) => {
    // const [theme, toggleTheme] = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#16161e] shadow-lg z-50 transition-colors duration-300">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">
                            FILIkR
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#about">Profile</NavLink>
                        {/*<NavLink href="#projects">Проекты</NavLink>*/}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center">
                        {/*<ThemeToggle theme={theme} onToggle={toggleTheme} />*/}
                        <MobileMenuButton onClick={onOpenMobile} />
                    </div>
                </div>
            </nav>
        </header>
    );
};
