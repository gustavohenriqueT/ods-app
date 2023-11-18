import React from "react";

const LogoutButton = () => {
  function handleLogout() {
    localStorage.removeItem("teste");
    window.location.reload();
  }
  return <button onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;
