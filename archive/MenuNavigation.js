import React from "react";
import { Box } from "@chakra-ui/react";

import Navigation from "../src/pages/home_pages/LeftSideBar/components/Navigation";
import Profil from "../src/pages/home_pages/Feed/components/Profil";

const MenuNavigation = (props) => (
    console.log("selected component in MenuNavigation",props),
    console.log("selectedComponent in MenuNavigation",props.selectedComponent),
    <Navigation setSelectedComponent={props.setSelectedComponent} selectedComponent={props.selectedComponent}/>
);

export default MenuNavigation;