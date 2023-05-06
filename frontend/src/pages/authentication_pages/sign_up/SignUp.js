import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import constants from "../../../utils/constants.js";
import theme from "../../../utils/theme.js";
import LeftSide from "./components/LeftSide.js";
import RightSide from "./components/RightSide.js";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";

const SignUp = () => {
  const { colorMode } = useColorMode();
  const [isWeb] = useMediaQuery("(min-width: 1200px)");

  return (
    <Center h={"100vh"} bg={theme.colors.backgroundColor}>
      <Box
        bg={colorMode === "light" ? "white" : "black"}
        borderRadius={constants.radius.kRadius}
        w="150vh"
        h="95%"
        p={constants.padding.kSmallPaddingValue}
        color="red"
      >
        <Flex h="100%">
          <LeftSide />
          {isWeb && <RightSide />}
        </Flex>
      </Box>
    </Center>
  );
};

export default SignUp;
