import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";
import { ROOT } from "../routes.js";

export const useResetPassword = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const reset = async (email, previousPassword, newPassword) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, previousPassword, newPassword }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //   // save the user to local storage
      //   localStorage.setItem("user", JSON.stringify(json));

      //   // update the auth context
      //   dispatch({ type: "LOGIN", payload: json });

      //   // update loading state
      setIsLoading(false);
      //   navigate(ROOT);
      //initially it was set to navigate("/ROOT") but it was not working
    } else {
      console.log("erreur");
    }
  };

  return { reset, isLoading, error };
};
