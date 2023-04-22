import constants from "../../../../utils/constants.js";
import {
  Box,
  Center,
  Text,
  Grid,
  GridItem,
  Stack,
  Divider,
  Link,
} from "@chakra-ui/react";
import { LOGIN } from "../../../../routes.js";
import { React } from "react";
import { Link as RouterLink } from "react-router-dom";

import FormSignUp from "./FormSignUp.js";

const LeftSide = () => {
  return (
    <Box flex="1" w={"100%"}>
      <Grid
        h={"100%"}
        gap={constants.padding.kSmallPaddingValue}
        paddingY={100}
      >
        <GridItem w="100%">
          <Center height={"100%"}>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"black"}>
              Welcome to Birdy 🐦
            </Text>
          </Center>
        </GridItem>

        <FormSignUp />
        <GridItem w={"100%"} paddingX={constants.padding.kPaddingValue * 3}>
          <Stack spacing={5} direction="row" align={"baseline"}>
            <Divider orientation="horizontal" p={5} />
            <Text color={"black"}>Or</Text>
            <Divider orientation="horizontal" p={5} />
          </Stack>
          <Text fontSize="xlg" align="center" mt="6" color={"black"}>
            Alreadt have an account?{"  "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color="teal.800"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "purple.100" }}
            >
              Register
            </Link>{" "}
            instead!
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LeftSide;
