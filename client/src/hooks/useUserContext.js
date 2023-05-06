import { useContext } from "react";
import UserContext from "../context/UserContext.js";

export const useUserContext = () => {
  const context = useContext(UserContext);
  console.log(context);
  if (!context) {
    throw Error("useUserContext error");
  }

  return context;
};
