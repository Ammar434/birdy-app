import React, {useState, useEffect} from "react";
import { Text, Box } from "@chakra-ui/react";

import { useUserInformation } from "../../../../hooks/useUserInformation.js";



const Profil = () => { 
  //Create state for the user information
  //from the backend useUserInformation hook


  const userInformation = useUserInformation();
  console.log("useInfo",userInformation)
  const pseudo = userInformation.pseudo;
  console.log(pseudo)


  
// const [description, setDescription] = useState("");
// const [avatar, setAvatar] = useState("");

// const userInformation = useUserInformation();
// console.log("useInfo",userInformation)
// const pseudo = userInformation.pseudo;
// console.log(pseudo)

// const userObject = JSON.parse(userInformation);

// console.log(userInformation.pseudo); 

// useEffect(() => {
//   if (userInformation) {
//     // console.log("userObject",userObject); 
//     // setPseudo(userObject.pseudo);
//   } else {
//     setPseudo("no user");
//   }
// }, [userInformation]);
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