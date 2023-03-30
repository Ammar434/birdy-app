import React from "react";
import { Flex } from "../../../components/styled/Flex.styled";
import {
  InputContainer,
  OverlayContainer,
  RowContainer,
} from "../../../components/styled/Container.styled";
import {
  InputText,
  Subtitle,
  Title,
  InputTextSubtitle,
} from "../../../components/styled/Text.styled";

import { Input, Form } from "../../../components/styled/Form.styled";
import { Button } from "../../../components/styled/Buttons.styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  setDarkTheme,
  setDefaultTheme,
} from "../../../redux/features/themeSlice";
import { ThemeModeButton } from "../../../components/styled/Buttons.styled";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setDark = () => {
    console.log("Click");
    dispatch(setDarkTheme());
  };

  const setDefault = () => {
    console.log(theme);
    dispatch(setDefaultTheme());
  };

  return (
    <Flex>
      <OverlayContainer color="#1e103a">
        {!theme.darkmode ? (
          <ThemeModeButton onClick={setDark} bg="#324b50">
            <BsFillMoonFill color="white" />
          </ThemeModeButton>
        ) : (
          <ThemeModeButton onClick={setDefault} bg="#FFE9D0">
            <BsFillSunFill color="black" />
          </ThemeModeButton>
        )}
      </OverlayContainer>

      <InputContainer color="#e9e7eb">
        <div style={{ textAlign: "start" }}>
          <Title>Bienvenue,</Title>
          <Subtitle>Connectez-vous</Subtitle>
        </div>

        <Form>
          <InputText>Entrer votre addresse mail</InputText>
          <Input></Input>
          <div style={{ height: "10px" }} />
          <InputText>Entrer votre mot de passe</InputText>
          <Input type="password"></Input>
          <InputTextSubtitle>
            <Link to="/recover_password">Mot de passe oublié ?</Link>
          </InputTextSubtitle>
          <div style={{ height: "50px" }} />
          <Button
            bg={"red"}
            onClick={() => {
              navigate("/main_page");
            }}
          >
            Se connecter
          </Button>
        </Form>

        <RowContainer>
          <InputTextSubtitle>Pas encore de compte?</InputTextSubtitle>
          <div style={{ width: "10px" }} />
          <InputTextSubtitle>
            <Link to="/sign_up">Créer un compte</Link>
          </InputTextSubtitle>
        </RowContainer>
      </InputContainer>
    </Flex>
  );
};

export default SignIn;
