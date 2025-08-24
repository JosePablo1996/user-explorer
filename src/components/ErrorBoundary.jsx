import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el próximo renderizado muestre la UI de fallback
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de fallback personalizada
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
          <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-6 rounded-lg shadow-md max-w-lg w-full animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-2">¡Algo salió mal!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hemos detectado un error. Por favor, intenta de nuevo más tarde o contacta al soporte técnico.
            </p>
            <details className="mt-4 text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
              <summary className="font-semibold">Detalles del Error</summary>
              <pre className="mt-2 p-3 bg-red-100 dark:bg-red-800 rounded-lg text-xs overflow-auto whitespace-pre-wrap break-all">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
