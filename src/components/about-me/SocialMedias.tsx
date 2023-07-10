import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
    UilGithub,
    UilInstagram,
    UilTelegram,
    UilSkypeAlt,
    // @ts-ignore
} from "@iconscout/react-unicons";

type Props = {};

const socialMediaItems = [
    {
        icon: <UilInstagram />,
    },
    {
        icon: <UilTelegram />,
    },
    {
        icon: <UilSkypeAlt />,
    },
    {
        icon: <UilGithub />,
    },
];

const SocialMedias = ({}: Props) => {
    return (
        <Container
            as={motion.div}
            animate={{
                gap: "20px",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-24 flex justify-center w-full gap-0"
        >
            {socialMediaItems.map((item) => {
                return (
                    <motion.div className="border hover:border-2 item  transition-all hover:text-sky-200 hover:border-sky-200 cursor-pointer t rounded-full flex justify-center items-center">
                        {item.icon}
                    </motion.div>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    /* width: 100%; */
    .item {
        height: 50px;
        width: 50px;
    }
`;

export default SocialMedias;
