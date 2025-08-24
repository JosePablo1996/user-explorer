// SearchBox.jsx
// Este componente de React presenta una barra de búsqueda,
// Utiliza Tailwind CSS para el estilo.
// Se ha corregido el error de 'value' sin 'onChange'.

import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm, resultsCount, totalCount }) => {
  return (
    // Contenedor principal con un ancho máximo y centrado.
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative w-full mb-6 group">
        {/* Ícono de búsqueda */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 dark:text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Campo de entrada de búsqueda */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca por nombre, ciudad o empresa..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
        />
        {/* Botón para limpiar la búsqueda si hay un término */}
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="Borrar búsqueda"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Contenedor de la notificación de resultados sin animación */}
      {resultsCount !== undefined && (
        <div className="flex justify-center text-sm mb-2">
          <div className="relative px-6 py-2 rounded-full flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg transform transition-all duration-300 hover:scale-105">
            <span role="img" aria-label="icono de búsqueda" className="mr-2 text-xl">
              {resultsCount > 0 ? '✨' : '⚠️'}
            </span>
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {resultsCount > 0 ? (
                <>
                  <span className="font-bold">{resultsCount} resultados</span>
                  {totalCount !== undefined && resultsCount !== totalCount && (
                    <span className="ml-1 text-gray-500 dark:text-gray-400">encontrados</span>
                  )}
                  {totalCount !== undefined && resultsCount === totalCount && (
                    <span className="ml-1 text-gray-500 dark:text-gray-400">mostrados en total</span>
                  )}
                </>
              ) : (
                <span className="font-bold text-red-500">No se encontraron resultados</span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
