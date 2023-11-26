import React from "react";
import "./index.css";
import tucano from "../../assets/2687.jpg"
import {useState, useEffect} from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom";
import {FiLogIn} from "react-icons/fi";
function Register() {
    const navigate = useNavigate()
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
    });
    const [alerta, setAlerta] = useState("");
    const [resposta, setResposta] = useState("");

    //capturar os dados do formulario pelo atributo name, conforme o usuario alterar o campo
    const valorInput = (e) => setDados({...dados, [e.target.name]: e.target.value});

    //enviar a requisição com os dados para o servidor
    const sendReq = async (e) => {

        e.preventDefault();

        const header = {
            'headers' : {
                'Content-Type' : 'application/json'
            }
        }
        const responseRegister = await axios.post("http://localhost:3007/user", dados, header)
            if(responseRegister){
                console.log(responseRegister);
                navigate("/login");
            }

    }
  return (
    <div className="registerPage">
        <div className="container">
            <div className="form-image">
                <img src={tucano} style={{mixBlendMode: "multiply", maxWidth: "50vw"}} alt="Tucano"/>
            </div>
            <div className="form" >
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1>Bem-Vindo</h1>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className= "input-box">
                            <label htmlFor="nome">Usuário</label>
                            <input id="nome" type="text" name="nome" placeholder="Digite seu Nome" onChange={valorInput}/>
                        </div>
                        <div className= "input-box">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="exemplo@gmail.com" onChange={valorInput}/>
                        </div>
                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="text" name="senha" placeholder="Digite sua senha" onChange={valorInput}/>
                            </div>

                            <div className="login-button">
                                <button onClick={sendReq}>Criar Conta</button>
                            </div>

                            <div className="link">
                                <h3>Já tem uma conta?</h3>
                                <Link
                                    to="/login"
                                    style={{ textDecoration: "none", color: "#010101", position: "relative" }}
                                >
                                    Entrar
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Register;
