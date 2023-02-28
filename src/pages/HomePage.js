import React from 'react';
import {handleClick} from './MainPage';
import { LoginPage } from './LoginPage';
import styled from "styled-components";

 const HomeStyled= styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  backgroud-color: red,
`;

 const Button= styled.button`
  font-size: 1.5em;
  
`;



export default function HomePage({ connect, setConnect }) {
    
    return (

        <HomeStyled> Home Page
             <Button  onClick= {()=> setConnect(false)}>
               Log out
            </Button>
        </HomeStyled>
    );
  }
  