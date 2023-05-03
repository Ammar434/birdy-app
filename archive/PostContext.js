import { createContext, useReducer, useEffect, useState } from "react";

export const PostContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
        return {
            ...state,
            posts: action.payload.posts,
        };
    case "ADD_POST":
        return {
            ...state,
            posts: [action.payload.post, ...state.posts],
        };
    default: 
        return state;
    }
};


export const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/user/profil/listPost', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log("dans le postContext (getPosts) : ", data.posts);
                setIsLoading(false);
                dispatch({ type: "GET_POSTS", payload: { posts: data.posts } });
            } catch (error) {
                setIsLoading(false);
                console.error(error);
            }
        };
        getPosts();
    }, []);


    useEffect(() => {
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
                console.log("dans le postContext (addPost) : ", data.post);
                setIsLoading(false);
                dispatch({ type: "ADD_POST", payload: { post: data.post } });

            } catch (error) {

                setIsLoading(false);
                console.error(error);
            }
        };
        addPost();
    }, []);


  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
