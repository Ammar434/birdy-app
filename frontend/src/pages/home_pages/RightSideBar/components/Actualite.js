import React, {useEffect, useState} from 'react';
import { Flex, Text, Box, Button,Divider, Avatar } from '@chakra-ui/react';
import { useAuthContext } from '../../../../hooks/useAuthContext';


const Actualite = () => {
  const [users, setusers] = useState([]);
  const { user , following } = useAuthContext();
  const userId1 = user._id; 

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
        const filteredUsers = data.users.filter((userdata) => userdata._id !== userId1 );
        setusers(filteredUsers)

      } catch (error) {
        console.error(error);
      }
    };
    getlistAllUser();
  }, []);

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





  return (
    <Box>
      {users.map((userFriend) => (
      <Flex
      key={userFriend._id}
      m="4"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
    >
          <Avatar src={`https://api.multiavatar.com/${userFriend._id}.svg`} mr="4" />
          <Text mr="4">{userFriend.pseudo}</Text>
          <Button
              _hover={{
                bg: "purple.200",
                color: "white",
              }}
              bg={following.includes(userFriend._id) ? "purple.200" : ""}
              border="1px"
              borderColor={user.following.includes(userFriend._id) ? "" : "purple.200"}
              onClick={() => handleToggleFollow(userId1, userFriend._id)}
            >
              {user.following.includes(userFriend._id) ? "Unfollow" : "Follow"}
            </Button>
     
        </Flex>

      ))}
    </Box>
  );  
};

export default Actualite;
