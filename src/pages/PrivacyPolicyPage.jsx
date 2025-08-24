// PrivacyPolicyPage.jsx
// Una página simple para mostrar la política de privacidad.

import React from 'react';

const PrivacyPolicyPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-4">
      <div className="glass-effect p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl w-full transition-all duration-300 transform scale-95 hover:scale-100">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400">
          Política de Privacidad
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Tu privacidad es importante para nosotros. Lee detenidamente nuestra política.
        </p>
        <div className="text-left space-y-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
          <p>
            Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información. No recopilamos datos personales a través de esta aplicación más allá de la información pública proporcionada por la API de ejemplo de JSONPlaceholder.
          </p>
          <p>
            No utilizamos cookies, rastreadores ni otras tecnologías para recopilar datos de identificación personal. La única información que se procesa es la que se obtiene directamente de la API pública y se muestra en la interfaz de la aplicación.
          </p>
          <p>
            No compartimos su información con terceros. Si bien esta aplicación no está diseñada para recopilar información sensible, le recomendamos tener precaución al compartir datos personales en línea.
          </p>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio se publicará en esta página y entrará en vigencia inmediatamente.
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

export default PrivacyPolicyPage;
