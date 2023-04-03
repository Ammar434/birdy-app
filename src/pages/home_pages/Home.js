import React from "react";

import MenuNavigation from "./LeftSideBar/MenuNavigation";
import Feed from "./Feed/Feed"; 
import RightSideBar from "./RightSideBar/RightSideBar";

import { HStack, Flex } from "@chakra-ui/react";


const Home = () => {
  // Prend le isAuthentificated en paramétre. Si l'utilisateur est authentifier, alors on peut le faire entre dans la page home 
  // Sinon, on le redirige vers la page de connexion.

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
    <Flex
        as="menu"
        w="full"
        h="full"
        maxW={350}
        bg="white"
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="3xl">

        <MenuNavigation />
    </Flex>

    <Flex 
        as="feed" 
        w="full" 
        h="full"
        bg="white" 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        position="relative" 
        borderRadius="3xl"
    >

       <Feed/>
    </Flex>

    <Flex 
        as="search" 
        w="full" 
        h="full"
        maxW={350}
        bg="white" 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        position="relative" 
        borderRadius="3xl"
    >
       <RightSideBar/>

    </Flex>

  </HStack>
   
  );
};

export default Home;
