import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "ghost",
    className = "",
    ...props
}) => {
    const baseStyles =
        "p-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2";
    const variantStyles = {
        primary: "bg-primary text-white hover:bg-opacity-90",
        secondary: "bg-secondary text-white hover:bg-opacity-90",
        ghost: "hover:bg-gray-700",
    };

    return (
        <button
            {...props}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};
