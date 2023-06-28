import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/side-menu/SideMenu";

type Props = {};

function Home({}: Props) {
	return (
		<div className="">
			<SideMenu />
			<Outlet />
		</div>
	);
}

export default Home;
