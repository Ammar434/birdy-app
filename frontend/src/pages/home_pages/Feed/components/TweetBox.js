import { useState } from "react";
import {
  Flex,
  Text,
  Textarea,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useAddPost } from "../../../../hooks/useAddPost";
import { useAuthContext } from "../../../../hooks/useAuthContext";


const TweetBox = () => {
  const { user, posts, dispatch } = useAuthContext();
  const userId = user._id;
  const [text, setText] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(280);
  const [addPost, isLoading] = useAddPost();
  

  
  const handleTextChange = (event) => {
    const tweetText = event.target.value;
    setText(tweetText);
    setCharactersLeft(280 - tweetText.length);
  };

 
  const handleSubmit = async(e) => {
    e.preventDefault();
   
    const newPost = await addPost({ content: text, userId });
    console.log(newPost)
    // Dispatch an action to add the new post to your state
    dispatch({ type: "ADD_POST", payload: newPost });
    setText('');
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
            isDisabled={text.length === 0 || text.length > 280 || isLoading}
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default TweetBox;