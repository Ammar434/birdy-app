import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/user/home/listPostAll");
        const { posts } = await response.json();
        const sortedPosts = posts.sort(
          (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
        ); // ordre chronologique
        setPosts(sortedPosts);
        console.log(sortedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [refresh]);

  return {
    posts,
    refreshPosts: () => setRefresh(!refresh),
  };
};
export default usePosts;
