import { styled } from "styled-components";

import SideMenu from "../side-menu/SideMenu";
import { NAV_NAME } from "../side-menu/nav-link";
import AboutMe from "../about-me/AboutMe";
import IntroDuction from "../introduction/IntroDuction";

type Props = {};

const Home = ({}: Props) => {
    return (
        <Container className="flex   justify-center">
            {" "}
            <AboutMe />
            <SideMenu />
            <div className="mt-40   lg:-translate-x-40 w-full  lg:w-[60%] ">
                <IntroDuction sectionId={NAV_NAME.HOME} />
                {/* <div id={NAV_NAME.ABOUT} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">ABOUT</h1>
                </div>
                <div id={NAV_NAME.CV} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">CV</h1>
                </div>
                <div id={NAV_NAME.SERVICES} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">SERVICES</h1>
                </div>
                <div id={NAV_NAME.SKILLS} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">SKILLS</h1>
                </div>
                <div id={NAV_NAME.PROJECTS} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">PROJECT</h1>
                </div>
                <div id={NAV_NAME.COMMENTS} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">COMMENTS</h1>
                </div>
                <div id={NAV_NAME.CONTACT_US} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">CONTACT US</h1>
                </div>
                <div style={{ height: "500px" }}>
                    <h1 className="  font-bold ">CONTACT USSSS</h1>
                </div> */}
            </div>
        </Container>
    );
};

const Container = styled.div`
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

export default Home;
