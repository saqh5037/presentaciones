import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ children, requireAdmin = false, presentationId = null }) {
  const { isAuthenticated, isAdmin, canAccessPresentation } = useAuth()
  const location = useLocation()

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Si requiere admin y no lo es
  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />
  }

  // Si es una presentación específica, verificar acceso
  if (presentationId && !canAccessPresentation(presentationId)) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
      }}>
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#e91e63', marginBottom: '1rem' }}>
            Acceso Denegado
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            No tienes permisos para ver esta presentación.
          </p>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Volver
          </button>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute