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
  useColorMode,
} from "@chakra-ui/react";
import { LOGIN } from "../../../../routes.js";
import { React } from "react";
import { Link as RouterLink } from "react-router-dom";

import FormSignUp from "./FormSignUp.js";

const LeftSide = () => {
  const { colorMode } = useColorMode();

  return (
    <Box flex="1">
      <Grid
        h={"100%"}
        w={"100%"}
        // gap={constants.padding.kSmallPaddingValue}
        // paddingY={100}
      >
        <GridItem w="100%">
          <Center height={"100%"}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {""}
              Welcome to Birdy 🐦
            </Text>
          </Center>
        </GridItem>

        <FormSignUp />
        <GridItem w={"100%"} paddingX={constants.padding.kPaddingValue * 3}>
          <Stack spacing={5} direction="row" align={"baseline"}>
            <Divider
              orientation="horizontal"
              p={5}
              borderColor={colorMode !== "light" ? "white" : "blackAlpha.300"}
            />
            <Text color={colorMode === "light" ? "teal.800" : "white"}>Or</Text>

            <Divider
              orientation="horizontal"
              p={5}
              borderColor={colorMode !== "light" ? "white" : "blackAlpha.300"}
            />
          </Stack>
          <Text
            fontSize="xlg"
            align="center"
            mt="6"
            color={colorMode === "light" ? "teal.800" : "white"}
          >
            Already have an account? {"  "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color={colorMode === "light" ? "teal.800" : "white"}
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "purple.100" }}
            >
              Log in
            </Link>{" "}
            instead!
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LeftSide;
