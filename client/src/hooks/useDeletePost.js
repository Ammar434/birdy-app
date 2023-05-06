export const useDeletePost = () => {
    const handleDeletePost = async (postId) => {
        try {
          const response = await fetch('/api/user/home/deletePost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId }),
          });
          const data = await response.json();
        }
        catch (error) {
          console.error(error);
        }
    };

    return { handleDeletePost };
};   