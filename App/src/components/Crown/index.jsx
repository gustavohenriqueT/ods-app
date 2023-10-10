import React from 'react'
import './index.css'
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
import DadosButton from "../buttons/dadosButton";
import ChatButton from "../buttons/chatButton";

const Crown = () =>{
    //if user logged: remove login/register -> add userButton
    return (
        <div className="crown">
            <div className="crown_logo">
                <div style={{width:"200px",height:"32px", backgroundColor:"lightgreen"}}/>
            </div>
            <div className="crown_account">
                <ChatButton/>
                <DadosButton/>
                <LoginButton/>
                <RegisterButton/>
            </div>
        </div>
    )
}

export default Crown