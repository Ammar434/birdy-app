import { Center, GridItem, Text } from "@chakra-ui/react";

const TitleRecover = () => {
  return (
    <GridItem w="100%">
      <Center height={"100%"}>
        <Text
          fontSize={"5xl"}
          fontWeight={"bold"}
          color={"black"}
          textAlign={"center"}
        >
          Hey, did someone forget their password? 🥲
        </Text>
      </Center>
    </GridItem>
  );
};

export default TitleRecover;
