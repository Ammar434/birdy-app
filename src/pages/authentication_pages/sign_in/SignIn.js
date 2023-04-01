import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import constants from "../../../utils/constants.js";
import theme from "../../../utils/theme.js";
import LeftSide from "./components/LeftSide.js";
import RightSide from "./components/RightSide.js";

const SignIn = () => {
  return (
    <Center h={"100vh"} bg={theme.colors.backgroundColor}>
      <Box
        bg="white"
        borderRadius={constants.radius.kRadius}
        w="130vh"
        h="80vh"
        p={constants.padding.kSmallPaddingValue}
        color="red"
      >
        <Flex color="white" h="100%">
          <LeftSide />
          <RightSide />
        </Flex>
      </Box>
    </Center>
  );
};

export default SignIn;
