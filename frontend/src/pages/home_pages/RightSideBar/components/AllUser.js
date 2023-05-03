import React, {useEffect, useState} from 'react';
import { Flex, Text, Box, Button, Avatar, Spinner } from '@chakra-ui/react';
import { useAuthContext } from '../../../../hooks/useAuthContext';

import theme from '../../../../utils/theme';

const AllUser = () => {
  const [users, setusers] = useState([]);
  const { user , following } = useAuthContext();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect (() => {
    const getlistAllUser = async () => {
      try {
        const response = await fetch('/api/user/listUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json(); 
        const filteredUsers = user && user._id ? data.users.filter((userdata) => userdata._id !== user._id) : [];
        setusers(filteredUsers)
        setIsLoading(false); // Une fois que toute les données sont récupérer, ont

      } catch (error) {
        console.error(error);
      }
    };
    if (user && user._id){
      getlistAllUser();

    }
  }, [user]);


  const handleFollow = async (user1Id, user2Id) => {

    try {
      const response = await fetch('/api/user/profil/addfollowing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user1Id, user2Id }),
      });
      const data = await response.json();
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (user1Id, user2Id) => {

    try {
      const response = await fetch('/api/user/profil/removefollowing',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user1Id, user2Id }),
      });
      const data = await response.json();

    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleFollow = async (user1Id, user2Id) => {
    // Check if the user is already following
    const isFollowing = following.includes(user2Id);
  
    if (isFollowing) {
      // Unfollow
      await handleUnfollow(user1Id, user2Id);
    } else {
      // Follow
      await handleFollow(user1Id, user2Id);
    }
  }

  if (isLoading || !users || !following) return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner />
    </Flex>
    
    );


  if (!isLoading && users.length > 0 && user._id) {
  return (
    <Box>
      {users.map((userFriend) => (
      <Flex
      key={userFriend._id}
      m="4"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      fontFamily={theme.fonts.fontFamily}
    >      
          <Avatar src={`https://api.multiavatar.com/${userFriend._id}.svg`} mr="4" />
          <Text fontSize={theme.fonts.fontSize} fontFamily={theme.fonts.fontFamily} mr="4">{userFriend.pseudo}</Text>
          <Button
          fontFamily={theme.fonts.fontFamily}
          _hover={{
              color: "white",
            }}
            bg={following?.includes(userFriend._id) ? "purple.200" : ""}
            border="1px"
            borderColor={user?.following?.includes(userFriend._id) ? "" : "purple.200"}
            onClick={() => handleToggleFollow(user._id, userFriend._id)}
          >
            {following?.includes(userFriend._id) ? "Unfollow" : "Follow"}
          </Button>
     
        </Flex>

      ))}
    </Box>
  );  
  }


};


export default AllUser;
