import React from 'react';

const UserCard = ({ user, onSelect, onlineStatus, searchTerm }) => {
  if (!user) {
    return null; // Si el usuario no existe, no renderizamos nada para evitar el error.
  }

  // Función para generar un color de gradiente basado en el nombre
  const getGradient = (name) => {
    const gradients = [
      'from-blue-500 to-blue-700',
      'from-purple-500 to-purple-700',
      'from-cyan-500 to-blue-600',
      'from-green-500 to-green-700',
      'from-amber-500 to-amber-700',
      'from-rose-500 to-rose-700',
      'from-indigo-500 to-indigo-700'
    ];
    
    // Generar un índice basado en el nombre para mantener consistencia
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  // Verificamos si onlineStatus y el ID de usuario existen antes de acceder a ellos.
  const isOnline = onlineStatus && onlineStatus[user.id];
  const getStatusColor = (status) => status ? 'bg-green-500 animate-pulse' : 'bg-gray-400';
  const getStatusText = (status) => status ? 'En línea' : 'Ausente';

  const gradient = getGradient(user.name);
  const statusColor = getStatusColor(isOnline);
  const statusText = getStatusText(isOnline);

  const highlightText = (text, highlight) => {
    if (!highlight || !text) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-yellow-200 dark:bg-yellow-600 text-black dark:text-white font-bold rounded-sm px-0.5">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
      onClick={() => onSelect(user)}
    >
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center text-xl text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.98 5.98 0 0110 16a5.979 5.979 0 01-5.454-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {highlightText(user.name, searchTerm)}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.company && highlightText(user.company.name, searchTerm)}
                    </p>
                </div>
            </div>
            <span className={`h-3 w-3 ${statusColor} rounded-full`} title={statusText}></span>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <p className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="truncate">{highlightText(user.email, searchTerm)}</span>
          </p>
          <p className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>
              {user.address && highlightText(user.address.city, searchTerm)}, {user.address && highlightText(user.address.street, searchTerm)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
