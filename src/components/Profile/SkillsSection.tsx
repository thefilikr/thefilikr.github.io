import React from "react";
import { SkillBadge } from "../ui";

interface SkillsSectionProps {
    title: string;
    skills: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
    title,
    skills,
}) => (
    <div className="mt-4">
        <div className="flex mb-2">
            <span className="text-[#7aa2f7] font-semibold w-32 shrink-0">
                {title}
            </span>
            <span className="separator mr-2">:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-36">
            {skills.map((skill, index) => (
                <SkillBadge key={index}>{skill}</SkillBadge>
            ))}
        </div>
    </div>
);
