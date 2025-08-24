// src/components/HelpSection.jsx
// Este componente de React presenta una sección de ayuda,
// con botones de acción y un modal para enviar sugerencias.

import React, { useState } from 'react';

// Se pasa onHelpAction y onNavigate como props desde App.jsx para cambiar la vista
const HelpSection = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // Función para manejar el envío de la sugerencia
  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    if (suggestion.trim() === '') {
      setFeedbackMessage({ type: 'error', text: 'El mensaje no puede estar vacío.' });
      return;
    }

    setIsLoading(true);
    setFeedbackMessage({ type: 'info', text: 'Enviando sugerencia...' });

    // En este ejemplo, el mensaje de éxito se muestra inmediatamente.
    try {
      setFeedbackMessage({ type: 'success', text: '¡Gracias! Tu sugerencia ha sido enviada con éxito.' });
      setSuggestion(''); // Limpiar el campo de sugerencia
    } catch (error) {
      console.error('Error al enviar la sugerencia:', error);
      setFeedbackMessage({ type: 'error', text: 'Error al enviar la sugerencia. Inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setFeedbackMessage(null);
        if (feedbackMessage?.type === 'success') {
          setShowModal(false);
        }
      }, 3000);
    }
  };

  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8 mt-12 text-center transition-colors duration-300 animate-fadeInUp">
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <span className="text-4xl">💡</span>
          ¿Necesitas ayuda?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Estamos aquí para ayudarte con cualquier pregunta o sugerencia.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => onNavigate('documentation')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <span role="img" aria-label="icono de documento">📄</span>
            Documentación
          </button>
          <button 
            onClick={() => onNavigate('support')} // Actualizado para navegar a la página de soporte
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <span role="img" aria-label="icono de herramientas">🛠️</span>
            Soporte Técnico
          </button>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <span role="img" aria-label="icono de estrella">✨</span>
            Sugerir Mejora
          </button>
          <button
            onClick={() => onNavigate('main')}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <span role="img" aria-label="icono de casa">🏠</span>
            Ir al inicio
          </button>
        </div>
      </section>

      {/* Modal para sugerencias */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div 
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Enviar Sugerencia</h4>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSuggestionSubmit}>
              <textarea
                className="w-full h-32 p-4 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Escribe tu sugerencia aquí..."
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 rounded-lg text-gray-800 font-medium transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                    isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pop-up de feedback */}
      {feedbackMessage && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg text-white font-medium z-50 transition-all duration-300 ${
            feedbackMessage.type === 'error' ? 'bg-red-500' :
            feedbackMessage.type === 'success' ? 'bg-green-500' :
            'bg-blue-500'
          }`}
        >
          {feedbackMessage.text}
        </div>
      )}
    </>
  );
};

export default HelpSection;
