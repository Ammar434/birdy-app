import { useState } from 'react';

export const useAddPost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addPost = async (post) => {
    setIsLoading(true);
    console.log("post dans useAddPost",post)
    try {
      const response = await fetch('/api/user/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return [addPost, isLoading];
};