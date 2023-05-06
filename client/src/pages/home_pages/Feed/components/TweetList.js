import { Box, Text, Avatar, IconButton, Spacer, Flex, Button } from "@chakra-ui/react";
import { FaHeart, FaTrash } from "react-icons/fa";

import { formatDistanceToNow, format } from "date-fns";
import { useUserContext } from "../../../../hooks/useUserContext";
import { useDeletePost } from "../../../../hooks/useDeletePost";
import useToggleLike from "../../../../hooks/useToggleLike";
import { useEffect } from "react";

const TweetList = ({ post, refreshPosts }) => {
  const { currentUser } = useUserContext();
  const { handleDeletePost } = useDeletePost();

  const { likeCount, isLiked, toggleLike } = useToggleLike({
    postId: post._id,
    userId: currentUser._id,
    initialLike: post.like.includes(currentUser._id),
    initialLikeCount: post.like.length,
  });

  useEffect(() => {}, [post.like.length]);

  const handleSubmit = async (e) => {
    handleDeletePost(post._id);
    refreshPosts();
  };

  const authorId = post.author._id;
  const authorPseudo = post.author.pseudo;
  const content = post.content;
  const dateCreated = post.dateCreated;
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
        <Avatar src={`https://api.multiavatar.com/${authorId}.svg`} mr={3} />
        <Text fontWeight="bold">{authorPseudo}</Text>
        <Spacer />
        <Text fontSize="sm" color="gray.500">
          {timeAgo}
        </Text>
      </Flex>
      <Text>{content}</Text>
      <Flex 
        alignItems="center"
        justifyContent="space-between"
        mt={5}
        >
        <Button
          leftIcon={<FaHeart color={isLiked ? "red" : "gray"} />}
          onClick={toggleLike}
          mt={3}
        >
          {likeCount} Likes
        </Button>
        { authorId === currentUser._id && (
        <IconButton
        icon={<FaTrash />}
        onClick={()=> handleSubmit()}
      />
      )}

      </Flex>
    </Box>
  );
};
export default TweetList;
