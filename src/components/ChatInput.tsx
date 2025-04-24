import React, { useState } from 'react';
import { Send, Mic, Image, Calendar } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="border-t border-gray-200 p-3 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <div className="flex-1 relative rounded-lg border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all bg-white">
          <div className="flex px-3 py-2 gap-2">
            <button 
              type="button" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Upload image"
            >
              <Image className="h-5 w-5" />
            </button>
            <button 
              type="button" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Select date"
            >
              <Calendar className="h-5 w-5" />
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about car rentals..."
            className="w-full px-3 py-2 outline-none resize-none max-h-32"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Voice input"
          >
            <Mic className="h-5 w-5" />
          </button>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`p-2 rounded-full ${
              input.trim() && !isLoading
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-400'
            } transition-colors`}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;