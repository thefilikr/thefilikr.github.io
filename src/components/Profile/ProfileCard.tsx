import React from "react";
import { TerminalWindow } from "../ui";
import { ProfileImage } from "./ProfileImage";
import { ProfileInfo } from "./ProfileInfo";

interface ProfileCardProps {
    profileImage: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profileImage }) => (
    <main
        id="about"
        className="container mx-auto flex justify-center mt-10 px-4"
    >
        <div className="w-full max-w-6xl">
            <TerminalWindow title="filikr@info:~">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProfileImage src={profileImage} />
                    <ProfileInfo />
                </div>
            </TerminalWindow>
        </div>
    </main>
);
