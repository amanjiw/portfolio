import { Outlet } from "react-router-dom";

import HomeComponent from "../../components/home/Home";

type Props = {};

function Home({}: Props) {
    return (
        <>
            <HomeComponent />
            <Outlet />
        </>
    );
}

export default Home;
