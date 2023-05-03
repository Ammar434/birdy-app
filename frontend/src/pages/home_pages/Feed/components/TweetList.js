
import { Box, Text, IconButton, Avatar, Spacer, Flex, Button } from "@chakra-ui/react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useState } from "react";

import { formatDistanceToNow, format } from 'date-fns';
import { useAuthContext } from "../../../../hooks/useAuthContext"

const TweetList = ( {post, postId}) => {
    const { user, dispatch } = useAuthContext();
    const author = post.author;
    const content = post.content;
    const dateCreated = post.dateCreated;
    const like = post.like;



    const userId = user._id;
    const now = new Date();
    const createdDate = new Date(dateCreated);
    let timeAgo;

    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
      if (!isLiked) {
        setLikeCount(likeCount + 1);
        setIsLiked(true);
      } else {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    }; 

    const handleLikeClickServer = async (postId, userId) => {
        //TODO : interaction avec le backend, quand au click ajout d'un like dans le post 
        try {
          const response = await fetch('/api/user/home/likePost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId, userId }),
          });
          const data = await response.json();
        }
        catch (error) {
          console.error(error);
        }
    };

    const handleUnlikeClickServer = async (postId, userId) => {
        //TODO : interaction avec le backend, quand au click suppression d'un like dans le post
        try {
          const response = await fetch('/api/user/home/removelikePost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId, userId }),
          });
          const data = await response.json();
        }
        catch (error) {
          console.error(error);
        }
   
    }; 

    const handleToggleLikeServeur = async (postId, userId) => {
      // Check if the post is liked 
      const isLiked = like.some(user => user._id === userId);

      if (isLiked) {
        // Unlike
        await handleUnlikeClickServer(postId, userId);
 
        
      } else {
        // Like
        await handleLikeClickServer(postId, userId);

      }
    };

    const handleDeletePost = async (postId) => {
      
      try {
        const response = await fetch('/api/user/home/deletePost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId }),
        });
        const data = await response.json();
      }
      catch (error) {
        console.error(error);
      }
    };


  

    if (now.getTime() - createdDate.getTime() < 24 * 60 * 60 * 1000) {
        timeAgo = formatDistanceToNow(createdDate, { addSuffix: true });
      } else {
        timeAgo = format(createdDate, 'dd MMM');
      }
  
    return (
    <Box
      w="100%"
      h="auto"
      key= {postId}
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
      <Flex 
        alignItems="center"  
        // center the elements
        justifyContent="space-between"
        mt={5}
      >
      <Button
        leftIcon={<FaHeart color={isLiked ? 'red' : 'gray'} />}
        onClick={() => handleLikeClick(!isLiked)}
      >
        {likeCount} Likes
      </Button>
      
      { post.author._id === userId && (
        <IconButton
        icon={<FaTrash />}
        
        onClick={()=> handleDeletePost(postId)}

      />
      )}
    </Flex>


    </Box>
  );
};
  export default TweetList;