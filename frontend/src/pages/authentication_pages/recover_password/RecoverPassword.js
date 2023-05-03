import React from "react";
import theme from "../../../utils/theme.js";
import constants from "../../../utils/constants.js";

import {
  Box,
  Center,
  Flex,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const RecoverPassword = () => {
  const [isWeb] = useMediaQuery("(min-width: 1200px)");
  const { colorMode } = useColorMode();

  return (
    <Center h={"100vh"} bg={theme.colors.backgroundColor}>
      <Box
        bg={colorMode === "light" ? "white" : "black"}
        borderRadius={constants.radius.kRadius}
        w="130vh"
        h="80vh"
        p={constants.padding.kSmallPaddingValue}
        // color="red"
      >
        <Flex color="white" h="100%">
          <LeftSide />
          {isWeb && <RightSide />}
        </Flex>
      </Box>
    </Center>
  );
};

export default RecoverPassword;
