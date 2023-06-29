import React from "react";
import { Variants, motion } from "framer-motion";

type Props = {
    children: JSX.Element;
    styles?: React.CSSProperties;
    className?: string;
};

const variants: Variants = {
    hidden: { top: 0, bottom: 0, right: 0, left: 0 },
    visible: { left: "100%", transition: { duration: "0.6" } },
};

const FadeAnimation: React.FC<Props> = ({ children, styles, className }) => {
    return (
        <div style={styles} className={`${className} relative`}>
            {children}
            <motion.div
                variants={variants}
                className="absolute bg-sky-200 "
            ></motion.div>
        </div>
    );
};

export default FadeAnimation;
