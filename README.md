🌐 Explorador de Usuarios
¡Bienvenido al repositorio del Explorador de Usuarios!

Este proyecto es una aplicación web dinámica construida con React y Vite que permite a los usuarios buscar, explorar y filtrar una lista de usuarios obtenida de una API externa. La aplicación está diseñada para ser rápida, moderna y completamente responsiva, con un enfoque en la experiencia del usuario y la robustez del código.

✨ Características Destacadas
Búsqueda y Filtrado en Tiempo Real: La aplicación permite a los usuarios buscar instantáneamente por nombre, ciudad o empresa, lo que facilita la navegación por la lista.

Estado de la Conexión de la API: Un indicador visual en el Header muestra el estado de la conexión en tiempo real (conectado, desconectado, cargando), ofreciendo una experiencia transparente al usuario.

Modo Oscuro Dinámico: El usuario puede alternar entre los modos claro y oscuro, y la interfaz se adapta automáticamente, mejorando la legibilidad en diferentes condiciones de iluminación.

Diseño Moderno y Responsivo: La interfaz de usuario es limpia y minimalista, optimizada para funcionar sin problemas en dispositivos móviles, tabletas y computadoras de escritorio.

Navegación Intuitiva: El sistema de enrutamiento integrado permite navegar a páginas dedicadas como Documentación, Políticas de Privacidad y Términos de Servicio.

🔌 Uso de la API y Lógica de Conexión
La aplicación consume datos de la API de prueba JSONPlaceholder en la siguiente URL: https://jsonplaceholder.typicode.com/users. La lógica principal para el manejo de la API se encuentra en el componente App.jsx, lo que asegura un control centralizado y robusto.

Proceso de Consumo de la API
El consumo de datos se realiza a través de un useEffect en App.jsx, que se activa al cargar el componente.

Verificación Previa: Antes de la llamada principal, la función checkApiConnection realiza una verificación rápida para confirmar la disponibilidad del servidor, evitando fallos en la red.

Manejo de Tiempos de Espera: Para evitar que la aplicación se congele, la llamada a la API incluye un timeout de 10 segundos. Si no hay respuesta, la solicitud se aborta y se muestra un mensaje de error.

Gestión de Estados: El estado de la conexión (connectionStatus) se actualiza en tiempo real, mostrando "Conectando...", "Cargando datos...", o "Conectado" según el momento del proceso.

Manejo de Errores Robustos: Se utiliza un bloque try...catch para capturar errores de red o de la API. En caso de fallo, se muestra un mensaje descriptivo y un botón de "Reintentar Conexión".

📂 Estructura de Archivos del Proyecto
La aplicación sigue una arquitectura basada en componentes, con una estructura de directorios clara y lógica para facilitar el desarrollo y el mantenimiento.

user-explorer/
├── public/                 # Contiene archivos estáticos como el favicon.
├── src/                    # Directorio principal del código fuente.
│   ├── assets/             # Almacena recursos estáticos como imágenes y iconos.
│   ├── components/         # Módulos reutilizables de la UI, como botones o cards.
│   │   ├── Header.jsx      # Barra de navegación principal.
│   │   ├── UserList.jsx    # Componente para mostrar y gestionar la lista de usuarios.
│   │   └── SearchBox.jsx   # Componente para la funcionalidad de búsqueda.
│   ├── constants/          # Archivos que contienen constantes de la aplicación.
│   ├── pages/              # Componentes de página, representan vistas completas.
│   │   ├── DocumentationPage.jsx # Página de documentación.
│   │   ├── ContactPage.jsx # Página de contacto.
│   │   └── PrivacyPolicyPage.jsx # Página de política de privacidad.
│   ├── App.jsx             # El componente raíz que maneja la lógica central y la navegación.
│   ├── index.css           # Estilos CSS globales de la aplicación.
│   └── main.jsx            # El punto de entrada principal que monta la aplicación en el DOM.
├── .gitignore              # Archivos y carpetas que Git debe ignorar.
├── package.json            # Metadatos del proyecto y dependencias de Node.js.
├── tailwind.config.js      # Configuración personalizada de Tailwind CSS.
└── vite.config.js          # Configuración del servidor de desarrollo y del *bundler* Vite.

📄 Archivos y Carpetas Clave Explicados
src/: Contiene todo el código fuente de la aplicación.

src/components/: Almacena los componentes reutilizables (ej. Header.jsx, UserList.jsx, SearchBox.jsx). Son las "piezas" que construyen las páginas.

src/pages/: Contiene los componentes que representan páginas completas (ej. DocumentationPage.jsx, ContactPage.jsx).

src/services/: Aquí se encuentra la lógica para consumir la API (apiService.jsx), separando la lógica de negocio de la interfaz de usuario.

App.jsx: Es el componente principal que une todo, gestiona la lógica de la API, el estado global y la navegación.

main.jsx: El punto de entrada de la aplicación. Renderiza el componente App.jsx en el DOM.

🎨 Diseño y Construcción de la App
La aplicación fue construida con un enfoque "de primera utilidad", aprovechando las siguientes tecnologías para garantizar un código eficiente y un diseño moderno.

Tecnologías Clave
React: La base de la aplicación. Su enfoque en componentes reutilizables y el manejo del estado facilitaron la construcción de una interfaz dinámica.

Vite: Se eligió por su increíble velocidad de desarrollo. Su Hot Module Replacement (HMR) permite ver los cambios en tiempo real, acelerando el proceso de debug.

Tailwind CSS: Un framework de CSS de "clases de utilidad". Permitió crear diseños complejos y responsivos directamente en el código JSX, sin necesidad de escribir CSS personalizado ni mantener grandes archivos de estilos.

lucide-react: Se utilizó para añadir íconos vectoriales (SVG) de alta calidad. Son ligeros y personalizables, lo que mejora la estética sin sacrificar el rendimiento.

Node.js: El entorno de ejecución esencial para gestionar las dependencias del proyecto y ejecutar los scripts de desarrollo.

🚀 Cómo Empezar
Clonar el repositorio:

git clone https://github.com/JosePablo1996/user-explorer.git
cd user-explorer

Instalar las dependencias:

npm install

Iniciar el servidor de desarrollo:

npm run dev

Esto iniciará la aplicación en http://localhost:5173.

📈 Próximos Pasos (Roadmap)
[ ] Añadir la opción de filtrar la lista de usuarios por ciudad.

[ ] Implementar la funcionalidad para que el usuario pueda editar y guardar la información de un usuario.

[ ] Integrar un sistema de autenticación básica para proteger las rutas.

[ ] Optimizar la aplicación para una carga inicial más rápida.