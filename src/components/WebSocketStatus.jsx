// components/WebSocketStatus.jsx
// Este componente muestra el estado actual de la conexión WebSocket.

import React from 'react';

const WebSocketStatus = ({ status }) => {
  let statusText = '';
  let statusClass = '';
  let icon = '🔄'; // Default icon

  switch (status) {
    case 'Connecting':
      statusText = 'Conectando...';
      statusClass = 'bg-yellow-500';
      icon = '🔄';
      break;
    case 'Connected':
      statusText = 'Conectado a WebSocket';
      statusClass = 'bg-green-500';
      icon = '🟢';
      break;
    case 'Disconnected':
      statusText = 'Desconectado';
      statusClass = 'bg-red-500';
      icon = '🔴';
      break;
    default:
      statusText = 'Desconectado';
      statusClass = 'bg-gray-500';
      icon = '⚫';
  }

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 p-3 rounded-xl text-white font-medium text-sm flex items-center gap-2 shadow-lg transition-colors duration-300 z-50 ${statusClass}`}>
      <span>{icon}</span>
      <span>{statusText}</span>
    </div>
  );
};

export default WebSocketStatus;
