import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export function PasswordResetDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  // Simulate a successful password reset
  const handlePasswordReset = () => {
    // Your password reset logic here
    setIsOpen(true);
  };

  return (
    <>
      <Button colorScheme="blue" onClick={handlePasswordReset}>
        Reset Password
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Password Reset Successful
            </AlertDialogHeader>

            <AlertDialogBody>
              Your password has been reset successfully! Please check your email
              for further instructions.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
