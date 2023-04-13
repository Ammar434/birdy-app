import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home_pages/Home.js"; 


export const ROOT = "/"; 
export const PROFIL= "/profil"; 
export const NOTIFICATION = "/notification"; 
export const MESSAGES = "/messages";
export const AMIS = "/amis"


export const router = createBrowserRouter([
  { path: ROOT, element: <Home/> },
  { path: PROFIL, element: <Home/> },
  { path: NOTIFICATION, element: <Home /> },
  { path: MESSAGES, element: <Home /> },
  { path: MESSAGES, element: <Home /> },
  
]);

