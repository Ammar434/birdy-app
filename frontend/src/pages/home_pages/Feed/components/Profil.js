import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
// import { useUser } from "../../hooks/useUser";
// import { usePosts } from "../../hooks/usePosts";
// import { useFollowers } from "../../hooks/useFollowers";
// import { useFollowing } from "../../hooks/useFollowing";
// import Post from "../Post";

const Profile = ({ username }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  // const { isLoading: userLoading } = useUser(username, setUser);
  // const { isLoading: postsLoading } = usePosts(username, setPosts);
  // const { isLoading: followersLoading } = useFollowers(
  //   username,
  //   setFollowers
  // );
  // const { isLoading: followingLoading } = useFollowing(
  //   username,
  //   setFollowing
  // );

  const { isLoading: userLoading } = false;
  const { isLoading: postsLoading } = false;
  const { isLoading: followersLoading } = false;
  const { isLoading: followingLoading } = false; 


  useEffect(() => {
    setUser(null);
    setPosts([]);
    setFollowers([]);
    setFollowing([]);
  }, [username]);

  return (
    <h1>Bonjour</h1>
  );
};

export default Profile;
