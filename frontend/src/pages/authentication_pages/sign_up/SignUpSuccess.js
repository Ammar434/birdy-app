import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../routes.js";

const SignUpSuccess = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate(ROOT);
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
        Success, Welcome in 👋
      </Heading>
      <Text color="text" fontSize="xl" textAlign="center" mb={6}>
        Your account has been created successfully.
      </Text>
      <Button onClick={navigateToLogin}>Explore</Button>
    </Box>
  );
};

export default SignUpSuccess;
