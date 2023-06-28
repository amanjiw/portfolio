import styled from "styled-components";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { links } from "./nav-link";
import MenuItem from "./MenuItem";
import { useSideMenu } from "./useSideMenu";

type Props = {};

function SideMenu({}: Props) {
    const {} = useSideMenu({});

    return (
        <SideMenuContainer className="flex flex-col justify-around items-center  cursor-pointer rounded-3xl border-gray-500 border ">
            {links.map((item: any) => {
                return <MenuItem icon={item.icon} to={item.to} />;
            })}
        </SideMenuContainer>
    );
}

const SideMenuContainer = styled.div`
    width: 107px;
    height: 462px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 40px;

    .amanj {
        stroke: rgb(135, 206, 235);
    }
    .am {
        stroke: inherit;
    }
`;

export default SideMenu;
