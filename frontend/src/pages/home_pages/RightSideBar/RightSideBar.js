import { Box, Text } from "@chakra-ui/react";
import React from "react"; 
import SearchBar from "./components/SearchBar";
import AllUser from "./components/AllUser";


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
            <AllUser/>

        </Box>
    )
}

export default RightSideBar; 