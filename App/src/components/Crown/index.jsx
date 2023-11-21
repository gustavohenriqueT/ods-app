import React from "react";
import "./index.css";
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
import DadosButton from "../buttons/dadosButton";
import LogoutButton from "../buttons/logoutButton";
import HomeButton from "../buttons/homeButton";
import ChatButton from "../buttons/chatButton";

const Crown = ({ username }) => {
  //if user logged: remove login/register -> add userButton
  return (
    <div className="crown">
      <div className="crown_logo">
        <div
          style={{
            height: "32px",
            width: "200px",
            backgroundColor: "lightgreen",
          }}
        />
      </div>
      <div className="crown_account">
        <HomeButton />
        <ChatButton />
        <DadosButton />
        {username === "" ? <LoginButton /> : <p>Bem-vindo, {username}!</p>}
        {username !== "" && <LogoutButton />}
        {username === "" && <RegisterButton />}
      </div>
    </div>
  );
};

export default Crown;
