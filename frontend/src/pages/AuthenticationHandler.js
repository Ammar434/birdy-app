import React from "react";
import { UserContextProvider } from "../context/UserContext.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import SignIn from "./authentication_pages/sign_in/SignIn.js";
import Home from "./home_pages/Home.js";


const AuthenticationHandler = () => {
  const { user } = useAuthContext();

  if (!user) return <SignIn/>;
  return <Home></Home>;

  // <UserContextProvider>
  // </UserContextProvider>
  
};

export default AuthenticationHandler;
