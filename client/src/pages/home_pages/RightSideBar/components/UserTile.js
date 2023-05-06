import React from "react";
import { Flex, Text, Button, Avatar } from "@chakra-ui/react";

const UserTile = ({ user, currentUser, handleToggleFollow }) => {
  return (
    <Flex
      key={user._id}
      m="4"
      alignItems="center"
      borderRadius="lg"
      overflow="hidden"
    >
      <Avatar src={`https://api.multiavatar.com/${user._id}.svg`} mr="4" />
      <Text mr="4" width={100}>
        {user.pseudo}
      </Text>
      <Button
        _hover={{
          bg: "purple.200",
          color: "white",
        }}
        bg={currentUser.following.includes(user._id) ? "purple.200" : ""}
        border="1px"
        borderColor={
          currentUser.following.includes(user._id) ? "" : "purple.200"
        }
        onClick={() => handleToggleFollow(currentUser._id, user._id)}
      >
        {currentUser.following.includes(user._id) ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default UserTile;
