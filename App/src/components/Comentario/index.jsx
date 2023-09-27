// src/components/CommentList.jsx
import { useState } from 'react';

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
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Digite seu comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <br />
        <button onClick={handleCommentSubmit}>Enviar Comentário</button>
      </div>
    </div>
  );
}

