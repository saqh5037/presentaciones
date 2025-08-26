// Servicio de autenticación que se conecta con la API de usuarios
import { API_URL } from '../config/api.config'

// Login de usuario
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al iniciar sesión')
    }
    
    // Guardar sesión en localStorage para mantener compatibilidad
    localStorage.setItem('current_session', JSON.stringify(data.session))
    
    return data.session
  } catch (error) {
    throw error
  }
}

// Logout de usuario
export const logout = () => {
  localStorage.removeItem('current_session')
}

// Obtener sesión actual
export const getCurrentSession = () => {
  const session = localStorage.getItem('current_session')
  return session ? JSON.parse(session) : null
}

// Verificar si está autenticado
export const isAuthenticated = () => {
  return !!getCurrentSession()
}

// Verificar si es admin
export const isAdmin = () => {
  const session = getCurrentSession()
  return session?.role === 'admin'
}

// Verificar acceso a presentación
export const hasAccessToPresentation = (presentationId) => {
  const session = getCurrentSession()
  if (!session) return false
  
  // Admin tiene acceso a todo
  if (session.role === 'admin') return true
  
  // Verificar si tiene acceso a todas las presentaciones
  if (session.allowedPresentations === 'all') return true
  
  // Verificar si tiene acceso específico
  return session.allowedPresentations?.includes(presentationId)
}

// Obtener presentaciones permitidas
export const getAllowedPresentations = () => {
  const session = getCurrentSession()
  if (!session) return []
  
  return session.allowedPresentations || []
}

// ==================== USER MANAGEMENT ====================

// Obtener todos los usuarios
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`)
    
    if (!response.ok) {
      throw new Error('Error al obtener usuarios')
    }
    
    return await response.json()
  } catch (error) {
    throw error
  }
}

// Obtener un usuario
export const getUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`)
    
    if (!response.ok) {
      throw new Error('Error al obtener usuario')
    }
    
    return await response.json()
  } catch (error) {
    throw error
  }
}

// Crear usuario
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al crear usuario')
    }
    
    return data
  } catch (error) {
    throw error
  }
}

// Actualizar usuario
export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al actualizar usuario')
    }
    
    return data
  } catch (error) {
    throw error
  }
}

// Cambiar contraseña
export const changePassword = async (id, password) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al cambiar contraseña')
    }
    
    return data
  } catch (error) {
    throw error
  }
}

// Eliminar usuario
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE'
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al eliminar usuario')
    }
    
    return data
  } catch (error) {
    throw error
  }
}