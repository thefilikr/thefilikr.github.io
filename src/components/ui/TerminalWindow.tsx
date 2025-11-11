import React from "react";

interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
    title,
    children,
}) => (
    <div className="w-full">
        <div className="flex items-center justify-between rounded-tl-lg rounded-tr-lg p-2 px-4 bg-[#16161e] mb-4">
            <div className="flex space-x-2">
                <div className="bg-[#ff5f56] h-3 w-3 rounded-full" />
                <div className="bg-[#ffbd2e] h-3 w-3 rounded-full" />
                <div className="bg-[#27c93f] h-3 w-3 rounded-full" />
            </div>
            <div className="text-sm text-gray-400">{title}</div>
            <div className="w-12" />
        </div>
        <div
            className="rounded-bl-lg rounded-br-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] p-6 border-[#292e42] overflow-hidden relative
 bg-[#1a1b26] rounded-lg transition-colors duration-300"
        >
            {children}
        </div>
    </div>
);
