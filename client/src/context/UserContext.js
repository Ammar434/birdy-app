import { createContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { user } = useAuthContext();

  const fetchUserData = async (userId) => {
    if (!user) return;

    try {
      const response = await fetch("/api/user/profil/getUserById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: userId }),
      });
      const data = await response.json();
      const avatar = "https://api.multiavatar.com/" + userId + ".svg";
      setUser({ ...data.user, avatar });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const userId = user.userId;
      fetchUserData(userId);
      console.log(user);
    }
  }, [user, refresh]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isLoading,
        refreshUSer: () => setRefresh(!refresh),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
