import {
  Divider,
  GridItem,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../../../routes.js";
import constants from "../../../../utils/constants.js";

const SwitchToSignUp = () => {
  const { colorMode } = useColorMode();

  return (
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
        Don't have an account? {"  "}
        <Link
          as={RouterLink}
          to={REGISTER}
          color={colorMode === "light" ? "teal.800" : "white"}
          fontWeight="medium"
          textDecor="underline"
          _hover={{ background: "purple.100" }}
        >
          Register
        </Link>{" "}
        instead!
      </Text>
    </GridItem>
  );
};

export default SwitchToSignUp;
