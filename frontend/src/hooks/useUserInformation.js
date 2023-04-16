import { useState, useEffect } from "react";


export const useUserInformation = (Pseudo) => {
    const [userInformation, setUserInformation] = useState(null);
 
    const pseudo = localStorage.getItem("user");

    //set the userInformation state with the information from the local storage
    useEffect(() => {
        setUserInformation(pseudo);
        console.log(pseudo)
    }, [pseudo]);


    return userInformation
  };
