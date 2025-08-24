import { useState, useEffect } from 'react';

const ErrorMessage = ({ error, onRetry, connectionStatus = 'disconnected', retryCount = 0 }) => {
  const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);

  // Efecto para el contador automático
  useEffect(() => {
    if (isCounting && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isCounting && countdown === 0) {
      setIsCounting(false);
      setCountdown(5);
      onRetry?.();
    }
  }, [isCounting, countdown, onRetry]);

  const handleAutoRetry = () => {
    setIsCounting(true);
    setCountdown(5);
  };

  const handleCancelAutoRetry = () => {
    setIsCounting(false);
    setCountdown(5);
  };

  // Textos según el estado de conexión
  const statusConfig = {
    disconnected: {
      title: "Problemas de conexión",
      icon: "📶",
      color: "red",
      description: "No se pudo establecer conexión con el servidor"
    },
    checking: {
      title: "Verificando conexión",
      icon: "🔍",
      color: "yellow",
      description: "Estamos intentando reconectar"
    },
    connected: {
      title: "Error inesperado",
      icon: "⚠️",
      color: "blue",
      description: "Ocurrió un error al procesar los datos"
    }
  };

  const config = statusConfig[connectionStatus] || statusConfig.disconnected;
  const colorClasses = {
    red: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-200 dark:border-red-700',
      button: 'bg-red-600 hover:bg-red-700'
    },
    yellow: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/20',
      text: 'text-yellow-600 dark:text-yellow-400',
      border: 'border-yellow-200 dark:border-yellow-700',
      button: 'bg-yellow-600 hover:bg-yellow-700'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700'
    }
  };

  const currentColor = colorClasses[config.color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/70 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-md w-full mx-4">
        {/* Icono de estado */}
        <div className={`inline-flex items-center justify-center w-20 h-20 ${currentColor.bg} ${currentColor.text} rounded-full mb-6 transition-colors`}>
          <span className="text-3xl">{config.icon}</span>
        </div>
        
        {/* Título y descripción */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {config.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {config.description}
        </p>
        
        {/* Mensaje de error específico */}
        <div className={`p-4 mb-6 rounded-lg ${currentColor.bg} ${currentColor.border} border`}>
          <p className={`text-sm ${currentColor.text} font-medium`}>
            {error || "Error desconocido"}
          </p>
        </div>

        {/* Contador de reintentos */}
        {retryCount > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Intentos de reconexión: <span className="font-semibold">{retryCount}</span>
            </p>
          </div>
        )}

        {/* Estado de conexión */}
        <div className="mb-6">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${currentColor.bg} ${currentColor.text}`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              connectionStatus === 'connected' ? 'bg-green-400' :
              connectionStatus === 'checking' ? 'bg-yellow-400 animate-pulse' :
              'bg-red-400'
            }`}></div>
            Estado: {connectionStatus}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          {/* Botón de reintento manual */}
          <button 
            onClick={onRetry}
            disabled={isCounting}
            className={`w-full ${currentColor.button} text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reintentar ahora
            </span>
          </button>
          
          {/* Botón de reintento automático */}
          {!isCounting ? (
            <button 
              onClick={handleAutoRetry}
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Reintento automático
              </span>
            </button>
          ) : (
            <button 
              onClick={handleCancelAutoRetry}
              className="w-full border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 px-6 py-3 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors font-medium"
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Cancelar ({countdown}s)
              </span>
            </button>
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            💡 Si el problema persiste, verifica tu conexión a internet
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;