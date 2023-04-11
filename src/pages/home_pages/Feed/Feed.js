import { Text } from "@chakra-ui/react";
import React from "react"; 
import Notification from "../LeftSideBar/components/Notification";
import Profil from "../LeftSideBar/components/Profil";
import NavBarFeed from "./components/NavBarFeed";
import { Box } from "@chakra-ui/react";


const Feed = () => {
    return (
        <>
            <NavBarFeed/>
            <Text fontSize={50} color="purple.100"> Feed </Text>
        </>
    ); 
}

export default Feed; 