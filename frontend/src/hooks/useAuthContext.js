import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);


  // console.log(context.user);
  if (!context) {
    throw Error("useAuthContext error");
  }

  return context;
};
