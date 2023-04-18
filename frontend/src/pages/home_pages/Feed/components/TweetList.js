import { Text, Box } from "@chakra-ui/react";

const TweetList = () => {

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
        <Text fontSize="2xl" fontWeight="bold" mb={5}> ListTweet </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={5}> Menu principal
        titre du tweet 
        contenu du tweet
        date du tweet



        </Text>
        
        </Box>

   ); 
}; 

export default TweetList;