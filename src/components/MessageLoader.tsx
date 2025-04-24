import React from 'react';

export const MessageLoader = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex max-w-[80%] flex-row">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 mr-2">
          <svg
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <div>
          <div className="rounded-2xl py-2 px-4 bg-gray-100 text-gray-800 rounded-tl-none min-w-[60px]">
            <div className="flex space-x-1">
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};