import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ message, setMessage, onSubmit }: ChatInputProps) {
  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
        aria-label="Chat message"
      />
      <button
        type="submit"
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        aria-label="Send message"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}