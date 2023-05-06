import { Box, Image } from "@chakra-ui/react";
import constants from "../../../../utils/constants.js";
import React from "react";

const RightSide = () => {
  return (
    <Box
      flex="1"
      m={constants.padding.kSmallPaddingValue}
      borderRadius={constants.radius.kRadius}
    >
      <Image
        src="https://wallpapercave.com/wp/wp5181475.jpg"
        alt="Sign in"
        objectFit="cover"
        borderRadius={constants.radius.kRadius}
        h="100%"
        w="100%"
      />
    </Box>
  );
};

export default RightSide;
