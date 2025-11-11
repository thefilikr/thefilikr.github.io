import React from "react";
import type { Project } from "../../types";
import { useAutoSlide } from "../../hooks";
import { TerminalWindow } from "../ui";
import { ProjectSlide } from "./ProjectSlide";
import { ProjectDockItem } from "./ProjectDockItem";

interface ProjectsDockProps {
    projects: Project[];
}

export const ProjectsDock: React.FC<ProjectsDockProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useAutoSlide(projects.length);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <TerminalWindow title="filikr@projects:~">
                <div className="relative overflow-hidden">
                    {/* Slides */}
                    <div
                        className="workspace flex transition-transform duration-700 ease-in-out"
                        aria-live="polite"
                    >
                        {projects.map((project, index) => (
                            <ProjectSlide
                                key={project.id}
                                project={project}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </div>

                    {/* Dock */}
                    <div
                        id="dock"
                        className="dock absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3"
                    >
                        {projects.map((project, index) => (
                            <ProjectDockItem
                                key={project.id}
                                project={project}
                                isActive={index === currentIndex}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
};
