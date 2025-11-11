import type { Project } from "../types";

export const THEME_KEY = "filikr:theme" as const;

export const DEFAULT_PROJECTS: Project[] = [
    {
        id: "project1",
        title: "Warden Guard Bot",
        imgSrc: "/img/projects/warden_guard_bot.jpg",
        alt: "Warden Guard Bot",
    },
    {
        id: "project2",
        title: "Reactive Canvas",
        imgSrc: "/img/projects/reactive-canvas.png",
        alt: "Reactive Canvas",
    },
];

export const PROFILE_IMAGE = "/img/photo-dark.jpg";

export const USER_INFO = {
    username: "FILIkR",
    name: "Rodion",
    role: "Backend developer",
    gender: "Male",
    os: "WSL Linux",
    shell: "Zsh",
    editor: "Zed",
};

export const HARD_SKILLS = [
    "Golang",
    "Python | FastAPI",
    "PostgreSQL",
    "Docker",
    "Git",
    "TelegramAPI",
];

export const SOFT_SKILLS = [
    "Communication",
    "Problem solving",
    "Time management",
    "Teamwork",
    "Critical thinking",
    "Adaptability",
];
