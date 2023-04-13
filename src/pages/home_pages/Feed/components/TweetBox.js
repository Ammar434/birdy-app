import React from 'react';
import { Button, Avatar, FormControl, Flex, Box, Input } from "@chakra-ui/react";




const TweetBox = () => {
    
        return (
            <Box
                w="100%"
                h="100%"
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p="4"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                
                <Box>
                    <Flex>
                        <Avatar src="https://pbs.twimg.com/profile_images/1360975814302658560/6a1nKj7i_400x400.jpg" />
                        <Input placeholder="What's happening?" type="text" />
                    </Flex>
                    <Input placeholder="Optional: Enter image URL" type="text" />
                    <Button>Tweet</Button>
                </Box>
            </Box>
        );

}

export default TweetBox; 