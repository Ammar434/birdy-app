import { Center, GridItem, Text, useColorMode } from "@chakra-ui/react";

const TitleLogIn = () => {
  const { colorMode } = useColorMode();
  return (
    <GridItem w="100%">
      <Center height={"100%"}>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={colorMode === "light" ? "black" : "white"}
        >
          Welcome back 👋
        </Text>
      </Center>
    </GridItem>
  );
};

export default TitleLogIn;
