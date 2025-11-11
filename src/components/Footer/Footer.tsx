import React from "react";

export const Footer: React.FC = () => (
    <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FILIKR • Made with React + TypeScript +
        Tailwind
    </footer>
);
