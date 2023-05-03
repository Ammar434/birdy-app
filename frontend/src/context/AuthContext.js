import { createContext, useReducer, useEffect, useState} from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {

    case "LOGIN":
      return { 
        user: action.payload, 
        pseudo: action.payload.pseudo,  // Assuming `pseudo` is a property of your user data
        avatar: `https://api.multiavatar.com/${action.payload._id}.svg`,
      };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_PSEUDO":
      return { ...state, pseudo: action.payload };

    case "SET_AVATAR":
      return { ...state, avatar: action.payload };

    case "SET_FOLLOWING":
      return { ...state, following: action.payload };
    
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    
    case "ADD_POST":
      // Ajout d'un nouveau post
      return { ...state, posts: [action.payload, ...state.posts] };

    case "LOGOUT":
      // return { user: null };
      return { user: null, pseudo: '', avatar: '' };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, pseudo: '', avatar: ''  });
  const [ posts, setPosts ] = useState([]); // posts = usePosts()

  useEffect(() => {
    async function fetchPosts() {
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
  }, [ posts ]);



  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

    async function getUserInformation() {
      if(userFromLocalStorage && userFromLocalStorage.userId){
        const response = await fetch('/api/user/profil/getUserById', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: userFromLocalStorage.userId }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
    
        const userData = await response.json();
        const pseudo = userData.user.pseudo;      
    
        // Update your context state with the data from your backend
        dispatch({ type: "SET_USER", payload: userData.user });
        dispatch({ type: "SET_PSEUDO", payload: pseudo });
        dispatch({ type: "SET_AVATAR", payload: `https://api.multiavatar.com/${userData.user._id}.svg` });
        dispatch({ type: "SET_FOLLOWING", payload: userData.user.following });
        dispatch({ type: "SET_POSTS", payload: posts });
      }
    }

    getUserInformation();

  }, [state.user]); 

  return (
    <AuthContext.Provider value={{ ...state, dispatch, posts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
