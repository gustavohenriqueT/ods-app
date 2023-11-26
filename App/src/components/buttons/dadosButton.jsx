import React from "react";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const dadosButton = () => {
  return (
    <Link to="/dados" style={{ textDecoration: "none",color:'#010101', position:'relative' }}>
        Dados
        <FiInfo style={{ position: "relative", top: "1px", left: "5px" }} />
    </Link>
  );
};

export default dadosButton;
