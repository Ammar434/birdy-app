import { createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/home_pages/Home.js"; 
import Profil from "./pages/home_pages/LeftSideBar/components/Profil.js"
 


export const ROOT = "/"; 
export const PROFIL= "/profil"; 


export const router = createBrowserRouter([
  { path: ROOT, element: <MainPage /> },
  { path: PROFIL, element: <Profil /> },
]);

