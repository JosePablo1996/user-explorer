// TermsOfServicePage.jsx
// Una página simple para mostrar los términos de servicio.

import React from 'react';

const TermsOfServicePage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-4">
      <div className="glass-effect p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl w-full transition-all duration-300 transform scale-95 hover:scale-100">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-300 dark:to-orange-400">
          Términos de Servicio
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Bienvenido a nuestro explorador de usuarios. Al usar esta aplicación, aceptas los siguientes términos.
        </p>
        <div className="text-left space-y-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
          <p>
            **1. Uso de la Aplicación:** Esta aplicación se proporciona "tal cual" para fines educativos y de demostración. Los datos mostrados provienen de una API pública de terceros y no son datos de usuarios reales.
          </p>
          <p>
            **2. Propiedad Intelectual:** Todo el código fuente, diseño y contenido de esta aplicación son propiedad de sus respectivos creadores. Se prohíbe la copia, reproducción o distribución sin permiso.
          </p>
          <p>
            **3. Limitación de Responsabilidad:** No nos hacemos responsables de ningún daño, pérdida o responsabilidad que pueda surgir del uso de esta aplicación.
          </p>
          <p>
            **4. Cambios en los Términos:** Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento y sin previo aviso. El uso continuado de la aplicación constituye la aceptación de los términos actualizados.
          </p>
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

export default TermsOfServicePage;
