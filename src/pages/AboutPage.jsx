// AboutPage.jsx
// Una página dedicada a mostrar información sobre la aplicación con un diseño renovado y animaciones mejoradas.

import React from 'react';
import { Sparkles, Code, Layout, Globe, Search, ArrowLeftCircle } from 'lucide-react';

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-inter">
      <div className="glass-effect p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl w-full transition-all duration-300 transform scale-95 hover:scale-100 border border-gray-700/50">
        
        <div className="inline-block p-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white mb-6 animate-pulse-slow">
          <Sparkles size={48} className="transform rotate-12 transition-transform duration-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-300 dark:to-blue-400 animate-text-shine">
          Acerca de este Explorador
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium">
          Esta aplicación fue diseñada para mostrar cómo una interfaz de usuario moderna puede consumir y presentar datos de una API pública de manera eficiente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-left">
          
          {/* Tarjeta de Propósito con nuevo efecto de brillo */}
          <div className="p-6 rounded-2xl glass-effect shadow-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shine-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="flex items-center text-xl font-bold text-blue-400 mb-2">
              <Code size={24} className="mr-2 transform group-hover:-rotate-6 transition-transform duration-300" />
              Propósito
            </h3>
            <p className="text-gray-400">
              El objetivo principal es servir como un ejemplo práctico del desarrollo de aplicaciones web reactivas. Demostramos el manejo de estados, la carga de datos asincrónicos y un diseño responsivo, todo con código limpio y bien comentado.
            </p>
          </div>
          
          {/* Tarjeta de Características con nuevo efecto de brillo */}
          <div className="p-6 rounded-2xl glass-effect shadow-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="flex items-center text-xl font-bold text-teal-400 mb-2">
              <Layout size={24} className="mr-2 transform group-hover:scale-110 transition-transform duration-300" />
              Características Clave
            </h3>
            <ul className="list-inside space-y-2 text-gray-400">
              <li className="flex items-start">
                <Globe size={18} className="mr-2 flex-shrink-0 mt-1 animate-pulse" />
                <span>**Consumo de API RESTful:** Traemos datos de usuarios desde `jsonplaceholder.typicode.com`.</span>
              </li>
              <li className="flex items-start">
                <Search size={18} className="mr-2 flex-shrink-0 mt-1 animate-pulse" />
                <span>**Filtro y Ordenación Dinámica:** Permite buscar y organizar la lista de usuarios.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Esta aplicación se actualizó el 24 de agosto de 2025.
        </p>

        <button 
          onClick={() => onNavigate('main')} 
          className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center mx-auto group"
        >
          <ArrowLeftCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al Inicio
        </button>
      </div>

      {/* Custom CSS styles for new animations */}
      <style>{`
        @keyframes shine-reverse {
          0% { left: 100%; }
          100% { left: -100%; }
        }
        .animate-shine-reverse {
          animation: shine-reverse 2s infinite linear;
        }

        @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
