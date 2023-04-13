import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

import Navigation from "./LeftSideBar/components/Navigation";
import Main from "./Feed/Main";
import RightSideBar from "./RightSideBar/RightSideBar";

import { HStack, Flex } from "@chakra-ui/react";


const Home = () => {
  // Prend le isAuthentificated en paramétre. Si l'utilisateur est authentifier, alors on peut le faire entre dans la page home 
  // Sinon, on le redirige vers la page de connexion.
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const {colorMode, toggleColorMode } = useColorMode();
  const [selectedComponent, setSelectedComponent] = useState("Feed");


  function updateSelectedComponent(newValue) {
    setSelectedComponent(newValue);
  }

  return (
    <HStack w="full" h="100vh" bg="purple.100" padding={10}>
    <Flex
        as="menu"
        w="full"
        h="full"
        bg={colorMode === "light" ? "white" : "black"}
        maxW={350}
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="flex-start"
        borderRadius="3xl">

        <Navigation selectedComponent={selectedComponent} updateSelectedComponent={updateSelectedComponent} />

    </Flex>

    <Flex 
        bg={colorMode === "light" ? "white" : "black"}
        w="full" 
        h="full"
        padding={9}
        alignItems="center" 
        justifyContent="flex-start" 
        flexDirection="column" 
        position="relative" 
        borderRadius="3xl">
        
        <Main selectedComponent={selectedComponent} />


    </Flex>

    <Flex 
        w="full" 
        h="full"
        maxW={350}
        bg={colorMode === "light" ? "white" : "black"}
        padding={6}
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        position="relative" 
        borderRadius="3xl">

       <RightSideBar/>

    </Flex>

  </HStack>
   
  );
};

export default Home;
