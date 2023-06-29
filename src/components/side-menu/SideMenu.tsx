import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { links } from "./nav-link";
import MenuItem from "./MenuItem";
import { useSideMenu } from "./useSideMenu";

type Props = {};

const variant: Variants = {
    hidden: {
        x: -200,
        y: "-50%",
    },
    visible: {
        x: 0,

        transition: {
            when: "beforeChildren",
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

function SideMenu({}: Props) {
    const {} = useSideMenu({});

    return (
        <SideMenuContainer
            as={motion.div}
            variants={variant}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-around items-center rounded-3xl border-gray-500 border "
        >
            {links.map((item: any) => {
                return <MenuItem icon={item.icon} to={item.to} />;
            })}
        </SideMenuContainer>
    );
}

const SideMenuContainer = styled.div`
    width: 97px;
    height: 462px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
`;

export default SideMenu;
