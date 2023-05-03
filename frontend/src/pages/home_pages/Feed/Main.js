import { Text } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import FeedChoice from "./components/FeedChoice";
import NavBarFeed from "../LeftSideBar/components/NavBarFeed";
//FeedChoice peut changer en fonction de selectedComponent

const Main = ({ selectedComponent }) => {
  return (
    <>
      <NavBarFeed selectedComponent={selectedComponent} />
      <FeedChoice selectedComponent={selectedComponent} />
    </>
  );
};

export default Main;
