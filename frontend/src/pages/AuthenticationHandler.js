import React from "react";
import { useAuthContext } from "../hooks/useAuthContext.js";
import MainPage from "./home_pages/MainPage.js";
import SignIn from "./authentication_pages/sign_in/SignIn.js";

const AuthenticationHandler = () => {
  const { user } = useAuthContext();

  if (!user) return <SignIn></SignIn>;
  return <MainPage />;
};

export default AuthenticationHandler;
