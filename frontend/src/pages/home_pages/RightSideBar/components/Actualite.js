import { Box } from "@chakra-ui/react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import UserTile from "./UserTile.js";
import { useFollowing } from "../../../../hooks/useFollowing.js";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const Actualite = ({ users }) => {
  const { user, following } = useContext(AuthContext);
  const { handleFollow, handleUnfollow } = useFollowing();

  const handleToggleFollow = async (user1Id, user2Id) => {
    // Check if the user is already following
    const isFollowing = following.includes(user2Id);

    if (isFollowing) {
      // Unfollow
      await handleUnfollow(user1Id, user2Id);
    } else {
      // Follow
      await handleFollow(user1Id, user2Id);
    }
  };
  // return <></>;

  if (!user.following) return "Chargement...";

  return (
    <Box>
      {users.map((userFromList) => (
        <UserTile
          key={userFromList._id}
          user={userFromList}
          currentUser={user}
          handleToggleFollow={handleToggleFollow}
        />
      ))}
    </Box>
  );
};

export default Actualite;
