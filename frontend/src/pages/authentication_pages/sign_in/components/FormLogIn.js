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
  Checkbox,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { RECOVER_PASSWORD, HOME } from "../../../../routes.js";

import {
  AiFillLock,
  AiFillMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

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

  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [isWeb] = useMediaQuery("(min-width: 1200px)");

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

  const isEmailError = validator.isEmail(email) === false && email !== "";

  const isError = isEmailError;

  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      padding={constants.padding.kPaddingValue * 2}
      // backgroundColor={"red"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired={true} isInvalid={isEmailError}>
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
              color={"black"}
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
              placeholder="Enter your previous password"
              size={"lg"}
              type={showPassword ? "text" : "password"}
              width="100%"
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

        <Flex
          direction={isWeb ? "row" : "column"}
          color={"gray.500"}
          paddingTop={constants.padding.kSmallPaddingValue}
          paddingX={constants.padding.kSmallPaddingValue}
          align={"center"}
        >
          <Checkbox iconColor="white" colorScheme={"purple"}>
            Remember for 30 days
          </Checkbox>
          <Spacer />
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
        </Flex>
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

export default FormLogIn;
