import { useState } from "react";
import {
  Flex,
  Text,
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



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(text);
    //ajout d'un nouveau post. Appel à l'APi newPost pour créer un nouveau tweet 
    // await newPost(text);
    // // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    // const addPost = (newPost) => {
    //   setPosts((prevPosts) => [newPost, ...prevPosts]);
    // };
  
  }


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
          placeholder="Quoi de neuf ? "
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
            //onClick sends the tweet to the backend and then to the database and then to the frontend 
            onClick={handleSubmit}

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