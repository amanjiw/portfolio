import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
type Props = {
    to: string;
    icon: JSX.Element;
};

function MenuItem({ to, icon }: Props) {
    return (
        <Container>
            <Link
                spy={true}
                activeClass="active"
                smooth
                duration={500}
                to={to}

                // offset={-200}
            >
                {icon}
            </Link>
        </Container>
    );
}

const Container = styled.div`
    .active {
        stroke: rgb(135, 206, 235);
    }
    .active-styel {
        stroke: inherit;
    }
`;

export default MenuItem;
