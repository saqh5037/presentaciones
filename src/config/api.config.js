// Configuración de la API

export const getApiUrl = () => {
  // Usar el proxy de Vite - simplemente usar /api
  // Vite se encargará de redirigir al servidor correcto
  return '/api'
}

export const API_URL = getApiUrl()

// Función para verificar si la API está disponible
export const checkApiConnection = async () => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'GET',
      mode: 'cors'
    })
    return response.ok
  } catch (error) {
    console.error('API connection error:', error)
    return false
  }
}