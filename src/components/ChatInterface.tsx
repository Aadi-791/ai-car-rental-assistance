import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChat } from '../context/ChatContext';
import { MessageLoader } from './MessageLoader';

const ChatInterface = () => {
  const { messages, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && <MessageLoader />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatInterface;