import React from "react";

export const NavLink: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
    children,
    className = "",
    ...props
}) => (
    <a
        {...props}
        className={`nav-link hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded transition-colors duration-200 ${className}`}
    >
        {children}
    </a>
);
