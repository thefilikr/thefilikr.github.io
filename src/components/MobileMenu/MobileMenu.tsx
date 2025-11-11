import React from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const menuItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "Profile" },
        // { href: "#projects", label: "Проекты" },
    ];

    return (
        <div className="md:hidden mt-4 space-y-3 pb-3 container mx-auto px-4">
            {menuItems.map((item) => (
                <a
                    key={item.href}
                    className="mobile-nav-link block"
                    href={item.href}
                    onClick={onClose}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};
