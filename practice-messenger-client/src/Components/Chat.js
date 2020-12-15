import React from 'react';
import UseChat from './UseChat';
const { ChatContainer, ListContainer, MessageContainer } = require('./styles');
const Chat = () => {
  const [newMessage, setNewMessage] = React.useState('');
  const { messages, sendMessage } = UseChat();
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleClick = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };
  return (
    <ChatContainer>
      <ListContainer>
        {messages.map((message, index) => {
          return (
            <MessageContainer key={index}>{message.body}</MessageContainer>
          );
        })}
      </ListContainer>
      <textarea
        value={newMessage}
        placeholder='write message'
        onChange={handleChange}
      ></textarea>
      <button type='submit' onClick={handleClick}>
        Send
      </button>
    </ChatContainer>
  );
};

export default Chat;
