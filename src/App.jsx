// App.jsx
// Este es el componente principal de la aplicación con navegación mejorada
// e integración de los componentes de About y Help en una página unificada.

import { useState, useEffect, useMemo, useCallback } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import StatsCard from './components/StatsCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import TechnologiesSection from './components/TechnologiesSection';
import { sharedClasses } from './constants/styles';

// Importación de las páginas completas para la navegación
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DocumentationPage from './pages/DocumentationPage'; 
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';

// Importación de los componentes de "sección" que se muestran dentro de la página principal
import AboutSection from './pages/AboutSection';
import HelpSection from './components/HelpSection';

// Constantes para la API
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const API_TIMEOUT = 10000; // 10 segundos de timeout
const RECONNECT_INTERVAL = 30000; // 30 segundos para reconexión

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState('checking'); // 'checking', 'connected', 'disconnected'
  const [currentPage, setCurrentPage] = useState('main'); // Estado para la navegación entre páginas completas
  const [showAboutSection, setShowAboutSection] = useState(false); // Estado para el toggle de AboutSection
  const [showHelpSection, setShowHelpSection] = useState(false); // Estado para el toggle de HelpSection
  const [lastUpdated, setLastUpdated] = useState(null);

  // Función para manejar la navegación entre páginas completas
  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
    // Aseguramos que las secciones estén ocultas al cambiar de página completa
    setShowAboutSection(false);
    setShowHelpSection(false);
  }, []);

  // Función para alternar la visualización de la sección "Acerca de"
  const handleToggleAbout = useCallback(() => {
    // Si la sección ya está visible, la ocultamos. Si no, la mostramos y ocultamos la de Ayuda.
    setShowAboutSection(prev => !prev);
    if (!showAboutSection) {
      setShowHelpSection(false);
      // Aseguramos que la página principal se muestre si no hay otra sección activa
      setCurrentPage('main');
    }
  }, [showAboutSection]);

  // Función para alternar la visualización de la sección "Ayuda"
  const handleToggleHelp = useCallback(() => {
    // Si la sección ya está visible, la ocultamos. Si no, la mostramos y ocultamos la de Acerca de.
    setShowHelpSection(prev => !prev);
    if (!showHelpSection) {
      setShowAboutSection(false);
      // Aseguramos que la página principal se muestre si no hay otra sección activa
      setCurrentPage('main');
    }
  }, [showHelpSection]);

  // Función para manejar las acciones de ayuda (solicitud de soporte técnico o abrir modal de sugerencia)
  const onHelpAction = useCallback((message) => {
    if (message === 'support-request') {
        // Redirigir a la página de soporte
        handleNavigate('support');
    } else {
        // Mostrar mensaje de información temporal para otras acciones de ayuda
        setInfoMessage(message);
        setTimeout(() => setInfoMessage(''), 3000);
    }
  }, [handleNavigate]);

  // Función para verificar el estado de la conexión de la API
  const checkApiConnection = useCallback(async () => {
    try {
      setConnectionStatus('checking');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const response = await fetch(API_URL, {
        method: 'HEAD',
        signal: controller.signal,
        headers: { 'Cache-Control': 'no-cache' }
      });
      clearTimeout(timeoutId);
      if (response.ok) {
        setIsApiConnected(true);
        setConnectionStatus('connected');
        return true;
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.error('Error checking API connection:', error);
      setIsApiConnected(false);
      setConnectionStatus('disconnected');
      return false;
    }
  }, []);

  // Función principal para obtener usuarios con manejo robusto de errores
  const fetchUsers = useCallback(async () => {
      try {
        setLoading(true);
        setError(null);
        setInfoMessage('Conectando con la API...');

        // Verificamos la conexión antes de intentar cargar los datos
        const isConnected = await checkApiConnection();
        if (!isConnected) {
          throw new Error('No se pudo establecer conexión con el servidor');
        }

        setInfoMessage('Cargando datos de usuarios...');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
        const response = await fetch(API_URL, {
          signal: controller.signal,
          headers: { 'Cache-Control': 'no-cache' }
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
        setIsApiConnected(true);
        setConnectionStatus('connected');
        setLastUpdated(Date.now());
        console.log("Datos de usuarios cargados correctamente.");

      } catch (error) {
        console.error('Error fetching users:', error);
        let errorMessage = 'No se pudieron cargar los usuarios. ';
        if (error.name === 'AbortError') {
          errorMessage += 'La solicitud tardó demasiado tiempo.';
        } else if (error.message.includes('conexión')) {
          errorMessage += 'Problemas de conexión de red.';
        } else {
          errorMessage += 'Intenta nuevamente.';
        }
        setError(errorMessage);
        setIsApiConnected(false);
        setConnectionStatus('disconnected');
      } finally {
        setTimeout(() => setInfoMessage(''), 1500);
        setLoading(false);
      }
    }, [checkApiConnection, retryCount]);

  // Efecto para cargar usuarios
  useEffect(() => {
    if (currentPage === 'main') {
      fetchUsers();
    }
  }, [fetchUsers, currentPage]);

  // Efecto para verificar conexión periódicamente cuando está desconectado
  useEffect(() => {
    let intervalId;
    if (connectionStatus === 'disconnected') {
      intervalId = setInterval(() => {
        console.log('Verificando reconexión automática...');
        checkApiConnection();
      }, RECONNECT_INTERVAL);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [connectionStatus, checkApiConnection]);

  // Efecto para scroll con cleanup
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Función para reintentar la conexión
  const handleRetry = useCallback(() => {
    setRetryCount(prev => prev + 1);
    setError(null);
    fetchUsers();
  }, [fetchUsers]);

  // Memoized filtered users con dependencias correctas
  const filteredUsers = useMemo(() => {
    if (!users.length) return [];
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'city') {
        return a.address.city.localeCompare(b.address.city);
      } else if (sortBy === 'company') {
        return a.company.name.localeCompare(b.company.name);
      }
      return 0;
    });
  }, [searchTerm, users, sortBy]);

  // Memoized stats con dependencias correctas
  const stats = useMemo(() => {
    const uniqueCities = new Set(users.map(u => u.address.city)).size;
    const uniqueCompanies = new Set(users.map(u => u.company.name)).size;
    return {
      totalUsers: users.length,
      uniqueCities,
      uniqueCompanies
    };
  }, [users]);

  // Callbacks memoizados con dependencias apropiadas
  const handleUserSelect = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedUser(null);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Función para alternar el modo oscuro
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  // Lógica de renderizado de páginas
  let pageContent;
  switch (currentPage) {
    case 'contact':
      pageContent = <ContactPage onNavigate={handleNavigate} />;
      break;
    case 'privacy':
      pageContent = <PrivacyPolicyPage onNavigate={handleNavigate} />;
      break;
    case 'terms':
      pageContent = <TermsOfServicePage onNavigate={handleNavigate} />;
      break;
    case 'documentation':
      pageContent = <DocumentationPage onNavigate={handleNavigate} />;
      break;
    case 'support':
        pageContent = <SupportPage onNavigate={handleNavigate} />;
        break;
    case 'about':
        pageContent = <AboutPage onNavigate={handleNavigate} />;
        break;
    default:
      if (loading) {
        pageContent = <LoadingSpinner connectionStatus={connectionStatus} />;
      } else if (error) {
        pageContent = <ErrorMessage error={error} onRetry={handleRetry} connectionStatus={connectionStatus} />;
      } else if (selectedUser) {
        pageContent = <UserDetail user={selectedUser} onBack={handleBackToList} />;
      } else {
        pageContent = (
          <div className="space-y-10">
            <div className="text-center mb-12">
              <div className="inline-block p-4 rounded-2xl glass-effect mb-6">
                <div className="text-5xl">👥</div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                Explorador de Usuarios
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explora nuestra red de usuarios, filtra por nombre, ciudad o empresa.
              </p>
            </div>
            
            {/* Secciones que se muestran y ocultan con los botones del Header */}
            {showAboutSection && <AboutSection onNavigate={handleNavigate} />}
            {showHelpSection && <HelpSection onHelpAction={onHelpAction} onNavigate={handleNavigate} />}
            
            {!showAboutSection && !showHelpSection && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <StatsCard
                    title="Total de Usuarios"
                    value={users.length}
                    icon="👥"
                    gradient="from-blue-500 to-indigo-600"
                    floating={true}
                  />
                  <StatsCard
                    title="Ciudades Únicas"
                    value={stats.uniqueCities}
                    icon="🏙️"
                    gradient="from-green-500 to-teal-600"
                    floating={true}
                    delay={1}
                  />
                  <StatsCard
                    title="Empresas"
                    value={stats.uniqueCompanies}
                    icon="🏢"
                    gradient="from-yellow-500 to-orange-600"
                    floating={true}
                    delay={2}
                  />
                </div>

                <div className="glass-effect p-8 rounded-2xl shadow-lg mb-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div className="flex-1 w-full">
                      <SearchBox
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        resultsCount={filteredUsers.length}
                        totalCount={users.length}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                      <button
                        onClick={fetchUsers}
                        className="flex items-center gap-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg w-full justify-center md:w-auto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Actualizar
                      </button>
                      <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto justify-center">
                        <label htmlFor="sort-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Ordenar por:
                        </label>
                        <select
                          id="sort-select"
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors font-medium shadow-sm"
                        >
                          <option value="name">Nombre</option>
                          <option value="city">Ciudad</option>
                          <option value="company">Empresa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {filteredUsers.length > 0 ? (
                  <UserList
                    users={filteredUsers}
                    onSelectUser={handleUserSelect}
                    searchTerm={searchTerm}
                  />
                ) : (
                  <div className="text-center py-20 glass-effect rounded-2xl shadow-lg transition-all duration-300">
                    <div className="floating text-7xl mb-6">🔍</div>
                    <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      No se encontraron resultados
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8 font-medium">
                      No hay usuarios que coincidan con "<span className="font-semibold text-blue-600 dark:text-blue-400">{searchTerm}</span>".
                      Intenta con otros términos de búsqueda.
                    </p>
                    <button
                      onClick={handleClearSearch}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Mostrar todos los usuarios
                    </button>
                  </div>
                )}
                
                <TechnologiesSection />
              </>
            )}
          </div>
        );
      }
      break;
  }

  return (
    <div className={`${sharedClasses.container} flex flex-col font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Poppins', 'Inter', sans-serif;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .dark .glass-effect {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .floating {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <Header
        isApiConnected={isApiConnected}
        connectionStatus={connectionStatus}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onNavigate={handleNavigate}
        onToggleAbout={handleToggleAbout}
        onToggleHelp={handleToggleHelp}
        onRefresh={fetchUsers}
        lastUpdated={lastUpdated}
      />

      <main className={`${sharedClasses.main} flex-grow container mx-auto px-4 py-8`}>
        {pageContent}
      </main>

      {infoMessage && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 p-4 bg-blue-500 text-white rounded-xl shadow-lg z-50 font-medium">
          {infoMessage}
        </div>
      )}

      {showScrollTopButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
          aria-label="Ir al inicio de la página"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Condicional para renderizar el Footer solo en la página principal */}
      {currentPage === 'main' && !showAboutSection && !showHelpSection && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
