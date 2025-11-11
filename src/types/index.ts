export interface Project {
    id: string;
    title: string;
    imgSrc: string;
    alt?: string;
}

export type Theme = "dark" | "light";

export interface InfoRowProps {
    label: string;
    value: React.ReactNode;
}

export interface SkillBadgeProps {
    children: React.ReactNode;
}
