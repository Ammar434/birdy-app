import { createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/home_pages/Home.js"; 
import Profil from "./pages/home_pages/LeftSideBar/components/Profil.js"; 
import Notification from "./pages/home_pages/LeftSideBar/components/Notification.js"; 
import Messages from "./pages/home_pages/LeftSideBar/components/Messages.js";


export const ROOT = "/"; 
export const PROFIL= "/profil"; 
export const NOTIFICATION = "/notification"; 
export const MESSAGES = "/messages";


export const router = createBrowserRouter([
  { path: ROOT, element: <MainPage /> },
  { path: PROFIL, element: <Profil /> },
  { path: NOTIFICATION, element: <Notification /> },
  { path: MESSAGES, element: <Messages /> },
]);

