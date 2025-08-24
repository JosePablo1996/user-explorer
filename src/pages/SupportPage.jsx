// src/pages/SupportPage.jsx
// Este componente de React presenta una página dedicada al soporte técnico.
// Incluye un formulario de contacto y una sección de preguntas frecuentes.

import React, { useState } from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react'; // Iconos para una mejor visualización

const SupportPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Simula el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Validación simple
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'Por favor, completa todos los campos.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Este es un espacio de trabajo para tu lógica de API.
      // Puedes reemplazar el siguiente código con una llamada real a una API.
      // Ejemplo: const response = await fetch('/api/support', { method: 'POST', body: JSON.stringify(formData) });
      
      // En este ejemplo, el mensaje de éxito se muestra inmediatamente.
      setSubmitMessage({ type: 'success', text: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
      setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario

    } catch (error) {
      console.error('Error al enviar el mensaje:', error); // 'error' ahora se usa
      setSubmitMessage({ type: 'error', text: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-inter transition-colors duration-300 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 animate-fadeInDown">
            Soporte Técnico
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Estamos aquí para ayudarte. Por favor, describe tu problema y nos pondremos en contacto contigo.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección del formulario de contacto */}
          <section className="w-full lg:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 animate-slideInLeft">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 flex items-center">
              <MessageCircle className="mr-2" /> Contacta con Nosotros
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="tu.correo@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="Describe tu problema o sugerencia..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  } focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
            {submitMessage && (
              <div
                className={`mt-6 p-4 rounded-lg text-center ${
                  submitMessage.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  submitMessage.type === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''
                }`}
              >
                {submitMessage.text}
              </div>
            )}
          </section>

          {/* Sección de preguntas frecuentes */}
          <section className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 animate-slideInRight">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 flex items-center">
              <HelpCircle className="mr-2" /> Preguntas Frecuentes
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">¿Cómo puedo reportar un error?</h3>
                <p>Puedes usar el formulario de contacto de la izquierda para reportar cualquier error. Por favor, incluye la mayor cantidad de detalles posible sobre los pasos para reproducirlo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">¿Cómo sé que la API está funcionando?</h3>
                <p>El encabezado de la página principal muestra un estado de la API, indicando si la conexión es exitosa o si hay un problema.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">¿Dónde puedo encontrar la documentación?</h3>
                <p>
                  Puedes navegar a la página de documentación haciendo clic en el enlace del pie de página o directamente
                  <span onClick={() => onNavigate('documentation')} className="text-blue-500 hover:underline cursor-pointer ml-1">
                    aquí
                  </span>.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Botón para volver al inicio */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('main')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Volver a la página de inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
