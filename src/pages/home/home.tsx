import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

function Home({}: Props) {
	return (
		<div className="">
			home
			<Outlet />
		</div>
	);
}

export default Home;
