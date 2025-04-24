import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateGeminiResponse } from '../services/geminiService';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatContextProps {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (message: string) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const useChat = (): ChatContextProps => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          content: "Hello! I'm your AutoRent AI assistant. How can I help you today? I can assist with finding the right car, booking a rental, or answering questions about our services.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const sendMessage = async (content: string) => {
    // Add user message to chat
    const userMessage: Message = {
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get response from Gemini API
      const response = await generateGeminiResponse(content, messages);
      
      // Add bot response to chat
      const botMessage: Message = {
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Error generating response:', error);
      
      // Add more detailed error message to chat
      const errorMessage: Message = {
        content: `I apologize, but I'm having trouble processing your request. ${error.message || 'Please try again later.'}`,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        content: "Hello! I'm your AutoRent AI assistant. How can I help you today? I can assist with finding the right car, booking a rental, or answering questions about our services.",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, isLoading, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};