import React, { useEffect, useState } from "react";

type Props = {
    count: number;
    delay: number;
};

export default function Counter({ count, delay }: Props) {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        let timeout: any;

        if (count > currentCount) {
            timeout = setTimeout(() => {
                setCurrentCount((prevCount) => prevCount + 1);
            }, delay);
        }

        return () => clearTimeout(timeout);
    }, [currentCount]);

    return <span>{currentCount}</span>;
}
