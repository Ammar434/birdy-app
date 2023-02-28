import React from 'react';
import styled from "styled-components";
import {handleClick} from './MainPage';

 const LoginStyled= styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  backgroud-color: red,
`;

 const Button= styled.button`
  font-size: 1.5em;
  
`;


export default function LoginPage({ connect, setConnect}) {
    
    // props.setPageCourante('login');
    return (

        <LoginStyled> Login Page
            <Button  onClick= {()=> setConnect(true)}>
                Je  btn
            </Button>
        </LoginStyled>
    );
  }
  