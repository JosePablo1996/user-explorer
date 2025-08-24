import React from 'react';

// Este es un componente de ejemplo para la sección "Acerca de".
// Asegúrate de que el componente principal se exporta como 'default'.
const AboutSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Acerca de Nuestro Explorador
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Esta aplicación es una demostración moderna de un explorador de usuarios,
        diseñada para mostrar las capacidades de React con hooks, Tailwind CSS
        para un diseño responsivo y la integración de una API externa.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Su propósito es proporcionar una interfaz de usuario fluida y reactiva
        para visualizar y filtrar datos de usuarios.
      </p>
    </div>
  );
};

export default AboutSection;
