import React, { useState } from 'react';
import chatIcon from '../images/chat-icon.png';
import '../styles/ChatBubble.css';

const ChatBubble = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chat-container">
      <div className={`chat-wrapper ${showChat ? 'show-chat' : ''}`}>
        {showChat ? (
          <iframe
            title="Chatbot"
            src="https://www.chatbase.co/chatbot-iframe/doctor-docx-hsiy8k4hh"
            className="chat-bubble-expanded"
          ></iframe>
        ) : null}
      </div>
      <button className="chat-bubble" onClick={toggleChat}>
        <img src={chatIcon} alt="Chat Icon" />
      </button>
    </div>
  );
};

export default ChatBubble;
