// import { createContext, useReducer, useEffect } from "react";

// export const UserContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "REFRESH_USER":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };

//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { user: null });
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch({ type: "LOGIN", payload: user });
//     } 
//   }, []);

//   // console.log(state);
//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
