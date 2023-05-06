import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";
import { AuthContextProvider } from "./context/AuthContext";
import UserContext, { UserProvider } from "./context/UserContext.js";

const App = () => {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
};
export default App;
