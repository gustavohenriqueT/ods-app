import Login from "../../components/Login";
import React from "react";
import "./index.css";

function Register() {
  return (
    <>
        <div className="container">
            <div className="form-image">
                <img src="../../assets/2687.jpg" style="mix-blend-mode: multiply; max-width: 50vw;" alt="Tucano"/>
            </div>
            <div className="form">
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1>Bem-Vindo</h1>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="username">Usuário</label>
                            <input id="username" type="text" name="usuário" placeholder="Digite seu usuário"/>
                        </div>

                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="password">Senha</label>
                                <input id="password" type="text" name="Senha" placeholder="Digite sua senha"/>
                            </div>

                            <div className="login-button">
                                <button><a href="#">Entrar</a></button>
                            </div>

                            <div className="link">
                                Ainda não tem uma conta?
                                <a href="#">Criar conta</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}

export default Register;
