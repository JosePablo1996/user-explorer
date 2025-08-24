// components/Header.jsx
// Este componente de cabecera muestra el título de la aplicación,
// un indicador de estado de la conexión de la API, y botones de utilidad.
// El indicador de conexión cambia de apariencia según la propiedad 'connectionStatus'.

import { useState, useRef, useEffect } from 'react';
// Importación de los íconos de la biblioteca lucide-react
import { Sun, Moon, RefreshCw, Wifi, WifiOff } from 'lucide-react';

const Header = ({
  connectionStatus,
  darkMode,
  toggleDarkMode,
  onNavigate,
  onToggleAbout,
  onToggleHelp,
  onRefresh,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Accessibility: close menu on Esc key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const renderConnectionStatus = () => {
    let statusText = '';
    let icon = null;
    let iconColor = '';

    switch (connectionStatus) {
      case 'connected':
        statusText = 'Conectado';
        icon = <Wifi className="h-5 w-5" />;
        iconColor = 'text-green-500';
        break;
      case 'disconnected':
        statusText = 'Desconectado';
        icon = <WifiOff className="h-5 w-5" />;
        iconColor = 'text-red-500';
        break;
      case 'checking':
      default:
        statusText = 'Verificando...';
        icon = <Wifi className="h-5 w-5 animate-pulse" />;
        iconColor = 'text-yellow-500';
        break;
    }

    return (
      <div className="flex items-center gap-2">
        <span className={`${iconColor}`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline-block">
          {statusText}
        </span>
      </div>
    );
  };

  // Definición de estilos compartidos
  const sharedClasses = {
    headerLink: "flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200",
    mobileLink: "w-full text-left py-2 px-4 rounded-lg text-xl font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
  };

  const menuItems = [
    { name: 'Inicio', page: 'main', icon: 'home' },
    { name: 'Acerca de', action: onToggleAbout, icon: 'info_outline' },
    { name: 'Ayuda', action: onToggleHelp, icon: 'help_outline' },
    { name: 'Contacto', page: 'contact', icon: 'email' },
    { name: 'Privacidad', page: 'privacy', icon: 'privacy_tip' },
    { name: 'Términos', page: 'terms', icon: 'gavel' },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md transition-colors duration-300">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y título (ahora un botón funcional) */}
        <button onClick={() => handleLinkClick('main')} className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
          <div className="text-3xl text-blue-600 dark:text-blue-400 transform transition-all hover:scale-110">
            {/* Logo de usuario mejorado con Material Icons */}
            <span className="material-icons text-4xl">account_circle</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white hidden md:block">
            User Explorer
          </h1>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.page ? handleLinkClick(item.page) : item.action()}
              className={sharedClasses.headerLink}
            >
              <span className="material-icons text-xl">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile menu button and desktop actions */}
        <div className="flex items-center gap-4">
          {/* Connection status indicator */}
          <div className="hidden sm:block">
            {renderConnectionStatus()}
          </div>
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-gray-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600" />
            )}
          </button>
          
          {/* Refresh button */}
          <button
            onClick={onRefresh}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label="Refrescar datos"
          >
            <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full lg:hidden transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl p-8 flex flex-col items-start gap-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="self-end p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Cerrar menú de navegación"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.page ? handleLinkClick(item.page) : item.action()}
              className={sharedClasses.mobileLink}
            >
              <span className="material-icons mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <div className="flex items-center gap-4">
            {renderConnectionStatus()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
