import { Divider, GridItem, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../../../routes.js";
import constants from "../../../../utils/constants.js";

const SwitchToSignUp = () => {
  return (
    <GridItem w={"100%"} paddingX={constants.padding.kPaddingValue * 3}>
      <Stack spacing={5} direction="row" align={"baseline"}>
        <Divider orientation="horizontal" p={5} />
        <Text color={"black"}>Or</Text>
        <Divider orientation="horizontal" p={5} />
      </Stack>
      <Text fontSize="xlg" align="center" mt="6" color={"black"}>
        Don't have an account?{"  "}
        <Link
          as={RouterLink}
          to={REGISTER}
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
  );
};

export default SwitchToSignUp;
