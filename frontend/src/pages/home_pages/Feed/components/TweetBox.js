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

const TweetBox = ({ refreshPosts }) => {
  //get the email from the localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const { email } = user;
  const [text, setText] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(280);
  const [addPost, isLoading] = useAddPost();
  const [userId, setUserId] = useState("");

  const getUserId = async (email) => {
    try {
      const response = await fetch("/api/user/home/idUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      const userId = data.user;
      setUserId(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextChange = (event) => {
    const tweetText = event.target.value;
    setText(tweetText);
    getUserId(email);
    setCharactersLeft(280 - tweetText.length);
  };

  //TODO : cree un useEffect permettant de rafrachir la page apres l'envoi du tweet

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ content: text, userId });
    refreshPosts();
    setText("");
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
