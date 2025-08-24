const LoadingSpinner = ({ connectionStatus = 'checking' }) => {
  // Textos según el estado de conexión
  const statusMessages = {
    checking: {
      title: "Verificando conexión",
      description: "Estableciendo comunicación con el servidor...",
      icon: "🔍",
      color: "yellow"
    },
    connected: {
      title: "Conexión exitosa",
      description: "Cargando datos de usuarios...",
      icon: "✅",
      color: "green"
    },
    disconnected: {
      title: "Problemas de conexión",
      description: "Intentando reconectar automáticamente...",
      icon: "⚠️",
      color: "red"
    },
    loading: {
      title: "Cargando datos",
      description: "Procesando información recibida...",
      icon: "⏳",
      color: "blue"
    }
  };

  const currentStatus = statusMessages[connectionStatus] || statusMessages.checking;

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/70 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center transition-colors duration-500 p-4"
      role="status"
      aria-label={`Cargando - Estado: ${connectionStatus}`}
    >
      <div className="text-center w-full max-w-2xl mx-auto p-10 bg-white/95 dark:bg-gray-800/95 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-700 transform scale-95 hover:scale-100 border border-blue-100 dark:border-gray-700">
        
        {/* Encabezado con icono de estado */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl mb-4 animate-bounce-slow">
            {currentStatus.icon}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            {currentStatus.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            {currentStatus.description}
          </p>
        </div>
        
        {/* Contenedor principal del spinner */}
        <div className="relative mx-auto w-40 h-40 mb-10">
          {/* Anillo exterior giratorio */}
          <div 
            className="absolute inset-0 animate-spin-slow rounded-full border-8 border-t-transparent border-blue-400/30 border-r-blue-500/50 border-b-blue-600/70 border-l-blue-700/90"
            style={{ animationDuration: '4s' }}
            aria-hidden="true"
          ></div>
          
          {/* Anillo medio giratorio en dirección opuesta */}
          <div 
            className="absolute inset-4 animate-spin-slow-reverse rounded-full border-6 border-t-transparent border-blue-300/40 border-r-blue-400/60 border-b-blue-500/80 border-l-blue-600"
            style={{ animationDuration: '3s' }}
            aria-hidden="true"
          ></div>
          
          {/* Anillo interior con efecto de pulso */}
          <div className="absolute inset-8 flex items-center justify-center">
            <div className={`w-full h-full rounded-full animate-pulse-slow opacity-70 ${
              currentStatus.color === 'yellow' ? 'bg-yellow-400' :
              currentStatus.color === 'green' ? 'bg-green-400' :
              currentStatus.color === 'red' ? 'bg-red-400' : 'bg-blue-400'
            }`}></div>
          </div>
          
          {/* Punto central */}
          <div className="absolute inset-16 rounded-full bg-white dark:bg-gray-800 shadow-lg"></div>
        </div>
        
        {/* Barra de progreso animada */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-8 overflow-hidden">
          <div 
            className={`h-full rounded-full animate-progress ${
              currentStatus.color === 'yellow' ? 'bg-yellow-500' :
              currentStatus.color === 'green' ? 'bg-green-500' :
              currentStatus.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{ width: '65%' }}
          ></div>
        </div>
        
        {/* Indicador de estado con icono */}
        <div className={`flex items-center justify-center text-base py-3 px-6 rounded-xl shadow-sm border mb-6 ${
          currentStatus.color === 'yellow' 
            ? 'text-yellow-800 bg-yellow-50 border-yellow-200 dark:text-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700' 
            : currentStatus.color === 'green'
            ? 'text-green-800 bg-green-50 border-green-200 dark:text-green-200 dark:bg-green-900/30 dark:border-green-700'
            : currentStatus.color === 'red'
            ? 'text-red-800 bg-red-50 border-red-200 dark:text-red-200 dark:bg-red-900/30 dark:border-red-700'
            : 'text-blue-800 bg-blue-50 border-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:border-blue-700'
        }`}>
          <svg 
            className={`w-6 h-6 mr-3 animate-pulse-slow ${
              currentStatus.color === 'yellow' ? 'text-yellow-500' : 
              currentStatus.color === 'green' ? 'text-green-500' : 
              currentStatus.color === 'red' ? 'text-red-500' : 'text-blue-500'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={
                connectionStatus === 'checking' ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                connectionStatus === 'connected' || connectionStatus === 'loading' ? "M5 13l4 4L19 7" :
                "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              } 
            />
          </svg>
          Estado: {connectionStatus === 'checking' ? 'Verificando' : 
                 connectionStatus === 'connected' ? 'Conectado' : 
                 connectionStatus === 'loading' ? 'Cargando' : 'Desconectado'}
        </div>
        
        {/* Puntos de carga animados con efecto de rebote */}
        <div className="flex justify-center space-x-4 mb-8">
          {[0, 1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`h-4 w-4 rounded-full animate-bounce ${
                currentStatus.color === 'yellow' ? 'bg-yellow-500' :
                currentStatus.color === 'green' ? 'bg-green-500' :
                currentStatus.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2.5s'
              }}
              aria-hidden="true"
            ></div>
          ))}
        </div>
        
        {/* Mensajes adicionales según el estado */}
        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          {connectionStatus === 'disconnected' ? (
            <>
              <p>⚡ Reconexión automática en progreso...</p>
              <p>🔧 Verificando configuración de red</p>
            </>
          ) : (
            <>
              <p>⏳ Esto puede tomar unos segundos</p>
              <p>📊 Preparando visualización de datos</p>
            </>
          )}
        </div>
      </div>
      
      {/* Estilos CSS para animaciones personalizadas */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 3s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }

        @keyframes progress {
          0% { width: 10%; }
          50% { width: 65%; }
          100% { width: 10%; }
        }
        .animate-progress {
          animation: progress 3s infinite ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner