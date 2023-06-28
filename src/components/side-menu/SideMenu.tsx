import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { useSideMenu } from "./useSideMenu";

type Props = {};

function SideMenu({}: Props) {
	return (
		<SideMenuContainer className="flex flex-col justify-center items-center rounded-3xl border-gray-500 border ">
			<MenuItem />
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
`;

export default SideMenu;
