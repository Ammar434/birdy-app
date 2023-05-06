import { useState } from "react";

const useToggleLike = ({ postId, userId, initialLike, initialLikeCount }) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(initialLike);
  // useEffect(() => {
  //   setIsLiked(initialLike);
  //   setLikeCount(initialLikeCount);
  // }, [initialLike, initialLikeCount]);

  const toggleLike = async () => {
    try {
      const action = isLiked ? "removelikePost" : "likePost";
      const start = performance.now(); // Record the start time

      const response = await fetch(`/api/user/home/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const end = performance.now();
      const timeTaken = end - start;

      console.log(`Request took ${timeTaken} ms to complete.`); // Output the time taken to the console
      console.log("response");
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
      // const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return { likeCount, isLiked, toggleLike };
};

export default useToggleLike;
