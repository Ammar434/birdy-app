import React from "react";
import { useAuthContext } from "../hooks/useAuthContext.js";
import SignIn from "./authentication_pages/sign_in/SignIn.js";
import Home from "./home_pages/Home.js";

const AuthenticationHandler = () => {
  const { user } = useAuthContext();
  console.log(user);
  if (!user) return <SignIn />;
  return <Home />;
};

export default AuthenticationHandler;
