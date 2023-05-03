import React, { createContext, useReducer, useContext, useEffect } from 'react';

const SET_USER = 'SET_USER';

const reducer = (state, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        avatar: `https://api.multiavatar.com/${action.payload._id}.svg`
      };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  avatar: '',
};

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;


    if (user) {
      // Dispatch an action to set the user
      dispatch({ type: SET_USER, payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// A custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export default UserContextProvider;



// // UserContextProvider.js
// import React, { useState, useEffect, createContext } from 'react';


// export const UserContext = createContext({
//     avatar: '',
//     pseudo: '',
//     setAvatar: () => {},
//     setPseudo: () => {},
//   });

  
//   export const UserContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [pseudo, setPseudo] = useState('');
//     const [avatar, setAvatar] = useState('');
    
//     useEffect(() => {
//       const storedUser = localStorage.getItem('user');
//       const userID = storedUser ? JSON.parse(storedUser) : null;
//       const userId = userID ? userID.userId : null;
  
//       if (!userId) return;
  
//       async function getUserInformation() {
//         const response = await fetch('/api/user/profil/getUserById', {
//             method: 'POST', 
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ _id: userId }),
//           });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch user information');
//         }
  
//         const userData = await response.json();
  
//         const pseudo = userData.user.pseudo; 
  
//         setUser(userData.user);
//         setPseudo(pseudo);
//         setAvatar(`https://api.multiavatar.com/${userData.user._id}.svg`);
//       }
//       getUserInformation();
//     }, []); // We don't pass any dependencies here because changes in localStorage don't cause re-renders.
   
//     return (
//       <UserContext.Provider value={{ user, setUser, pseudo, setPseudo, avatar, setAvatar }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };
  
//   export default UserContextProvider;
  