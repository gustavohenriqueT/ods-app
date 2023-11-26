// src/components/CommentList.jsx
import {useEffect, useState} from "react";
import VoteButton from "../upvote";
import "./style.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Comment({idusuario}) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("User"))
    const [newComment, setNewComment] = useState({
        idusuario: user.idUsuario,
        mensagem: ''
    });
    const [comments, setComments] = useState(() =>[{
        idmensagem: '',
        usuario:'',
        idusuario: '',
        mensagem:''
    }])
    const handleCommentSubmit = async(e) => {
        e.preventDefault();
        if (newComment.mensagem.trim() !== "") {
            try {
                const header = {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }
                const response = await axios.post("http://localhost:3007/mensagens", newComment, header)
                window.location.reload();
            }
            catch(err){
                if(err.response){
                    console.log(err.response.data.message);
                } else {
                    console.log("Erro: Tente mais tarde!");
                }
            }
        }
    }
    const getComments = async (e) => {
        try {
            const response = await fetch('http://localhost:3007/mensagens', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                 setComments(() =>
                    data.map(item => ({
                        idmensagem: item.idmensagem,
                        usuario: item.User.nome,
                        idusuario: item.idusuario,
                        mensagem: item.mensagem,
                    })))
            } else {
                console.error('Get messages failed.');
            }
        } catch (error) {
            console.error('Error during geting messages:', error);
        }
    };
    useEffect(()=>{
        getComments();
    },[])
    return (
    <div className="comments">
        <div className="divTextArea">
            <textarea
                className="textarea"
                placeholder="Faça seu comentário..."
                value={newComment.mensagem}
                onChange={(e) => setNewComment({idusuario: user.idUsuario, mensagem: e.target.value})}
            ></textarea>
            <button className="button" onClick={handleCommentSubmit}>
                Enviar
            </button>
        </div>
        <h2>Comentários</h2>
        <ul>
            {comments.map((comment) => (
            <li key={comment.idmensagem}>
                <h5>{comment.usuario}</h5>
                <p>{comment.mensagem}</p>
                <VoteButton idmensagem={comment.idmensagem} idusuario={idusuario}/>
            </li>))}
        </ul>
    </div>
    );
}
