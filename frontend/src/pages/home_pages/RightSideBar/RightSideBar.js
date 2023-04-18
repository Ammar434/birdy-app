import { Box, Text } from "@chakra-ui/react";
import React from "react"; 
import SearchBar from "./components/SearchBar";
import Actualite from "./components/Actualite";


const RightSideBar = () => {
    return (
        <Box
        w="full"
        h="full"
        padding={6}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        >

            <SearchBar/>
            <Actualite/>

        </Box>
    )
}

export default RightSideBar; 