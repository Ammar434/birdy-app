import React, {useEffect, useState} from 'react';
import { Flex, Text, Box, Button,Divider, Avatar } from '@chakra-ui/react';
import { useAuthContext } from '../../../../hooks/useAuthContext';


const Actualite = () => {
  const [users, setusers] = useState([]);
  const { user  } = useAuthContext();
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

           onClick={() => handleFollow(userId1,userFriend._id)}>Follow</Button>

        </Flex>

      ))}
    </Box>
  );  
};

export default Actualite;
