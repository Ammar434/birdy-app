import {
  Box,
  Grid,
  GridItem,
  Flex,
  Image,
  Heading,
  Text,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

import { useUserContext } from "../../../../hooks/useUserContext";
import { useEffect } from "react";

const Profile = () => {
  const { currentUser, isLoading, refreshUSer } = useUserContext();

  useEffect(() => {
    console.log("first");
    refreshUSer();
    // console.log(user);
  }, []);

  if (isLoading) return "Chargement...";

  const user = currentUser;
  const pseudo = currentUser.pseudo;
  const avatar = currentUser.avatar;
  const followers = currentUser.followers;
  const following = currentUser.following;
  const posts = currentUser.post;

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
      <Grid templateColumns="repeat(12, 1fr)" gap={3}>
        <GridItem colSpan={4} rowSpan={4}>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Image borderRadius="full" boxSize="200px" src={avatar} />
            <Heading size="md" mt={5}>
              {pseudo}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {user?.email}
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={8} rowSpan={4}>
          <Flex
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            h="100%"
          >
            <Box>
              <Text fontSize="sm" color="gray.500">
                Posts
              </Text>
              <Text fontSize="sm" color="gray.500">
                {user.post?.length || 0}
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Followers
              </Text>
              <Text fontSize="sm" color="gray.500">
                {followers?.length || 0}
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Following
              </Text>
              <Text fontSize="sm" color="gray.500">
                {following?.length || 0}
              </Text>
            </Box>
          </Flex>
          <Divider mt={5} />
        
        {posts ? ( 
          <SimpleGrid columns={3} spacing={5} mt={5}>
            {posts.map((post) => (
              <Box key={post.id}>{/* <Post post={post} /> */}</Box>
            ))}
          </SimpleGrid>
        ) : (
          <Text fontSize="sm" color="gray.500">
            No posts yet
          </Text>
        )}

        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
