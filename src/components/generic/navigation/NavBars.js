import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";
import Br from "../../generic/text/Br";

const NavBars = (props = {}) => {
    let drawerOpen, imgSrc;
    ({ drawerOpen = false, imgSrc, ...props } = props);

    const [drawerState, setDrawerState] = React.useState(drawerOpen);
    const toggleDrawer = () => setDrawerState(!drawerState);

    return (
        <>
            <HeaderBar imgSrc={imgSrc} toggleDrawer={toggleDrawer} />

            <SideBar state={drawerState} toggleDrawer={toggleDrawer} />
            <Br />
        </>
    );
};

export default NavBars;
