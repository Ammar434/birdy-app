import React, {useState, useEffect} from "react";
import { Text, Box } from "@chakra-ui/react";

import { useUserInformation } from "../../../../hooks/useUserInformation.js";



const Profil = () => { 
  // [userInformation, setUserInformation] = useState(null);
  // const pseudo = localStorage.getItem("user");

  // useEffect(() => {
  //   const fetchUserInformation = async () => {
  //     // Simulating a fetch request to get the user's information
  //     const response = await fetch("h");
  //     const data = await response.json();
  //     setUserInformation(data);
  //   };

  //   fetchUserInformation();
  // }, [pseudo]);

  // if (!userInformation) {
  //   return <div>Loading user information...</div>;
  // }

    return (
      <>
      
      <Box
      w="full"
      h="full"
      justifyContent="center"
      alignItems="start"
      display="flex"
      flexDirection="column">
      
        <Text fontSize={50}>  Profil </Text>      
        <Text fontSize={20} color="gray"> User pseudo </Text>
        {/* lists of follower from the backend */}
        <Text fontSize={20} color="gray"> Followers </Text>
        {/* lists of following from the backend */}
        <Text fontSize={20} color="gray"> Following </Text>
        {/* lists of post from the backend */}
      </Box>

      <Box 
      w="full"
      h="full"
      justifyContent="center"
      alignItems="start"
      display="flex"
      flexDirection="column">

        <Text fontSize={50}> Posts </Text>
        <Text fontSize={20} color="gray"> Posts </Text>
      </Box>
      </>
    )
};

export default Profil;