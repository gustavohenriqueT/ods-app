import React from "react";
import "./index.css";
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
import LogoutButton from "../buttons/logoutButton";
import HomeButton from "../buttons/homeButton";

const Crown = ({ nomeUsuario }) => {
  //if user logged: remove login/register -> add userButton
  return (
    <div className="crown">
      <div className="crown_logo">
          <HomeButton />
      </div>
      <div className="crown_account" style={{paddingRight:"48px"}}>
        {nomeUsuario === "" ? <LoginButton /> : <p>Bem-vindo, {nomeUsuario}!</p>}
        {nomeUsuario !== "" && <LogoutButton />}
        {nomeUsuario === "" && <RegisterButton />}
      </div>
    </div>
  );
};

export default Crown;
