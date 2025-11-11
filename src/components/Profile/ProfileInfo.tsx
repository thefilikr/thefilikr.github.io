import React from "react";
import { InfoRow } from "../ui";
import { SkillsSection } from "./SkillsSection";
import { USER_INFO, HARD_SKILLS, SOFT_SKILLS } from "../../constants";

export const ProfileInfo: React.FC = () => (
    <div className="md:col-span-2 space-y-3">
        <InfoRow
            label="User"
            value={`${USER_INFO.username} (${USER_INFO.name})`}
        />
        <InfoRow label="Profession" value={USER_INFO.role} />
        <InfoRow label="Gender" value={USER_INFO.gender} />
        <InfoRow label="OS" value={USER_INFO.os} />
        <InfoRow label="Shell" value={USER_INFO.shell} />
        <InfoRow label="IDE" value={USER_INFO.editor} />

        <SkillsSection title="Hard Skills" skills={HARD_SKILLS} />
        <SkillsSection title="Soft Skills" skills={SOFT_SKILLS} />

        <div className="mt-6 pt-4 border-t border-separator">
            <div className="flex items-center">
                <span className="text-[#bf616a] mr-2">λ</span>
                <span className="text-[#c0caf5]">Welcome!</span>
            </div>
        </div>
    </div>
);
