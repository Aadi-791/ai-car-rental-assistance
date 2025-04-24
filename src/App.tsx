import React from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-1 w-full max-w-4xl mx-auto p-4">
          <ChatInterface />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;