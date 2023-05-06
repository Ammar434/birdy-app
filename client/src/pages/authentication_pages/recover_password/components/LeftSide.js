import { Box, Grid, Link, useColorMode, Center } from "@chakra-ui/react";
import { React } from "react";
import constants from "../../../../utils/constants.js";

import FormLogIn from "./FormLogIn.js";
import TitleRecover from "./TitleRecover.js";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN } from "../../../../routes.js";

const LeftSide = () => {
  const { colorMode } = useColorMode();

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
        <Center>
          <Link
            as={RouterLink}
            to={LOGIN}
            color={colorMode === "light" ? "teal.800" : "white:100"}
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "purple.100" }}
          >
            Go back
          </Link>{" "}
        </Center>
      </Grid>
    </Box>
  );
};

export default LeftSide;
