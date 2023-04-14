import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLock,
  AiFillMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

import { Link as RouterLink } from "react-router-dom";
import { RECOVER_PASSWORD } from "../../../../routes.js";
import constants from "../../../../utils/constants.js";
import { useState } from "react";
import { useLogin } from "../../../../hooks/useLogin.js";
import validator from "validator";

const FormLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      h="100%"
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired={true}
          isInvalid={validator.isEmail(email) ? false : true}
        >
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
              type={"email"}
              w={"25vw"}
              color={"black"}
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
              w={"25vw"}
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
        <Stack
          direction="row"
          color={"gray.500"}
          paddingTop={constants.padding.kSmallPaddingValue}
          paddingX={constants.padding.kSmallPaddingValue}
          spacing={"auto"}
        >
          <Checkbox iconColor="white" colorScheme={"purple"}>
            Remember for 30 days
          </Checkbox>
          <Link
            as={RouterLink}
            to={RECOVER_PASSWORD}
            color="teal.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "purple.100" }}
          >
            Forgot your password?
          </Link>{" "}
        </Stack>
        <Button
          type="submit"
          width="full"
          bg={"black"}
          mt={constants.padding.kPaddingValue}
          size={"lg"}
          borderRadius={constants.radius.kRadius}
          colorScheme={"purple"}
          isLoading={isLoading}
        >
          Sign In
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

export default FormLogIn;
