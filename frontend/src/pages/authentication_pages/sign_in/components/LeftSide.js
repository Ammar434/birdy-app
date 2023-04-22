import { Box, Grid } from "@chakra-ui/react";
import { React } from "react";
import constants from "../../../../utils/constants.js";

import FormLogIn from "./FormLogIn.js";
import SwitchToSignUp from "./SwitchToSignUp.js";
import TitleLogIn from "./TitleLogIn.js";

const LeftSide = () => {
  return (
    <Box flex="1" w="100%">
      <Grid
        h={"100%"}
        gap={constants.padding.kSmallPaddingValue}
        // margin={100}
      >
        <TitleLogIn />
        <FormLogIn />
        <SwitchToSignUp />
      </Grid>
    </Box>
  );
};

export default LeftSide;
