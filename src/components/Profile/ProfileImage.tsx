import React from "react";

interface ProfileImageProps {
    src: string;
    alt?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
    src,
    alt = "Profile Picture",
}) => (
    <div className="md:col-span-1 flex justify-center">
        <img
            id="profile-image"
            src={src}
            alt={alt}
            className="max-w-full w-full aspect-square object-cover rounded-lg shadow-lg transition-opacity duration-300"
        />
    </div>
);
