import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLock,
  AiFillMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

import { FaUserGraduate } from "react-icons/fa";
import { useState } from "react";
import { useSignup } from "../../../../hooks/useSignUp.js";
import constants from "../../../../utils/constants.js";

const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(email, password, pseudo);
    // alert(`Email: ${email} & Password: ${password}`);
  };

  const checkEmail = (value) => {
    // console.log(value);
    return false;
  };

  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      h="100%"
    >
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={checkEmail("email")}>
          <InputGroup mt={5}>
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
              type="email"
              w={"25vw"}
              // color={"black"}
              borderRadius={constants.radius.kRadius}
              paddingLeft={constants.padding.kPaddingValue * 2}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl isInvalid={checkEmail("email")}>
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
              w={"25vw"}
              // color={"black"}
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
        <FormControl isInvalid={checkEmail("email")}>
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
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              paddingLeft={constants.padding.kPaddingValue * 2}
              variant="filled"
              size={"lg"}
              w={"25vw"}
              // color={"black"}
              borderRadius={constants.radius.kRadius}
              onChange={(event) =>
                setConfirmPassword(event.currentTarget.value)
              }
            />
            <InputRightElement
              mt={1}
              color="gray.300"
              fontSize="2em"
              paddingRight={5}
            >
              <Button size="xl" onClick={handleConfirmPasswordVisibility}>
                {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isInvalid={checkEmail("email")}>
          <InputGroup mt={5}>
            <InputLeftElement
              pointerEvents="none"
              mt={1}
              marginLeft={constants.padding.kSmallPaddingValue}
              color="gray.300"
              fontSize="2em"
              children={<FaUserGraduate />}
            />
            <Input
              variant="filled"
              placeholder="Enter your pseudo"
              size={"lg"}
              type="text"
              w={"25vw"}
              // color={"black"}
              borderRadius={constants.radius.kRadius}
              paddingLeft={constants.padding.kPaddingValue * 2}
              onChange={(event) => setPseudo(event.currentTarget.value)}
            />
          </InputGroup>
        </FormControl>

        <Button
          type="submit"
          width="full"
          bg={"black"}
          color="white"
          borderColor={"purple.500"}
          borderWidth="1px"
          mt={constants.padding.kPaddingValue}
          size={"lg"}
          borderRadius={constants.radius.kRadius}
          // colorScheme={"purple"}
          colorScheme={"purple.500"}
          isLoading={isLoading}
          _hover={{ background: "purple.500" }}
        >
          Sign Up
        </Button>
        {error && (
          <Text color={"red"} mt={3}>
            {error}
          </Text>
        )}
      </form>
    </Flex>
  );
};

export default FormSignUp;
