import React from "react";
import Crown from "../Crown";
import Navbar from "../Navbar";
import "./index.css";

const Header = ({ nomeUsuario }) => {

  return (
    <>
      <Crown nomeUsuario={nomeUsuario} />
      <Navbar />
    </>
  );
};

export default Header;
