import { createContext, useReducer, useEffect } from "react";

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

    case "SET_FOLLOWERS":
      return { ...state, followers: action.payload };
    
    case "SET_FOLLOWING":
      return { ...state, following: action.payload };

    case "LOGOUT":
      // return { user: null };
      return { user: null, pseudo: '', avatar: '' };

    default:
      return state;
  }
};export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, pseudo: '', avatar: ''  });
  
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
        dispatch({ type: "SET_FOLLOWERS", payload: userData.user.followers });
        dispatch({ type: "SET_FOLLOWING", payload: userData.user.following });
      }
    }
  
    getUserInformation();
  }, [state.user]); 

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { user: null, pseudo: '', avatar: ''  });
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch({ type: "LOGIN", payload: user });
//     } 
//   }, []);
  
//   //state.user.userId correspond à l'id de l'utilisateur connecté récupéré dans le local storage
//   useEffect(() => {
//     async function getUserInformation() {
//       const response = await fetch('/api/user/profil/getUserById', {
//           method: 'POST', 
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ _id: state.user.userId }),
//       });
        
//       if (!response.ok) {
//         throw new Error('Failed to fetch user information');
//       }
  
//       const userData = await response.json();
//       const pseudo = userData.user.pseudo;      
  
//       dispatch({ type: "SET_USER", payload: userData.user });
//       dispatch({ type: "SET_PSEUDO", payload: pseudo });
//       dispatch({ type: "SET_AVATAR", payload: `https://api.multiavatar.com/${userData.user._id}.svg` });
//       dispatch({ type: "SET_FOLLOWERS", payload: userData.user.followers });
//       dispatch({ type: "SET_FOLLOWING", payload: userData.user.following });

//     }
  
//     if (state.user && state.user.userId) {
//       getUserInformation();
//     }
//   }, [state.user]); 

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
