// components/UserDetail.jsx
// Este componente muestra los detalles de un usuario con un diseño mejorado.
// Ahora incluye un estado dinámico para la conexión y manejo de errores.

import React from 'react';
import { Mail, Phone, Globe, MapPin, Briefcase, ChevronLeft } from 'lucide-react';

const UserDetail = ({ user, onBack, userStatus }) => {
  // Manejo de errores: si el usuario no existe, no se renderiza nada
  if (!user) {
    return null;
  }

  // Determinar el estado de conexión y el estilo
  const isOnline = userStatus && userStatus[user.id] === 'online';
  const statusText = isOnline ? 'Usuario activo' : 'Desconectado';
  const statusColor = isOnline ? 'text-green-400 bg-green-900/50' : 'text-gray-400 bg-gray-700/50';
  const statusDotColor = isOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-400';

  return (
    <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 animate-fadeInUp relative overflow-hidden border border-gray-700">
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800 to-purple-800 rounded-full blur-3xl w-72 h-72 top-10 left-10 opacity-20 animate-bg-glow"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 rounded-full blur-3xl w-64 h-64 bottom-20 right-10 opacity-20 animate-bg-glow animation-delay-2000"></div>

      <div className="relative z-10 flex flex-col gap-8">
        {/* Botón para volver mejorado */}
        <button
          onClick={onBack}
          className="self-start flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:shadow-lg hover:border-transparent"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="font-semibold text-lg">Volver atrás</span>
        </button>

        {/* Sección de perfil principal centrada */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="
            w-32 h-32 rounded-full flex items-center justify-center
            text-5xl font-extrabold text-white
            bg-gradient-to-br from-blue-600 to-blue-400 shadow-xl
            ring-4 ring-blue-500/50 transform transition-all duration-300
          ">
            {user.name && user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight">{user.name}</h2>
            <p className="text-xl text-gray-400">@{user.username}</p>
            <div className={`mt-2 flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-medium self-start ${statusColor}`}>
              <span className={`w-2.5 h-2.5 rounded-full ${statusDotColor}`}></span>
              {statusText}
            </div>
          </div>
        </div>
        
        {/* Información de contacto y dirección */}
        <h3 className="text-xl font-semibold text-gray-200 mt-4">Información de Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta de email y teléfono */}
          <div className="col-span-1 grid grid-cols-1 gap-4">
            <div className="bg-gray-800 rounded-xl p-4 shadow-inner-lg border border-gray-700/50">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Email</span>
                  <span className="text-lg font-medium text-white break-all">{user.email}</span>
                </div>
              </div>
            </div>
            {/* Se corrige la propiedad para mostrar el teléfono */}
            <div className="bg-gray-800 rounded-xl p-4 shadow-inner-lg border border-gray-700/50">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-green-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Teléfono</span>
                  <span className="text-lg font-medium text-white">{user.phone}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 shadow-inner-lg border border-gray-700/50">
              <div className="flex items-center gap-4">
                <Globe className="h-6 w-6 text-purple-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Sitio web</span>
                  <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-purple-400 hover:underline">
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta de dirección */}
          <div className="col-span-1 bg-gray-800 rounded-xl p-4 shadow-inner-lg border border-gray-700/50 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Dirección</span>
                <span className="text-lg font-medium text-white">
                  {user.address?.street}, {user.address?.suite}
                  <br />
                  {user.address?.city}, {user.address?.zipcode}
                </span>
              </div>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${user.address?.geo?.lat},${user.address?.geo?.lng}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center py-2 px-4 rounded-lg text-sm font-semibold bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200">
              Ver en mapa
            </a>
          </div>
        </div>
        
        {/* Información profesional */}
        <h3 className="text-xl font-semibold text-gray-200 mt-4">Información Profesional</h3>
        <div className="bg-gray-800 rounded-xl p-4 shadow-inner-lg border border-gray-700/50">
          <div className="flex items-center gap-4">
            <Briefcase className="h-6 w-6 text-orange-400" />
            <div className="flex flex-col">
              <span className="text-lg font-medium text-white">{user.company?.name}</span>
              <span className="text-sm text-gray-400">{user.company?.catchPhrase}</span>
              <span className="text-xs text-gray-500 mt-1">{user.company?.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
