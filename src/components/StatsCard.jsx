// components/StatsCard.jsx
// Este componente ahora tiene un diseño más moderno y atractivo.

import React from 'react';

const StatsCard = ({ title, value, icon, gradient }) => {
  return (
    <div className="
      bg-white dark:bg-gray-800 rounded-3xl p-6
      shadow-lg hover:shadow-2xl transition-all duration-300
      transform hover:-translate-y-1
      border border-gray-100 dark:border-gray-700
      overflow-hidden
    ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
        </div>
        
        <div className={`
          relative w-14 h-14 rounded-xl flex items-center justify-center
          text-2xl text-white font-bold
          bg-white/10 backdrop-blur-md shadow-inner
          transition-all duration-300
        `}>
          <div className={`
            absolute inset-0 rounded-xl opacity-80
            bg-gradient-to-br ${gradient}
            -z-10
          `}></div>
          {icon}
        </div>
      </div>
      
      {/* Barra de progreso sutil */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <div 
            className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500 ease-out`} 
            style={{ width: `${Math.min(value * 10, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
