"use client"
import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none transition duration-300"
      >
        {/* Icon (Chat Icon or Close Icon based on state) */}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20.938a8.936 8.936 0 01-6.363-2.636C3.175 16.863 2 14.03 2 11a9 9 0 1118 0c0 3.03-1.176 5.863-3.637 7.302A8.936 8.936 0 0112 20.938z"
            />
          </svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 h-96 p-4 mt-4 border border-gray-200">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-xl font-semibold">Chatbot</h2>
            <button
              onClick={toggleChatbot}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            {/* Chat Messages */}
            <div className="space-y-2">
              <div className="bg-gray-100 p-2 rounded-lg">Hello! How can I help you?</div>
              <div className="bg-blue-500 text-white p-2 rounded-lg self-end">Hi there!</div>
              {/* Add more messages here */}
            </div>
          </div>

          {/* Input Area */}
          <div className="mt-4">
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
