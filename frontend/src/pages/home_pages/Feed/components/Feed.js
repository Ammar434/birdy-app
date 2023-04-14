import { Box, Text } from '@chakra-ui/react';
import TweetBox from './TweetBox';

const Feed = () => {
    return (
        <Box>
        <Text fontSize={50} color="purple.100"> Home </Text>
        <TweetBox />
        </Box>
    );
    }

export default Feed;