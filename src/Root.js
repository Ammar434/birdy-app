import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home_pages/Home.js"; 
import Profil from "./pages/home_pages/LeftSideBar/components/Profil.js"; 
import Notification from "./pages/home_pages/LeftSideBar/components/Notification.js"; 
import Messages from "./pages/home_pages/LeftSideBar/components/Messages.js";


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

