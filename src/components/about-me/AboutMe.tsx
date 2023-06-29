import { Variants, motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import SocialMedias from "./SocialMedias";
import FadeAnimation from "../common/FadeAnimation";

type Props = {};

const variant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

function AboutMe({}: Props) {
    return (
        <Container
            as={motion.div}
            variants={variant}
            animate="visible"
            initial="hidden"
            className=" flex p-5 pt-10 flex-col items-center border rounded-3xl border-gray-500 "
        >
            <motion.img
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
                className="rounded-3xl mt-5"
                style={{ width: "75%" }}
                src="./amanj.JPG"
                alt=""
            />

            <FadeAnimation className="mt-20">
                <h2 className="text-base font-light montserrat">
                    ghaderi.amanj@outlook.com
                </h2>
            </FadeAnimation>
            <FadeAnimation className="mt-2">
                <h2 className="text-lg">ایران، آذربایجان‌غربی، سردشت</h2>
            </FadeAnimation>
            <SocialMedias />
        </Container>
    );
}

const Container = styled.div`
    width: 20%;
    height: 80%;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
`;

export default AboutMe;
