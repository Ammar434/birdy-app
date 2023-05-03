import { useState, useEffect } from "react";
import useFetchUsers from "./useFetchUsers.js";
import { useAuthContext } from "./useAuthContext";

export const useSearch = (userInput) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { allUsers, loading, error } = useFetchUsers();
  const { user } = useAuthContext();
  useEffect(() => {
    const filteredUsers = allUsers.filter((_user) => {
      return (
        _user.pseudo.toLowerCase().includes(userInput.toLowerCase()) &&
        _user._id !== user._id
      );
    });

    setFilteredUsers(filteredUsers);
  }, [userInput, allUsers, user._id]);

  return [filteredUsers, loading, error];
};
