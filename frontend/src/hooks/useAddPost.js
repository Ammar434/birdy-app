import { useState } from 'react';

export const useAddPost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addPost = async (post) => {
    setIsLoading(true);
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
      setIsLoading(true);
      console.error(error);
    }
  };

  return [addPost, isLoading];
};