import styled from "styled-components";
import { Variants, motion } from "framer-motion";
import { Link } from "react-scroll";
type Props = {
    to: string;
    icon: JSX.Element;
};

const containerVariant: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

function MenuItem({ to, icon }: Props) {
    return (
        <Container
            variants={containerVariant}
            className="cursor-pointer"
            as={motion.div}
        >
            <Link
                spy={true}
                activeClass="active"
                className="default "
                smooth
                duration={500}
                to={to}
                offset={-120}
            >
                {icon}
            </Link>
        </Container>
    );
}

const Container = styled.div`
    .default {
        stroke: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
    }

    .active {
        stroke: rgb(135, 206, 235) !important;
        color: rgb(135, 206, 235) !important;
    }
`;

export default MenuItem;
