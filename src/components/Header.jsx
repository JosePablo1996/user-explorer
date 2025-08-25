// components/Header.jsx
// Este componente de cabecera muestra el título de la aplicación,
// un indicador de estado de la conexión de la API, y botones de utilidad.
// Se ha refactorizado el diseño manteniendo los iconos originales y mejorando sus animaciones.

import { useState, useRef, useEffect } from 'react';
// Se ha refactorizado el diseño manteniendo los iconos originales y mejorando sus animaciones.
import { Sun, Moon, RefreshCw, Wifi, WifiOff, Home, Info, HelpCircle, Mail, Shield, Briefcase, Menu, X, Rocket } from 'lucide-react';

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

  // Cierra el menú móvil al hacer clic fuera de él
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

  // Cierra el menú móvil con la tecla 'Esc'
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

  // Manejador para los enlaces de navegación
  const handleLinkClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  // Renderiza el estado de la conexión con animaciones mejoradas
  const renderConnectionStatus = () => {
    let statusText = '';
    let icon = null;
    let iconColor = '';
    let iconAnimation = '';
    let titleText = 'Estado de conexión';

    switch (connectionStatus) {
      case 'connected':
        statusText = 'Conectado';
        icon = <Wifi className="h-5 w-5" />;
        iconColor = 'text-green-500';
        titleText = 'Conectado a la API. Haz clic para refrescar.';
        break;
      case 'disconnected':
        statusText = 'Desconectado';
        icon = <WifiOff className="h-5 w-5" />;
        iconColor = 'text-red-500';
        titleText = 'Desconectado de la API. Haz clic para reintentar.';
        break;
      case 'checking':
      default:
        statusText = 'Verificando...';
        icon = <Wifi className="h-5 w-5 animate-pulse" />;
        iconColor = 'text-yellow-500';
        titleText = 'Verificando conexión...';
        iconAnimation = 'animate-pulse';
        break;
    }

    return (
      <button
        onClick={onRefresh}
        className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
        title={titleText}
      >
        <span className={`${iconColor} ${iconAnimation}`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline-block">
          {statusText}
        </span>
      </button>
    );
  };

  // Íconos y configuración para los elementos del menú
  // Se han mantenido los íconos originales
  const menuItems = [
    { name: 'Inicio', page: 'main', icon: Home },
    { name: 'Acerca de', action: onToggleAbout, icon: Info },
    { name: 'Ayuda', action: onToggleHelp, icon: HelpCircle },
    { name: 'Contacto', page: 'contact', icon: Mail },
    { name: 'Privacidad', page: 'privacy', icon: Shield },
    { name: 'Términos', page: 'terms', icon: Briefcase },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y título con animaciones de resplandor y rotación */}
        <button onClick={() => handleLinkClick('main')} className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg group transform transition-transform duration-300 hover:scale-105">
          <div className="relative w-10 h-10 flex items-center justify-center text-blue-600 dark:text-blue-400 transform transition-all duration-500 group-hover:rotate-[360deg] animate-spin-slow group-hover:animate-none">
            {/* Se mantiene el ícono de cohete, ya que es más moderno */}
            <Rocket className="w-full h-full" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white hidden md:block">
            User Explorer
          </h1>
        </button>

        {/* Navegación para escritorio */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.page ? handleLinkClick(item.page) : item.action()}
              className="group flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              {/* Animación de rebote para los íconos */}
              <item.icon className="h-5 w-5 transition-all duration-300 transform group-hover:scale-110 group-hover:animate-bounce" />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Botón del menú móvil y acciones de escritorio */}
        <div className="flex items-center gap-4">
          {/* Indicador de estado de la conexión */}
          <div className="hidden sm:block">
            {renderConnectionStatus()}
          </div>
          
          {/* Alternador del modo oscuro con animaciones mejoradas */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 group"
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-yellow-400 group-hover:animate-spin" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 group-hover:animate-wiggle" />
            )}
          </button>
          
          {/* Botón del menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full lg:hidden transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 group"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300 transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300 transform transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
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
            <X className="h-6 w-6" />
          </button>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.page ? handleLinkClick(item.page) : item.action()}
              className="w-full text-left py-2 px-4 rounded-lg text-xl font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-4 group"
            >
              <item.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              {item.name}
            </button>
          ))}
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <div className="flex items-center gap-4">
            {renderConnectionStatus()}
          </div>
        </div>
      </div>

      {/* CSS personalizado para las animaciones */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group-hover\\:animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4); }
        }
        .animate-hover-glow:hover {
          animation: glow 1s ease-in-out infinite alternate;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .group-hover\\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
