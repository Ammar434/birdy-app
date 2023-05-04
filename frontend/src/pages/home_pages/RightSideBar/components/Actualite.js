import { Box } from "@chakra-ui/react";
import UserTile from "./UserTile.js";
import { useFollowing } from "../../../../hooks/useFollowing.js";
import { useUserContext } from "../../../../hooks/useUserContext";

const Actualite = ({ users }) => {
  const { currentUser, refreshUSer } = useUserContext();
  const { handleFollow, handleUnfollow } = useFollowing();

  const handleToggleFollow = async (user1Id, user2Id) => {
    // Check if the user is already following
    const isFollowing = currentUser.following.includes(user2Id);

    if (isFollowing) {
      // Unfollow
      await handleUnfollow(user1Id, user2Id);
    } else {
      // Follow
      await handleFollow(user1Id, user2Id);
    }
    // setRefresh((prev) => !prev);
    refreshUSer();
  };

  if (!currentUser.following) return "Chargement...";

  return (
    <Box>
      {users.map((userFromList) =>
        userFromList._id === currentUser._id ? null : (
          <UserTile
            key={userFromList._id}
            user={userFromList}
            currentUser={currentUser}
            handleToggleFollow={handleToggleFollow}
          />
        )
      )}
    </Box>
  );
};

export default Actualite;
