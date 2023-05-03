import React, { useState, useContext, useEffect } from "react";
import { useColorMode, CircularProgress } from "@chakra-ui/react";
import theme from "../../utils/theme";

import Navigation from "./LeftSideBar/components/Navigation";
import Main from "./Feed/Main";
import RightSideBar from "./RightSideBar/RightSideBar";

import { HStack, Flex } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { colorMode } = useColorMode();
  const [selectedComponent, setSelectedComponent] = useState("Home");
  const { refreshUserData, user, isLoading } = useContext(AuthContext);

  useEffect(() => {
    refreshUserData();
  }, []);
  if (isLoading) return <div>Loading...</div>;

  function updateSelectedComponent(newValue) {
    setSelectedComponent(newValue);
  }
  return (
    <HStack w="full" h="100vh" bg={theme.colors.backgroundColor} padding={10}>
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
        borderRadius="3xl"
      >
        <>{user.pseudo + " " + user.email}</>
        <Navigation
          selectedComponent={selectedComponent}
          updateSelectedComponent={updateSelectedComponent}
        />
      </Flex>{" "}
      <Flex
        bg={colorMode === "light" ? "white" : "black"}
        w="full"
        h="full"
        padding={9}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
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
        borderRadius="3xl"
      >
        <RightSideBar />
      </Flex>
    </HStack>
  );
};

export default Home;
