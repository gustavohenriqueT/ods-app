import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import imagem from "./13456.jpg";

function Login() {
  const nagivate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Vinícius" && password === "123") {
      localStorage.setItem("teste", JSON.stringify({ username, password }));
      nagivate("/");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="body-login">
      <div className="container">
        <div className="form-image">
          <img src={imagem} />
        </div>
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-header">
              <div className="title">
                <h1>Bem-Vindo</h1>
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label htmlFor="username">Usuário</label>
                <input
                  id="username"
                  type="text"
                  name="usuario"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-box">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <div className="login-button">
                <button type="submit">Entrar</button>
              </div>

              <div className="link">
                Ainda não tem uma conta? <a href="/cadastro">Criar conta</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
