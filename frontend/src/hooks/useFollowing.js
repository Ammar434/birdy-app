export const useFollowing = () => {
  const handleFollow = async (user1Id, user2Id) => {
    try {
      const response = await fetch("/api/user/profil/addfollowing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user1Id, user2Id }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (user1Id, user2Id) => {
    try {
      const response = await fetch("/api/user/profil/removefollowing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user1Id, user2Id }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  return { handleFollow, handleUnfollow };
};
