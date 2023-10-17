// src/components/CommentList.jsx
import { useState } from 'react';
import '../../pages/comentario-dados'
import VoteButton from '../upvote';
export default function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2 className='h2'>Comentários</h2>
      <ul className='ul'>
        {comments.map((comment, index) => (
          <li key={index}>{comment} <VoteButton/></li>
        ))}
      </ul>
      <div className='divTextArea'>
        <textarea
          className='textarea'
          rows="4"
          cols="50"
          placeholder="Digite seu comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <br />
        <button className='button' onClick={handleCommentSubmit}>Enviar Comentário</button>
      </div>
    </div>
  );
}

