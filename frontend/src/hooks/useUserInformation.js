import { useState, useEffect } from "react";


export const useUserInformation = (Pseudo) => {
    const [userInformation, setUserInformation] = useState(null);
 
    const pseudo = localStorage.getItem("user");

    //set the userInformation state with the information from the local storage
    useEffect(() => {
        setUserInformation(pseudo);
        console.log(pseudo)
    }, [pseudo]);



    // useEffect(() => {
    //     const fetchUserInformation = async (pseudo) => {

    //         try {
    //             const response = await fetch("/api/user/home", {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ pseudo }),
    //             });
    //             const json = await response.json();
                
    //             setUserInformation(response.data);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchUserInformation();
    // }, [pseudo]);

    return userInformation
  };
