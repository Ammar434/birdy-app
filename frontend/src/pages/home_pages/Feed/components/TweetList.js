import {
  Box,
  Text,
  IconButton,
  Avatar,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

import { formatDistanceToNow, format } from "date-fns";
// import { useAuthContext } from "../../../../hooks/useAuthContext";

const TweetList = ({ post }) => {
  const { author, content, dateCreated, like, likedBy } = post;
  // const { user, pseudo, avatar, dispatch } = useAuthContext();
  // const id = author._id;
  if (!author) return <div>Loading </div>;
  // console.log(author._id);

  const handleLikeClick = () => {
    //TODO : interaction avec le backend, quand au click ajout d'un like dans le post
  };

  // const isLiked = likedBy.includes(author.id);
  const isLiked = false;

  const now = new Date();
  const createdDate = new Date(dateCreated);
  let timeAgo;

  if (now.getTime() - createdDate.getTime() < 24 * 60 * 60 * 1000) {
    timeAgo = formatDistanceToNow(createdDate, { addSuffix: true });
  } else {
    timeAgo = format(createdDate, "dd MMM");
  }

  return (
    <Box
      w="100%"
      h="auto"
      maxH={600}
      boxShadow="lg"
      borderRadius="xl"
      border="1px"
      borderColor="white"
      p={10}
    >
      <Flex alignItems="center" mb={5}>
        <Avatar src={`https://api.multiavatar.com/${author._id}.svg`} mr={3} />
        <Text fontWeight="bold">{author.pseudo}</Text>
        <Spacer />
        <Text fontSize="sm" color="gray.500">
          {timeAgo}
        </Text>
      </Flex>
      <Text>{content}</Text>
      <Flex alignItems="center" mt={5}>
        <Button
          leftIcon={<FaHeart />}
          colorScheme={isLiked ? "red" : "gray"}
          onClick={handleLikeClick}
          mr={3}
          disabled={isLiked}
        >
          {like.length} Likes
        </Button>
        {isLiked && (
          <IconButton
            icon={<FaHeart />}
            colorScheme="red"
            aria-label="Liked"
            disabled
          />
        )}
      </Flex>
    </Box>
  );
};
export default TweetList;
