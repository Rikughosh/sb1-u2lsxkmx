import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatMessage } from './chat/ChatMessage';
import { ChatInput } from './chat/ChatInput';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thanks for your message! Our team will get back to you soon.",
          isUser: false
        }]);
      }, 1000);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
          role="dialog"
          aria-label="Chat window"
        >
          <div className="p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold">Support Chat</h3>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  message={msg.text}
                  isUser={msg.isUser}
                />
              ))}
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <ChatInput
              message={message}
              setMessage={setMessage}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
}