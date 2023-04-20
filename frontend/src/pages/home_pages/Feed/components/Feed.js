import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import usePosts from "../../../../hooks/usePost";

const Feed = () => {

    const posts = usePosts();

    //console.log avec la map de posts pour voir ce que cela fait 
    //
    posts.map((post) => (
        console.log("post dans feed avec la map ", post)
    )); 


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
      {/* <TweetBox addPost={addPost} /> */}
      <TweetBox />

      {posts.map((post) => (
        <TweetList key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
