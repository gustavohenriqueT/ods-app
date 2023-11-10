import React from "react";
import Crown from "../Crown";
import Navbar from "../Navbar";
import "./index.css";

const Header = ({ username }) => {
  return (
    <>
      <Crown username={username} />
      <Navbar />
    </>
  );
};

export default Header;
