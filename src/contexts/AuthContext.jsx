import { createContext, useState, useContext, useEffect } from 'react'
import { 
  login as authLogin, 
  logout as authLogout, 
  getCurrentSession,
  isAuthenticated as checkAuth,
  isAdmin as checkAdmin,
  hasAccessToPresentation,
  getAllowedPresentations
} from '../services/authService'

// Crear el contexto
const AuthContext = createContext(null)

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider')
  }
  return context
}

// Provider del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Cargar sesión al iniciar
  useEffect(() => {
    const session = getCurrentSession()
    if (session) {
      setUser(session)
    }
    setLoading(false)
  }, [])

  // Función de login
  const login = async (username, password) => {
    try {
      const session = await authLogin(username, password)
      setUser(session)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Función de logout
  const logout = () => {
    authLogout()
    setUser(null)
  }

  // Verificar si está autenticado
  const isAuthenticated = () => {
    return !!user
  }

  // Verificar si es admin
  const isAdmin = () => {
    return user && user.role === 'admin'
  }

  // Verificar acceso a presentación
  const canAccessPresentation = (presentationId) => {
    if (!user) return false
    return hasAccessToPresentation(presentationId)
  }

  // Obtener presentaciones permitidas
  const getUserPresentations = () => {
    if (!user) return []
    return getAllowedPresentations()
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    canAccessPresentation,
    getUserPresentations,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}