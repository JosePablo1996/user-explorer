// src/components/Footer.jsx
// Este componente presenta el pie de página de la aplicación con un diseño mejorado y botones de navegación actualizados.
// Utiliza iconos de 'react-icons/md' y un diseño moderno con Tailwind CSS.
// Acepta una prop `onNavigate` para manejar el cambio de página.

import React from 'react';
import { MdMail, MdPhone, MdLocationOn, MdFavorite } from 'react-icons/md';

// Se pasa onNavigate como prop desde App.jsx para cambiar la vista
const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white mt-16 relative overflow-hidden font-inter">
      {/* Elementos decorativos animados en el fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full animate-spin-fast"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Contenido principal del footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
          {/* Sección del logo y derechos de autor */}
          <div className="mb-10 lg:mb-0">
            <h4 className="text-4xl font-extrabold mb-4 text-blue-300">UsersApp</h4>
            <p className="text-gray-400 text-lg tracking-wider">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          {/* Iconos de contacto con mejor apariencia */}
          <div className="mt-10 lg:mt-0 text-center flex flex-col items-center">
            <div className="flex justify-center md:justify-start gap-6 text-gray-300">
              <div
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110"
              >
                <MdMail className="h-7 w-7 text-blue-400" />
              </div>
              <div
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110"
              >
                <MdPhone className="h-7 w-7 text-green-400" />
              </div>
              <div
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110"
              >
                <MdLocationOn className="h-7 w-7 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces de pie de página - COLOCADOS ABAJO */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium">
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
          >
            Acerca de
          </button>
          <button
            onClick={() => onNavigate('privacy')}
            className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
          >
            Política de Privacidad
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
          >
            Términos de Servicio
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
          >
            Contacto
          </button>
        </div>

        {/* Leyendas centradas en la parte inferior */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col items-center">
          {/* Leyenda "Hecho con amor..." mejorada */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600/20 to-red-600/20 px-6 py-3 rounded-full">
              <span className="text-gray-300 text-md">Desarrollado con</span>
              <MdFavorite className="h-5 w-5 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-300 text-md">por</span>
              <span className="text-blue-300 font-medium">Pablo Miranda</span>
            </div>

            {/* Versión de la aplicación */}
            <div className="mt-2 text-sm text-gray-500 bg-gray-800/50 px-4 py-2 rounded-full">
              v1.2.2 · React 18 · Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animaciones personalizadas */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-fast {
          animation: spin-fast 15s linear infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

