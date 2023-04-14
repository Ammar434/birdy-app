import { useState, useEffect } from 'react';
import { Box, Text, Avatar, Stack, Divider, Input, Textarea, Button, Flex } from '@chakra-ui/react';

const Profile = () => {
  const [friends, setFriends] = useState([]);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

//Creation d'une nouvelle fonction pour recuperer les données de l'api 
//permet de récupérer les listes d'amis de l'utilisateur connecté avec l'api
// l'api est dans le serveur, et lui même interagit avec la base de donnée Mango
//fetch to the server in the server folder i have a file called serveur.js and in this file i have a function called api
//this function is used to get the data from the database


  useEffect(() => {
    fetch("/api").then((response) => response.json())
    .then((data) => { setFriends(data); });
    setIsLoading(false);

  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://example.com/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
      const data = await response.json();
      console.log(data);
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Flex 
        h={16}
        padding={6}
        alignItems="center"
        justifyContent="space-between">
     {isLoading ? (
          <Text>Loading friends...</Text>
        ) : (
        console.log(friends),
          friends.map((friend) => (
            <Box key={friend.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Avatar size="md" name={friend.name} src={friend.avatar} mx="auto" my="4" />
              <Text textAlign="center" fontWeight="bold" fontSize="md">
                {friend.name}
              </Text>
              <Text textAlign="center" fontSize="sm">
                {friend.username}
              </Text>
            </Box>
          ))
        )}
        </Flex>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" mx="auto" my="4" />
      <Text textAlign="center" fontWeight="bold" fontSize="xl">
        John Doe
      </Text>
      <Text textAlign="center" fontSize="md">
        @johndoe
      </Text>
      <Stack spacing="4" p="4">
        <Text fontWeight="bold" fontSize="lg">
          Friends
        </Text>
        
        <Divider />
        <Text fontWeight="bold" fontSize="lg">
          Add Comment
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <Input placeholder="Enter your comment" value={comment} onChange={(event) => setComment(event.target.value)} />
            <Textarea placeholder="Enter your comment" value={comment} onChange={(event) => setComment(event.target.value)} />
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
    </>
  );
};

export default Profile;