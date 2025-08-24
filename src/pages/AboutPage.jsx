// AboutPage.jsx
// Una página dedicada a mostrar información sobre la aplicación con un diseño renovado.

import React from 'react';
import { Sparkles, Code, Layout, Globe, Search } from 'lucide-react';

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-4">
      <div className="glass-effect p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl w-full transition-all duration-300 transform scale-95 hover:scale-100 dark:border-white/20 border-black/10">
        
        <div className="inline-block p-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white mb-6">
          <Sparkles size={48} className="animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-300 dark:to-blue-400">
          Acerca de este Explorador
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
          Esta aplicación fue diseñada para mostrar cómo una interfaz de usuario moderna puede consumir y presentar datos de una API pública de manera eficiente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-left">
          
          {/* Tarjeta de Propósito */}
          <div className="p-6 rounded-2xl glass-effect shadow-lg transform transition-all hover:scale-105">
            <h3 className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              <Code size={24} className="mr-2" />
              Propósito
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              El objetivo principal es servir como un ejemplo práctico del desarrollo de aplicaciones web reactivas. Demostramos el manejo de estados, la carga de datos asincrónicos y un diseño responsivo, todo con código limpio y bien comentado.
            </p>
          </div>
          
          {/* Tarjeta de Características */}
          <div className="p-6 rounded-2xl glass-effect shadow-lg transform transition-all hover:scale-105">
            <h3 className="flex items-center text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              <Layout size={24} className="mr-2" />
              Características Clave
            </h3>
            <ul className="list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <Globe size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>**Consumo de API RESTful:** Traemos datos de usuarios desde `jsonplaceholder.typicode.com`.</span>
              </li>
              <li className="flex items-start">
                <Search size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>**Filtro y Ordenación Dinámica:** Permite buscar y organizar la lista de usuarios.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
          Esta aplicación se actualizó el 24 de agosto de 2025.
        </p>

        <button 
          onClick={() => onNavigate('main')} 
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
