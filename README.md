# Explorador de Usuarios

Esta es una aplicación web dinámica construida con **React** y **Vite** que permite a los usuarios explorar, buscar y filtrar una lista de usuarios de una API. La aplicación está diseñada para ser rápida, moderna y completamente responsiva, con soporte para modo oscuro y una experiencia de usuario fluida.

## Características Principales

-   **Vista de Usuarios:** Explora la lista completa de usuarios con detalles clave.
-   **Búsqueda y Filtrado:** Busca usuarios por nombre, ciudad o empresa en tiempo real.
-   **Ordenamiento:** Ordena la lista de usuarios por nombre, ciudad o empresa.
-   **Páginas Dedicadas:** Navega a páginas de documentación, políticas de privacidad, términos de servicio y soporte técnico.
-   **Modo Oscuro:** Alterna entre los modos claro y oscuro para una mejor visualización.
-   **Estado de la API:** La aplicación muestra el estado de la conexión de la API en tiempo real.

## Uso de la API

La aplicación consume datos de la API de prueba **JSONPlaceholder** en la siguiente URL: `https://jsonplaceholder.typicode.com/users`.

### Cómo Funciona la Conexión

La lógica de conexión está implementada en el componente principal, `App.jsx`, para garantizar un manejo robusto de los datos y los errores.

-   **Verificación Previa:** La función `checkApiConnection` verifica la disponibilidad del servidor antes de intentar cargar los datos de los usuarios.
-   **Mensajes de Estado:** Durante el proceso, la aplicación muestra mensajes temporales como "Conectando con la API..." y "Cargando datos de usuarios..." para mantener informado al usuario.
-   **Manejo de Errores:** Si la solicitud a la API falla (por ejemplo, por problemas de red o un `timeout`), se muestra un mensaje de error y un botón para reintentar la conexión, lo que mejora la resiliencia de la aplicación.
-   **Reconexión Automática:** La aplicación intenta reconectarse automáticamente cada 30 segundos si la conexión se pierde.

## Archivos Esenciales y su Propósito

### `App.jsx`
Este es el corazón de la aplicación. Gestiona el estado global (como la lista de usuarios, el usuario seleccionado y el estado de la API), la navegación entre las diferentes páginas y la lógica principal de carga de datos.

### `DocumentationPage.jsx`
Un componente de página dedicado que ofrece una guía detallada sobre la estructura, el uso de la API y los componentes clave de la aplicación.

### `UserList.jsx`
Este componente es responsable de renderizar la lista de usuarios. Muestra información básica de cada usuario y permite la interacción, como seleccionar un usuario para ver más detalles.

### `Header.jsx`
Contiene la barra de navegación superior. Muestra el logo de la aplicación, el estado actual de la conexión de la API y los botones para alternar el modo oscuro y navegar a otras secciones (como `Acerca de` y `Ayuda`).

## Tecnologías Clave

-   **React:** La biblioteca principal de JavaScript para construir la interfaz de usuario.
-   **Vite:** Un entorno de desarrollo rápido y un *bundler* para proyectos web modernos, utilizado para la configuración inicial.
-   **Tailwind CSS:** Un framework de CSS de utilidad que permite un diseño y una estilización rápidos y responsivos.
-   **Node.js:** El entorno de ejecución de JavaScript para el servidor.

---

**Para empezar, clona este repositorio, navega a la carpeta del proyecto e instala las dependencias:**

```bash
git clone [https://github.com/JosePablo1996/user-explorer.git](https://github.com/JosePablo1996/user-explorer.git)
cd user-explorer
npm install