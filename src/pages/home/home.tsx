import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/side-menu/SideMenu";
import MenuItem from "../../components/side-menu/MenuItem";
import { NAV_NAME } from "../../components/side-menu/nav-link";
import AboutMe from "../../components/about-me/AboutMe";

type Props = {};

function Home({}: Props) {
    return (
        <div className="flex justify-center  overflow-hidden">
            <SideMenu />
            <AboutMe />
            <div className="mt-40" style={{ width: "50%" }}>
                <div id={NAV_NAME.HOME} style={{ height: "500px" }}>
                    <h1 className="  font-bold ">Home</h1>
                </div>{" "}
                <div id={NAV_NAME.ABOUT} style={{ height: "500px" }}>
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
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
