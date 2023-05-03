import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLock,
  AiFillMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

import { RECOVER_PASSWORD_SUCCESS } from "../../../../routes.js";
import constants from "../../../../utils/constants.js";
import { useState } from "react";

import validator from "validator";
import { useResetPassword } from "../../../../hooks/useResetPassword";
import { useNavigate } from "react-router-dom";

const FormLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleNewPasswordVisibility = () =>
    setShowNewPassword(!showNewPassword);

  const { reset, error, isLoading } = useResetPassword();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await reset(email, password, newPassword);

    if (!error) {
      navigate(RECOVER_PASSWORD_SUCCESS);
    }
  };
  const isNewPasswordError =
    validator.isStrongPassword(newPassword) === false && newPassword !== "";
  const isError = validator.isEmail(email) === false && email !== "";
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      padding={constants.padding.kPaddingValue * 2}
      // backgroundColor={"red"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired={true} isInvalid={isError}>
          <InputGroup mt={5} w={"100%"}>
            <InputLeftElement
              pointerEvents="none"
              mt={1}
              marginLeft={constants.padding.kSmallPaddingValue}
              color="gray.300"
              fontSize="2em"
              children={<AiFillMail />}
            />
            <Input
              variant="filled"
              placeholder="Enter your email"
              size={"lg"}
              type={"email"}
              color={colorMode === "light" ? "black" : "white"}
              width="100%"
              borderRadius={constants.radius.kRadius}
              paddingLeft={constants.padding.kPaddingValue * 2}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired={true}>
          <InputGroup mt={5}>
            <InputLeftElement
              pointerEvents="none"
              mt={1}
              marginLeft={constants.padding.kSmallPaddingValue}
              color="gray.300"
              fontSize="2em"
              children={<AiFillLock />}
            />
            <Input
              paddingLeft={constants.padding.kPaddingValue * 2}
              variant="filled"
              placeholder="Enter your password"
              size={"lg"}
              type={showPassword ? "text" : "password"}
              width="100%"
              color={colorMode === "light" ? "black" : "white"}
              borderRadius={constants.radius.kRadius}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <InputRightElement
              mt={1}
              color="gray.300"
              fontSize="2em"
              paddingRight={5}
            >
              <Button size="xl" onClick={handlePasswordVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl isRequired={true} isInvalid={isNewPasswordError}>
          <InputGroup mt={5}>
            <InputLeftElement
              pointerEvents="none"
              mt={1}
              marginLeft={constants.padding.kSmallPaddingValue}
              color="gray.300"
              fontSize="2em"
              children={<AiFillLock />}
            />
            <Input
              paddingLeft={constants.padding.kPaddingValue * 2}
              variant="filled"
              placeholder="Enter your new password"
              size={"lg"}
              type={showNewPassword ? "text" : "password"}
              width="100%"
              color={colorMode === "light" ? "black" : "white"}
              borderRadius={constants.radius.kRadius}
              onChange={(event) => setNewPassword(event.currentTarget.value)}
            />
            <InputRightElement
              mt={1}
              color="gray.300"
              fontSize="2em"
              paddingRight={5}
            >
              <Button size="xl" onClick={handleNewPasswordVisibility}>
                {showNewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          type="submit"
          width="full"
          bg="black"
          color="white"
          borderColor={"purple.500"}
          borderWidth="1px"
          mt={constants.padding.kPaddingValue}
          size={"lg"}
          borderRadius={constants.radius.kRadius}
          colorScheme={"purple.500"}
          isLoading={isLoading}
          _hover={{ background: "purple.500" }}
        >
          Reset
        </Button>

        {error && (
          <Center>
            <Text color={"red"} mt={3}>
              {error}
            </Text>
          </Center>
        )}
      </form>
    </Flex>
  );
};

export default FormLogIn;
