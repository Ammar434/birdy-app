import { useState } from "react";
import {
  Flex,
  Text,
  Input,
  Textarea,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(280);

  const handleTextChange = (event) => {
    const tweetText = event.target.value;
    setText(tweetText);
    setCharactersLeft(280 - tweetText.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const boxShadow = useColorModeValue(
    "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    "0px 10px 30px -5px rgba(255, 255, 255, 0.1)"
  );

  return (
    <Flex
      direction="column"
      p={4}
      w="full"
      rounded="xl"
      bg={bg}
      border="1px solid"
      borderColor={borderColor}
      boxShadow={boxShadow}
    >
      <Flex mb={2} align="center">
        <Text mr={2}>What's happening?</Text>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Write your tweet..."
          value={text}
          onChange={handleTextChange}
          mb={2}
          resize="none"
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
        />
        <Flex justify="space-between" align="center">
          <Text fontSize="xs" color="gray.500">
            {charactersLeft} characters left
          </Text>
          <IconButton
            type="submit"
            aria-label="Tweet"
            icon={<AddIcon />}
            bgGradient="linear(to-r, purple.400, pink.400)"
            _hover={{
              bgGradient: "linear(to-r, purple.500, pink.500)",
              boxShadow: "md",
            }}
            _focus={{
              boxShadow: "none",
            }}
            isDisabled={text.length === 0 || text.length > 280}
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default TweetBox;
// import { useState } from "react";
// import {
//   Flex,
//   Textarea,
//   Button,
//   IconButton,
//   useColorMode,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   useToast,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";

// const TweetBox = () => {
//   const { colorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [text, setText] = useState("");
//   const toast = useToast();

//   const handleTweet = (e) => {
//     e.preventDefault();
//     onClose();
//     setText("");
//     toast({
//       title: "Tweet sent!",
//       status: "success",
//       duration: 2000,
//       isClosable: true,
//     });
//   };

//   return (
//     <>
//       <IconButton
//         aria-label="New tweet"
//         icon={<AddIcon />}
//         onClick={onOpen}
//         position="fixed"
//         bottom="5%"
//         right="5%"
//         size="lg"
//         borderRadius="full"
//         bgGradient="linear(to-r, purple.400, pink.400)"
//         _hover={{
//           bgGradient: "linear(to-r, purple.500, pink.500)",
//           boxShadow: "md",
//         }}
//         _focus={{
//           boxShadow: "none",
//         }}
//       />
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent
//           bg={colorMode === "light" ? "white" : "blackAlpha.800"}
//           borderRadius="3xl"
//         >
//           <ModalHeader>Tweet something new</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Textarea
//               placeholder="What's happening?"
//               size="lg"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               borderRadius="lg"
//               resize="none"
//               focusBorderColor="purple.400"
//               borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
//               bg={colorMode === "light" ? "white" : "gray.800"}
//               color={colorMode === "light" ? "gray.700" : "white"}
//             />
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               colorScheme="purple"
//               mr={3}
//               onClick={handleTweet}
//               isDisabled={text.length === 0 || text.length > 280}
//               _disabled={{
//                 opacity: "0.4",
//                 cursor: "not-allowed",
//               }}
//             >
//               Tweet
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default TweetBox;
