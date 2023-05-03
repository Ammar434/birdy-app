import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
} from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, ...action.payload };
    case "LOGIN":
      return {
        user: action.payload,
        pseudo: action.payload.pseudo, // Assuming `pseudo` is a property of your user data
        avatar: `https://api.multiavatar.com/${action.payload._id}.svg`,
      };
    case "LOGOUT":
      return {
        user: null,
        pseudo: "",
        avatar: "",
        followers: [],
        following: [],
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    pseudo: "",
    avatar: "",
    followers: [],
    following: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const getUserInformation = useCallback(async () => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

    // if (state.user || !userFromLocalStorage?.userId) return;

    try {
      const response = await fetch("/api/user/profil/getUserById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: userFromLocalStorage.userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }

      const userData = await response.json();

      dispatch({
        type: "SET_USER_DATA",
        payload: {
          user: userData.user,
          pseudo: userData.user.pseudo,
          avatar: `https://api.multiavatar.com/${userData.user._id}.svg`,
          followers: userData.user.followers,
          following: userData.user.following,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  }, [state.user]);

  const refreshUserData = useCallback(async () => {
    if (!state.user) return;

    try {
      setIsLoading(true);
      const response = await fetch("/api/user/profil/getUserById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: state.user._id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }

      const userData = await response.json();

      dispatch({
        type: "SET_USER_DATA",
        payload: {
          user: userData.user,
          pseudo: userData.user.pseudo,
          avatar: `https://api.multiavatar.com/${userData.user._id}.svg`,
          followers: userData.user.followers,
          following: userData.user.following,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  }, [state.user]);

  useEffect(() => {
    getUserInformation();
  }, [getUserInformation]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        refreshUserData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
