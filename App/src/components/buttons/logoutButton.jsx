import React from "react";

const LogoutButton = () => {
  function handleLogout() {
    localStorage.removeItem("User");
    window.location.reload();
  }
  return <button onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;
