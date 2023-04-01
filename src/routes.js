import { createBrowserRouter } from "react-router-dom";

import AuthenticationHandler from "./pages/authentication_pages/AuthenticationHandler.js";
import SignIn from "./pages/authentication_pages/sign_in/SignIn.js";
import SignUp from "./pages/authentication_pages/sign_up/SignUp";
import RecoverPassword from "./pages/authentication_pages/recover_password/RecoverPassword";

export const ROOT = "/";
export const LOGIN = "/signIn";
export const REGISTER = "/signUp";
export const RECOVER_PASSWORD = "/recover-password";

export const router = createBrowserRouter([
  { path: ROOT, element: <AuthenticationHandler /> },
  { path: LOGIN, element: <SignIn /> },
  { path: REGISTER, element: <SignUp /> },
  { path: RECOVER_PASSWORD, element: <RecoverPassword /> },
]);
