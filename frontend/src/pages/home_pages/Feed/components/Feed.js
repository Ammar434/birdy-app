import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import usePosts from "../../../../hooks/usePost.js";
import useToggleLike from "../../../../hooks/useToggleLike";

const Feed = () => {
  const { posts, isLoading, refreshPosts } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box
      w="100%"
      h="100%"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      gap={6}
      borderRadius="xl"
      justifyContent="start"
      alignItems="center"
      p={10}
      css={{
        "&::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background:
            "linear-gradient(90deg, rgba(174,3,216,1) 0%, rgba(227,13,135,1) 100%)",
          borderRadius: "10px",
          border: "solid 1px #dedede",
        },
      }}
      overflow="auto"
    >
      <TweetBox refreshPosts={refreshPosts} />

      {posts.map((post) => (
        <TweetList key={`${post._id}`} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
