import { Center, GridItem, Text, useColorMode } from "@chakra-ui/react";

const TitleRecover = () => {
  const { colorMode } = useColorMode();
  return (
    <GridItem w="100%">
      <Center height={"100%"}>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={colorMode === "light" ? "black" : "white"}
          textAlign={"center"}
        >
          Hey, did someone forget their password? 🥲
        </Text>
      </Center>
    </GridItem>
  );
};

export default TitleRecover;
