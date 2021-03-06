import React from 'react';

const header: React.FC = () => {
  return (
    <header className="flex items-center px-4 py-4 bg-yellow-600 shadow-lg space-x-2">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
      </svg>
      <h1 className="text-xl font-semibold text-gray-50">Keeper App</h1>
    </header>
  );
};

export default header;
