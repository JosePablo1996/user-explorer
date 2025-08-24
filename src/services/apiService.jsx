// src/services/apiService.jsx
// Este servicio se encarga de realizar todas las llamadas a la API de la aplicación.
// La lógica de fetch y manejo de errores se centraliza aquí para un código más limpio.

/**
 * Fetches user data from the API.
 * @returns {Promise<Array>} A promise that resolves with an array of user objects.
 * @throws {Error} Throws an error if the network response is not ok.
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      // If the response is not successful, throw a new error with a descriptive message
      throw new Error(`Error en la red: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Re-throw the error so it can be caught in the component
    console.error("Error fetching users:", error);
    throw error;
  }
};
