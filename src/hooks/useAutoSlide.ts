import { useEffect, useState } from "react";

export function useAutoSlide(itemCount: number, interval = 6000) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (itemCount <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % itemCount);
        }, interval);

        return () => clearInterval(timer);
    }, [itemCount, interval]);

    return [currentIndex, setCurrentIndex] as const;
}
