import { Box, Grid } from "@chakra-ui/react";
import { React } from "react";
import constants from "../../../../utils/constants.js";

import FormLogIn from "./FormLogIn.js";
import TitleRecover from "./TitleRecover.js";

const LeftSide = () => {
  return (
    <Box flex="1" w="100%">
      <Grid
        h={"100%"}
        // w={"100%"}
        templateRows="repeat(3, 1fr)"
        // margin={100}
      >
        <TitleRecover />
        <FormLogIn />
      </Grid>
    </Box>
  );
};

export default LeftSide;
