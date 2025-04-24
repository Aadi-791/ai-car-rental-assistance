import React from 'react';
import { formatDistanceToNow } from '../utils/dateUtils';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender, timestamp }) => {
  const isUser = sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isUser ? 'bg-blue-100 ml-2' : 'bg-gray-100 mr-2'}`}>
          {isUser ? (
            <User className="h-4 w-4 text-blue-600" />
          ) : (
            <Bot className="h-4 w-4 text-gray-600" />
          )}
        </div>
        <div>
          <div 
            className={`rounded-2xl py-2 px-4 ${
              isUser 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none'
            }`}
          >
            {message}
          </div>
          <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {formatDistanceToNow(timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;