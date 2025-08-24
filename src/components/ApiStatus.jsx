// components/ApiStatus.jsx
// Este componente muestra el estado de la conexión a la API.

import React from 'react';

const ApiStatus = ({ isConnected }) => {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-semibold z-50 animate-fadeInUp ${
        isConnected
          ? 'bg-green-600 text-white'
          : 'bg-gray-800 text-gray-300'
      }`}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${isConnected ? 'text-white' : 'text-rose-400'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isConnected ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          ) : (
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.5V1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 23v-3.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 12H1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M23 12h-3.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6.5 6.5L4 4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19l-2.5-2.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 5L17 7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 19L7 17"
              />
            </>
          )}
        </svg>
        <span>{isConnected ? 'API Conectada' : 'API Desconectada'}</span>
      </div>
    </div>
  );
};

export default ApiStatus;
