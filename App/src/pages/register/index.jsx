import React from "react";
import "./index.css";
import tucano from "../../assets/2687.jpg"
import {useState, useEffect} from "react";
import axios from "axios"

function Register() {
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
        await axios.post("http://localhost:3007/user", dados, header)
            .then((res)=>{
                setResposta(res.data.message);
                setAlerta("success");
            })
            .catch((err)=>{
                setAlerta("danger");
                if(err.response){
                    setResposta(err.response.data.message);
                } else {
                    setResposta("Erro: Tente mais tarde!");
                }
            });

    }
  return (
    <div className="registerPage">
        <div className="container">
            <div className="form-image">
                <img src={tucano} style={{mixBlendMode: "multiply", maxWidth: "50vw"}} alt="Tucano"/>
            </div>
            <div className="form" onSubmit={sendReq}>
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
                                <button><a href="#">Criar Conta</a></button>
                            </div>

                            <div className="link">
                                <h3>Já tem uma conta?</h3>
                                <a href="#">Entrar</a>
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
