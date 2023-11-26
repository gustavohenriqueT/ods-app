import React, { useState } from "react";
import { useNavigate }  from "react-router-dom";
import imagem from "./13456.jpg";
import "./index.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3007/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha}),
      });

      if (response.ok) {
        const data = await response.json();
        const {idUsuario = data.idusuario, nomeUsuario = data.nome, emailUsuario = data.email} = data
        console.log('Login successful!', data);
        localStorage.setItem("User", JSON.stringify( {idUsuario, nomeUsuario, emailUsuario}));
        navigate("/");
        // Handle successful login, e.g., redirect or set user state
      } else {
        console.error('Login failed.');
        // Handle failed login, e.g., display an error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors, e.g., network issues
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
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-box">
                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  type="senha"
                  name="senha"
                  placeholder="Digite sua Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <div className="login-button">
                <button type="submit">Entrar</button>
              </div>

              <div className="link">
                Ainda não tem uma conta? <a href="/register">Criar conta</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
