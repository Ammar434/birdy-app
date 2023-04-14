import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ChakraProvider>
  );
};
export default App;
