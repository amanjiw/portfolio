import { useEffect, useState } from "react";

type Props = {
    text: string;
    delay: number;
    infinte?: boolean;
    resetTimeouteDelay?: number;
};

function Typewriter({
    text,
    delay,
    resetTimeouteDelay = 100,
    infinte = false,
}: Props) {
    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        let timeout: any, resetTimeout: any;

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (infinte) {
            resetTimeout = setTimeout(() => {
                setCurrentText("");
                setCurrentIndex(0);
            }, resetTimeouteDelay);
        }

        return () => {
            clearTimeout(timeout);
            clearTimeout(resetTimeout);
        };
    }, [currentText, delay, text]);

    return <span>{currentText}</span>;
}

export default Typewriter;
