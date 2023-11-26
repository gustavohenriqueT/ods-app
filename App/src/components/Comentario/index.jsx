// src/components/CommentList.jsx
import {useEffect, useState} from "react";
import VoteButton from "../upvote";
import "./style.css";
import axios from "axios";


export default function Comment() {
    const user = JSON.parse(localStorage.getItem("User"))
    const [newComment, setNewComment] = useState({
        idusuario: user.idUsuario,
        mensagem: ''
    });
    console.log(newComment)
    const [comments, setComments] = useState(() =>[{
        idmensagem: '',
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
                console.log(newComment)
                const response = await axios.post("http://localhost:3007/mensagens", newComment, header)
                if(response.ok){
                    window.location.reload();
                }
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
                 setComments(() =>
                    data.map(item => ({
                        idmensagem: item.idmensagem,
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
                <h5>{comment.idusuario}</h5>
                <p>{comment.mensagem}</p>
                <VoteButton/>
            </li>))}
        </ul>
    </div>
    );
}
