import React, {useState} from "react";
import { Box } from "@chakra-ui/react";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import { useAuthContext } from "../../../../hooks/useAuthContext";

const Feed = () => {

  const {posts} = useAuthContext();

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
      <TweetBox />
      {posts.map((post) => (
        <TweetList key={post._id} post={post} postId={post._id}/>
      ))}
    </Box>
  );
};

export default Feed;
