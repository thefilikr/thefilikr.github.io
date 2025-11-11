import React from "react";
import type { InfoRowProps } from "../../types";

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
    <div className="flex">
        <span className="text-[#7aa2f7] font-semibold w-32 shrink-0">
            {label}
        </span>
        <span className="text-[#565f89] mr-2">:</span>
        <span className="text-[#c0caf5]">{value}</span>
    </div>
);
