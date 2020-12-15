import React from "react";
import UseChat from "./UseChat";

const Chat = () => {
  const [newMessage, setNewMessage] = React.useState("");
  const { messages, sendMessage } = UseChat();
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleClick = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };
  return (
    <div>
      <ul>
        {messages.map((message, index) => {
          return <li key={index}>{message.body}</li>;
        })}
      </ul>
      <textarea
        value={newMessage}
        placeholder="write message"
        onChange={handleChange}
      ></textarea>
      <button type="submit" onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default Chat;
