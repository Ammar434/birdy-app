import { Text, Box } from "@chakra-ui/react";
import React from "react"; 


const Messages = () => {
    return (

        <Box
            w="full"
            h="full"
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Text fontSize={50} color="purple.100"> 
            Bientot disponible . . . 
            </Text>
        </Box>

    ); 
}; 

export default Messages; 