import React from "react";
import type { SkillBadgeProps } from "../../types";

export const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => (
    <span className="text-[#43c9f2] inline-block px-2 py-1 rounded-md">
        {children}
    </span>
);
