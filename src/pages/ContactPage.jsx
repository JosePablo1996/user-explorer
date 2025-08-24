// ContactPage.jsx
// Una página simple para mostrar información de contacto.

import React from 'react';

const ContactPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-4">
      <div className="glass-effect p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl w-full transition-all duration-300 transform scale-95 hover:scale-100">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-600 dark:from-teal-300 dark:to-green-400">
          Contáctanos
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en contactarnos.
        </p>
        <div className="space-y-4 text-left mx-auto max-w-sm font-medium">
          <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13v-1a4 4 0 01-4-4V8m8 5.75L17 8m-5 5.75L7 8m10 8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h4l-1 1" />
            </svg>
            <span>contacto@usuarios.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+503 1234-5678</span>
          </div>
          <div className="flex items-start gap-4 text-gray-800 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>123 Calle Principal, San Salvador, El Salvador</span>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('main')} 
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
