import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/side-menu/SideMenu";
import MenuItem from "../../components/side-menu/MenuItem";

type Props = {};

function Home({}: Props) {
    return (
        <div className="">
            <SideMenu />
            <div className="bg-blue-300 mb-8" style={{ height: "500px" }}>
                amanj{" "}
            </div>{" "}

            <div className="bg-blue-300 mb-8" style={{ height: "500px" }}>
                amanj{" "}
            </div>

            <div  id="amanj" className="bg-blue-300 mb-8" style={{ height: "500px" }}>
                amanjwwww{" "}
            </div>
            
            <div className="bg-blue-300 mb-8" style={{ height: "500px" }}>
                amanj{" "}
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
