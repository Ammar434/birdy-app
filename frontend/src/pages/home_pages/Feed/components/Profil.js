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
            <Box>
                <Text>Pseudo: </Text>

                {/* <Text>Pseudo: {pseudo}</Text>
                <Text>Email: {email}</Text>
                <Text>Password: {password}</Text>
                <Text>Description: {description}</Text> 
                <Text>Avatar: {avatar}</Text> */}
            </Box>
            <Box>
              <Text> Cover </Text>


            </Box>
        </>

    )
};

export default Profil;