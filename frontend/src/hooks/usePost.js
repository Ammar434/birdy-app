import { useState, useEffect } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
    try {
      const response = await fetch('/api/user/home/listPostAll');
      const { posts } = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

      fetchPosts();
    }, []);

  return posts;
  
};
export default usePosts;
