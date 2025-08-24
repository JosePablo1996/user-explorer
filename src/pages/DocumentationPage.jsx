// src/pages/DocumentationPage.jsx
// Este componente presenta una página de documentación para la aplicación.
// Incluye una estructura de navegación y secciones con contenido descriptivo y ejemplos.

import React, { useState, useEffect } from 'react';

const DocumentationPage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('introduccion');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduccion', 'componentes', 'api', 'estilos', 'librerias', 'scripts', 'despliegue', 'soporte'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-inter transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 animate-fadeInDown">
            Documentación de la Aplicación
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Guía completa para entender y utilizar nuestras funcionalidades.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Barra de navegación lateral para la documentación */}
          <nav className="w-full lg:w-1/4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg sticky top-8 h-fit animate-slideInLeft">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Índice</h2>
            <ul className="space-y-2">
              <li>
                <a href="#introduccion" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'introduccion' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Introducción
                </a>
              </li>
              <li>
                <a href="#componentes" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'componentes' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Componentes Clave
                </a>
              </li>
              <li>
                <a href="#api" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'api' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Uso de la API
                </a>
              </li>
              <li>
                <a href="#estilos" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'estilos' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Estilos y Diseño
                </a>
              </li>
              <li>
                <a href="#librerias" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'librerias' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Librerías Esenciales
                </a>
              </li>
              <li>
                <a href="#scripts" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'scripts' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Scripts Esenciales
                </a>
              </li>
              <li>
                <a href="#despliegue" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'despliegue' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Despliegue
                </a>
              </li>
              <li>
                <a href="#soporte" className={`block p-2 rounded-lg transition-colors duration-200 ${activeSection === 'soporte' ? 'bg-blue-100 text-blue-800 font-semibold dark:bg-gray-700 dark:text-blue-400' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
                  Soporte
                </a>
              </li>
            </ul>
          </nav>

          {/* Contenido principal de la documentación */}
          <main className="w-full lg:w-3/4 space-y-12 animate-fadeIn">
            {/* Sección de Introducción */}
            <section id="introduccion" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                1. Introducción
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nuestra aplicación está diseñada para ofrecer una experiencia de usuario fluida y eficiente, construida sobre tecnologías web modernas como **React** y **Tailwind CSS**. Esta documentación te guiará a través de la estructura, los componentes y las funcionalidades principales.
              </p>
            </section>

            {/* Sección de Componentes Clave */}
            <section id="componentes" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                2. Componentes Clave
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">App.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    El componente principal que gestiona el estado global, la navegación y el fetching de datos.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Header.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    La barra de navegación superior con el logo, el estado de la API, los botones de navegación y el modo oscuro.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">UserList.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Muestra la lista de usuarios, con soporte para búsqueda y ordenamiento.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">UserDetail.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Muestra los detalles completos de un usuario seleccionado.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">StatsCard.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Tarjetas estilizadas para mostrar estadísticas clave de la aplicación.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">HelpSection.jsx</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    La sección de ayuda que incluye el modal de sugerencias.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección de Uso de la API */}
            <section id="api" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                3. Uso de la API
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                La aplicación utiliza la API de prueba **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/users`) para obtener datos de usuarios. La comunicación con esta API es gestionada por el componente principal `App.jsx`, que tiene una lógica robusta para manejar el estado de la conexión y los posibles errores.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Lógica de Conexión
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    La aplicación utiliza varios estados para indicar el estado de la conexión a la API:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>**`isApiConnected`**: Un booleano que es `true` si la última llamada a la API fue exitosa.</li>
                      <li>**`connectionStatus`**: Este estado puede ser `'checking'`, `'connected'` o `'disconnected'`, proporcionando una indicación más detallada del estado de la red.</li>
                      <li>**`infoMessage`**: Se usa para mostrar mensajes temporales al usuario, como "Conectando con la API..." o "Cargando datos de usuarios...".</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Manejo de Errores
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Si la conexión con la API falla, la aplicación maneja el error para informar al usuario:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Se actualiza el estado `error` con un mensaje descriptivo.</li>
                      <li>El estado `connectionStatus` cambia a `'disconnected'`.</li>
                      <li>La aplicación renderiza el componente `ErrorMessage` en lugar de la lista de usuarios, permitiendo al usuario reintentar la conexión.</li>
                      <li>También hay un `timeout` para evitar que la aplicación se congele si la respuesta tarda demasiado.</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Código de Ejemplo (App.jsx)
                  </h3>
                  <pre className="mt-2 p-4 rounded-lg bg-gray-900 text-green-300 overflow-x-auto">
                    <code>
                      {`// Lógica de fetching en App.jsx
const fetchUsers = useCallback(async () => {
  try {
    setLoading(true);
    setError(null);
    setInfoMessage('Conectando con la API...');
    
    const isConnected = await checkApiConnection();
    if (!isConnected) {
      throw new Error('No se pudo establecer conexión con el servidor');
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
    const response = await fetch(API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }

    const data = await response.json();
    setUsers(data);
    setLastUpdated(Date.now());
  } catch (error) {
    console.error('Error fetching users:', error);
    setError('No se pudieron cargar los usuarios. Intenta nuevamente.');
  } finally {
    setLoading(false);
    setTimeout(() => setInfoMessage(''), 1500);
  }
}, [checkApiConnection, retryCount]);`}
                    </code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Sección de Estilos y Diseño */}
            <section id="estilos" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                4. Estilos y Diseño
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                La aplicación está diseñada con un enfoque minimalista y moderno, utilizando **Tailwind CSS** para una experiencia completamente responsiva. Algunos de los estilos clave incluyen:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Modo Oscuro</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    La aplicación soporta un modo oscuro dinámico, que ajusta los colores de fondo y texto para una mejor visualización nocturna.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Efectos Flotantes</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Elementos como el logo y las tarjetas de estadísticas (`StatsCard`) tienen una animación suave de "flotación" para un toque visual.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Efecto de Vidrio</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Se utiliza un efecto de "glassmorphism" en algunos contenedores para dar un aspecto translúcido y moderno, creando profundidad.
                  </p>
                </div>
              </div>
            </section>

            {/* Nueva sección de Librerías Esenciales */}
            <section id="librerias" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                5. Librerías NPM Esenciales
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                La aplicación se basa en varias librerías de NPM para funcionar correctamente. A continuación, se detallan las más importantes que debes tener instaladas para el desarrollo del proyecto.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `react` y `react-dom`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    **React** es la librería principal para construir interfaces de usuario. **React-DOM** es el paquete que se encarga de renderizar los componentes en el DOM del navegador. Son la base de toda la aplicación.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `tailwindcss`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    **Tailwind CSS** es un framework de CSS que nos permite construir diseños personalizados y responsivos directamente en nuestro HTML (o JSX) con clases de utilidad.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `lucide-react`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Una colección de iconos bellamente diseñados y completamente personalizables que se pueden integrar fácilmente en los componentes de React para una mejor experiencia visual.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección de Scripts */}
            <section id="scripts" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                6. Scripts Esenciales
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Los scripts son comandos predefinidos en el archivo `package.json` que nos permiten automatizar tareas comunes del desarrollo. Aquí están los más importantes para esta aplicación:
              </p>
              <div className="space-y-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `npm run dev`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Este es el script de desarrollo. Inicia un servidor local y abre la aplicación en tu navegador. Monitorea los archivos del proyecto y actualiza automáticamente la página cuando guardas un cambio, lo que se conoce como "hot-reloading".
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `npm run build`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Este script prepara la aplicación para su despliegue en un entorno de producción. "Compila" todo el código de React en archivos estáticos (HTML, CSS, JavaScript) optimizados y minificados, lo que reduce el tamaño y mejora el rendimiento de la aplicación en vivo.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    `npm install`
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Aunque no es un script de ejecución (`run`), este comando es crucial. Lee el archivo `package.json` e instala todas las dependencias y librerías necesarias del proyecto. Debes ejecutarlo la primera vez que clonas el repositorio o cuando las dependencias cambian.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección de Despliegue */}
            <section id="despliegue" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                7. Despliegue
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Para desplegar la aplicación, asegúrate de haber instalado todas las dependencias con `npm install` o `yarn`. Luego, ejecuta el comando de build de tu framework (por ejemplo, `npm run build`) para generar los archivos estáticos.
              </p>
            </section>
            
            {/* Sección de Soporte y Contacto */}
            <section id="soporte" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                8. Soporte
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Si necesitas ayuda adicional o quieres enviar sugerencias, puedes utilizar los botones en la sección de ayuda (`HelpSection`). Nuestro equipo de soporte estará encantado de asistirte.
              </p>
            </section>

            {/* Botón para volver al inicio */}
            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('main')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Volver a la página de inicio
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;