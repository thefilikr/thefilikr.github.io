import React from "react";
import type { Project } from "../../types";

interface ProjectDockItemProps {
    project: Project;
    isActive: boolean;
    onClick: () => void;
}

export const ProjectDockItem: React.FC<ProjectDockItemProps> = ({
    project,
    isActive,
    onClick,
}) => (
    <button
        onClick={onClick}
        aria-label={`Открыть ${project.title}`}
        className={`app w-14 h-14 rounded-md overflow-hidden border transition-all duration-200 ${
            isActive ? "ring-2 ring-offset-2" : "opacity-70 hover:opacity-100"
        }`}
    >
        <img
            src={project.imgSrc}
            alt=""
            className="w-full h-full object-cover"
        />
    </button>
);
