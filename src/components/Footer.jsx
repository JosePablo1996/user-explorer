// src/components/Footer.jsx
// Este componente presenta el pie de página de la aplicación con un diseño mejorado y botones de navegación actualizados.
// Utiliza iconos de 'lucide-react' y un diseño moderno con Tailwind CSS.
// Acepta una prop `onNavigate` para manejar el cambio de página.

import React from 'react';
import { FileText, Shield, Briefcase, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Heart } from 'lucide-react'; // Usamos un icono de lucide-react para reemplazar a MdFavorite

// Se pasa onNavigate como prop desde App.jsx para cambiar la vista
const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white mt-16 relative overflow-hidden font-inter">
      {/* Decorative animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full animate-spin-fast"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Central container with frosted glass effect */}
        <div className="backdrop-filter backdrop-blur-lg bg-gray-800/20 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-700/50">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
            {/* Logo section and copyright */}
            <div className="mb-10 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                {/* Animated SVG logo with improved visual effects */}
                <div className="transform-gpu group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 mr-3 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    <path
                      className="origin-center animate-pulse"
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      style={{ filter: 'drop-shadow(0 0 8px #60a5fa)' }}
                    />
                  </svg>
                </div>
                <h4 className="text-4xl font-extrabold text-white">Users<span className="text-blue-400">App</span></h4>
              </div>
              <p className="text-gray-400 text-lg tracking-wider">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>

            {/* Contact icons with improved appearance and animations */}
            <div className="mt-10 lg:mt-0 text-center flex flex-col items-center">
              <div className="flex justify-center md:justify-start gap-6 text-gray-300">
                {/* Mail icon with glow and bounce effect */}
                <a href="mailto:contact@usersapp.com" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110 group animate-hover-glow" aria-label="Enviar un correo">
                  <Mail className="h-7 w-7 text-blue-400 transition-transform duration-200 group-hover:animate-bounce" />
                </a>
                {/* Phone icon with glow and bounce effect */}
                <a href="tel:+1234567890" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110 group animate-hover-glow" aria-label="Llamar">
                  <Phone className="h-7 w-7 text-green-400 transition-transform duration-200 group-hover:animate-bounce" />
                </a>
                {/* Location icon with glow and bounce effect */}
                <a href="https://www.google.com/maps/@13.7360463,-89.1935549,16z?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-lg transform hover:scale-110 group animate-hover-glow" aria-label="Ver en el mapa">
                  <MapPin className="h-7 w-7 text-purple-400 transition-transform duration-200 group-hover:animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium">
            <button
              onClick={() => onNavigate('privacy')}
              className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 flex items-center gap-2 group"
            >
              <Shield className="w-5 h-5 group-hover:animate-spin" />
              Política de Privacidad
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 flex items-center gap-2 group"
            >
              <Briefcase className="w-5 h-5 group-hover:animate-wiggle" />
              Términos de Servicio
            </button>
            <button
              onClick={() => onNavigate('documentation')}
              className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-pink-500 to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 flex items-center gap-2 group"
            >
              <FileText className="w-5 h-5 group-hover:animate-scale-up" />
              Documentación
            </button>
          </div>

          {/* Created by */}
          <div className="mt-12 text-center text-sm">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600/20 to-red-600/20 px-6 py-3 rounded-full">
              <span className="text-gray-300 text-md">Desarrollado con</span>
              <Heart className="h-5 w-5 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-300 text-md">por</span>
              {/* Animation for Pablo Miranda legend */}
              <span className="text-blue-300 font-medium relative animate-text-shine cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-opacity duration-1000 animate-shine"></span>
                <span className="relative z-10">Pablo Miranda</span>
              </span>
            </div>

            {/* App version */}
            <div className="mt-2 text-sm text-gray-500 bg-gray-800/50 px-4 py-2 rounded-full">
              v1.2.2 · React 18 · Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS styles for animations */}
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
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 2s infinite linear;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group-hover\\:animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4); }
        }
        .animate-hover-glow:hover {
          animation: glow 1s ease-in-out infinite alternate;
        }
        .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group-hover\\:animate-spin {
          animation: spin 1s ease-in-out;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .group-hover\\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        @keyframes scale-up {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .group-hover\\:animate-scale-up {
          animation: scale-up 0.5s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

