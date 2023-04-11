import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react"; 
import SearchBar from "./components/SearchBar";
import Actualite from "./components/Actualite";


const RightSideBar = () => {
    return (
        <Box
        as="search"
        w="full"
        h="full"
        padding={6}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        >

            <SearchBar/>
            <Text fontSize={50} color="purple.100"> Actualité </Text>
            <Actualite/>

        </Box>
    )
}

export default RightSideBar; 