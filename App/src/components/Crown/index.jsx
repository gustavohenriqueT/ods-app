import React from "react";
import "./index.css";
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
import DadosButton from "../buttons/dadosButton";
import LogoutButton from "../buttons/logoutButton";

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
        <DadosButton />
        {username === "" ? <LoginButton /> : <p>Bem-vindo, {username}!</p>}
        {username !== "" && <LogoutButton />}
        {username === "" && <RegisterButton />}
      </div>
    </div>
  );
};

export default Crown;
