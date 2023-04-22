import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useMediaQuery,
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
import validator from "validator";

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
  const isEmailError = validator.isEmail(email) === false && email !== "";

  const isPasswordError =
    password !== "" &&
    password !== confirmPassword &&
    validator.isStrongPassword(password) === false;
  const isPasswordConfirmError =
    password !== confirmPassword && password !== "" && confirmPassword !== "";
  const isPseudoError = pseudo !== "" && pseudo.length < 3;

  const isError = isEmailError || isPasswordError || isPseudoError;

  const [position, setPosition] = React.useState({ top: "50%", left: "50%" });

  const getRandomPercentage = () => {
    const min = 0;
    const max = 90;
    const r = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(r);
    return `${r}%`;
  };

  const handleMouseEnter = () => {
    if (isError === false) {
      setPosition({ top: "5%" });
    } else {
      setPosition({ top: getRandomPercentage(), left: getRandomPercentage() });
    }
  };
  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      padding={constants.padding.kPaddingValue * 2}
      // backgroundColor={"red"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isEmailError}>
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
              w={"100%"}
              color={"black"}
              borderRadius={constants.radius.kRadius}
              paddingLeft={constants.padding.kPaddingValue * 2}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl isInvalid={isPasswordError}>
          <InputGroup mt={5} w={"100%"}>
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
              w={"100%"}
              color={"black"}
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
        <FormControl isInvalid={isPasswordConfirmError}>
          <InputGroup mt={5} w={"100%"}>
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
              placeholder="Confirm your password"
              size={"lg"}
              type={showConfirmPassword ? "text" : "password"}
              w={"100%"}
              color={"black"}
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
        <FormControl isInvalid={isPseudoError}>
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
              w={"100%"}
              color={"black"}
              borderRadius={constants.radius.kRadius}
              paddingLeft={constants.padding.kPaddingValue * 2}
              onChange={(event) => setPseudo(event.currentTarget.value)}
            />
          </InputGroup>
        </FormControl>

        <Flex
          position="relative"
          width="100%"
          // height="300px"
          padding="10px"
          // alignItems="center"
          justifyContent="center"
        >
          <Button
            type="submit"
            bg="black"
            color="white"
            width={"30%"}
            borderColor={"purple.500"}
            borderWidth="1px"
            mt={constants.padding.kPaddingValue}
            size={"lg"}
            borderRadius={constants.radius.kRadius}
            colorScheme={"purple.500"}
            isLoading={isLoading}
            _hover={{ background: "purple.500" }}
            position="absolute"
            top={position.top}
            left={position.left}
            onMouseEnter={handleMouseEnter}
          >
            Se connecter
          </Button>
        </Flex>

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
