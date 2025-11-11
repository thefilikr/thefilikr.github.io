import React from "react";
import type { Project } from "../../types";

interface ProjectSlideProps {
    project: Project;
    isActive: boolean;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
    project,
    isActive,
}) => (
    <div
        className={`min-w-full shrink-0 transform ${
            isActive ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
        aria-hidden={!isActive}
    >
        <div className="flex items-center justify-center">
            <img
                src={project.imgSrc}
                alt={project.alt ?? project.title}
                className="max-w-full rounded-md shadow-md"
            />
        </div>
    </div>
);
