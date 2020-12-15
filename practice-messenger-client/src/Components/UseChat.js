import { useState, useEffect, useRef } from "react";
import socketIoClient from "socket.io-client";
const chatEvent = "newChatMessage";
const serverUrl = "http://localhost:9090";

const UseChat = () => {
  const [messages, setMessage] = useState([]);
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIoClient(serverUrl, {
      transports: ["websocket"],
    });
    socketRef.current.on(chatEvent, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessage((messages) => [...messages, incomingMessage]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  });
  const sendMessage = (messageBody) => {
    socketRef.current.emit(chatEvent, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };
  return { messages, sendMessage };
};

export default UseChat;
