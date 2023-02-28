import React, {useState} from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default function MainPage () {

    const [ connect, setConnect] = useState(false);
    const [ pageCourante, setPageCourante] = useState('login');


    function getConnect() {
        console.log("getConnect"); 
        // setPageCourante("message_page"); 
        // setConnect(true); 
    }
    function handleClick() {
        console.log("butn");
    }

    return connect  ? <HomePage connect={connect} setConnect={setConnect}/>
         : <LoginPage connect={connect} setConnect={setConnect} />;

}; 

