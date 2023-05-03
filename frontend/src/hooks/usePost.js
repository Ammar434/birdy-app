import { useState, useEffect } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
    try {
      const response = await fetch('/api/user/home/listPostAll');
      const { posts } = await response.json();
      const sortedPosts = posts.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)); // ordre chronologique
      setPosts(sortedPosts);
    } catch (error) {
      console.error(error);
    }
  };
      fetchPosts();
    }, []);

  return posts;

};
export default usePosts;
