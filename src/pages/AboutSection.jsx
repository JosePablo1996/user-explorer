// AboutSection.jsx
// Este componente presenta la sección "Acerca de" con un diseño renovado y animaciones avanzadas.
// Ahora acepta una prop `onNavigate` para manejar la navegación.

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const AboutSection = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden group">
      {/* Decorative animated background overlay */}
      <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full blur-2xl top-0 left-0 animate-pulse-slow"></div>
        <div className="absolute w-60 h-60 bg-blue-500 rounded-full blur-2xl bottom-0 right-0 animate-pulse-fast"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Sparkles Icon */}
        <div className="inline-block p-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white mb-6 animate-pulse-slow">
            <Sparkles size={48} className="transform rotate-12 transition-transform duration-500" />
        </div>

        {/* Title with improved gradient and hover effect */}
        <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 transition-transform duration-300 transform group-hover:scale-105">
          Acerca de Nuestro Explorador
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
          Esta aplicación es una demostración moderna de un explorador de usuarios,
          diseñada para mostrar las capacidades de React con hooks, Tailwind CSS
          para un diseño responsivo y la integración de una API externa.
        </p>
        <p className="text-md text-gray-400 leading-relaxed max-w-2xl">
          Su propósito es proporcionar una interfaz de usuario fluida y reactiva
          para visualizar y filtrar datos de usuarios, ofreciendo una experiencia
          de navegación intuitiva y visualmente atractiva.
        </p>

        {/* Call to action button with hover animation */}
        <button 
          onClick={() => onNavigate('about')}
          className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95">
          Conocer más
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom CSS for new animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite ease-in-out;
        }
        
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
