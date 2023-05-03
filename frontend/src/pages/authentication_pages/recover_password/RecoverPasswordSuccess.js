import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../routes.js";

const RecoverPasswordSuccess = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate(LOGIN);
  };

  return (
    <Box
      backgroundColor="backgroundColor"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading color="text" mb={4}>
        Password Reset Successful
      </Heading>
      <Text color="text" fontSize="xl" textAlign="center" mb={6}>
        Your password has been reset successfully.
      </Text>
      <Button onClick={navigateToLogin}>Go to Login</Button>
    </Box>
  );
};

export default RecoverPasswordSuccess;
