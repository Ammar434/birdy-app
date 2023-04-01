import React from "react";
import SignIn from "./sign_in/SignIn";

const AuthenticationHandler = () => {
  let isAuthenticated = false;

  if (isAuthenticated) {
    return <div> Logged in</div>;
  }
  return <SignIn />;
};

export default AuthenticationHandler;
