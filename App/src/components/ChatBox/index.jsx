// src/components/CommentList.jsx
import { useState, useEffect } from 'react';
import '../../pages/pagina-chat';


const CaixaChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Enviar a mensagem para o servidor em tempo real (não implementado aqui).
      // Você precisaria de uma biblioteca de WebSocket ou outra solução de mensagens em tempo real.

      // Adicione a mensagem à lista de mensagens exibidas.
      setMessages([...messages, { text: newMessage, sender: 'Você' }]);
      // Limpe a caixa de entrada após o envio da mensagem.
      setNewMessage('');
    }
  };

  // Simulação de mensagens recebidas de outros usuários.
  useEffect(() => {
    const simulatedMessages = [
      { text: 'Olá, pessoal!', sender: 'Usuário 1' },
      { text: 'Como vocês estão?', sender: 'Usuário 2' },
    ];

    // Adicione as mensagens simuladas à lista de mensagens.
    setMessages([...messages, ...simulatedMessages]);
  }, []);

  return (
    <div className="livestream-chat">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default CaixaChat;