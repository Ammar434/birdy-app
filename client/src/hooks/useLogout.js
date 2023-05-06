import { LOGIN, ROOT } from "../routes.js";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");

    // update the auth context
    dispatch({ type: "LOGOUT" });
    navigate(LOGIN);
  };

  return { logout };
};
