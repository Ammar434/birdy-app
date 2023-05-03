import { Text, Box } from "@chakra-ui/react";
import React from "react"; 


const Notification = () => {
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
        Notifications bientôt disponible . . . 
        </Text>
    </Box>
    );
}; 

export default Notification; 