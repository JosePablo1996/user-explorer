// components/UserList.jsx
// Este componente muestra una lista de usuarios en un diseño de cuadrícula profesional
// similar a un panel de control, con un tema oscuro y tarjetas estilizadas.

import React from 'react';
import { Mail, MapPin, Briefcase, User } from 'lucide-react';

const UserList = ({ users = [], onSelectUser, searchTerm }) => {
  if (!users || users.length === 0) {
    return null;
  }

  // Lógica para resaltar el texto de búsqueda.
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          new RegExp(highlight, 'i').test(part) ? (
            <b key={i} className="text-blue-400">
              {part}
            </b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn p-6 bg-gray-900 rounded-3xl shadow-xl border border-gray-700/50">
      <div className="md:col-span-full mb-4">
        <h2 className="text-2xl font-bold text-white mb-1 flex items-center">
          <User className="w-6 h-6 mr-2 text-blue-400" />
          Nuestra Comunidad
        </h2>
        <p className="text-gray-400">Explora nuestros 10 usuarios</p>
      </div>

      {users.map(user => (
        <div
          key={user.id}
          onClick={() => onSelectUser(user)}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-start cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-700 relative overflow-hidden group"
        >
          {/* Capa de gradiente para el efecto de borde */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          <div className="relative z-10 w-full">
            {/* Cabecera de la tarjeta con nombre e ícono */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {highlightText(user.name, searchTerm)}
                </h3>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="text-sm text-gray-400 space-y-2 mt-2">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>{highlightText(user.email, searchTerm)}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{highlightText(user.address.city, searchTerm)}</span>
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-gray-500" />
                <span>{highlightText(user.company.name, searchTerm)}</span>
              </p>
            </div>

            {/* Enlace para ver detalles */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                Ver detalles 
                <span className="ml-1">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
