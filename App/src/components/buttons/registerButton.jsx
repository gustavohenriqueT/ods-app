import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const RegisterButton = () => {
  return (
    <Link
        to="/register"
        style={{ textDecoration: "none", color: "#010101", position:"relative" }}
    >
        Cadastre-se <IoCreateOutline style={{ position: "absolute", top: "1px" }} />
    </Link>
  );
};

export default RegisterButton;



