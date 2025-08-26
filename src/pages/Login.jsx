import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, User, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  // Obtener la ruta de donde venía el usuario
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login(username, password)
    
    if (result.success) {
      // Obtener el usuario recién autenticado
      const session = JSON.parse(localStorage.getItem('current_session'))
      
      // Lógica de redirección según el tipo de usuario
      if (session.role === 'admin') {
        // Admin siempre va al dashboard
        navigate('/', { replace: true })
      } else {
        // Para usuarios normales, verificar cantidad de presentaciones
        const allowedPresentations = session.allowedPresentations
        
        if (Array.isArray(allowedPresentations) && allowedPresentations.length === 1) {
          // Si tiene solo una presentación, ir directo a ella
          const presentationId = allowedPresentations[0]
          navigate(`/presentation/${presentationId}`, { replace: true })
        } else {
          // Si tiene más de una presentación o acceso a todas, ir al dashboard
          navigate('/', { replace: true })
        }
      }
    } else {
      setError(result.error || 'Error al iniciar sesión')
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shape login-shape-1"></div>
        <div className="login-shape login-shape-2"></div>
        <div className="login-shape login-shape-3"></div>
      </div>

      <motion.div 
        className="login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-header">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="login-icon"
          >
            <Lock size={40} />
          </motion.div>
          <h1>Iniciar Sesión</h1>
          <p>Centro de Presentaciones</p>
        </div>

        {error && (
          <motion.div 
            className="login-error"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AlertCircle size={20} />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <div className="input-wrapper">
              <User size={20} className="input-icon" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="login-button"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <span>Iniciando sesión...</span>
            ) : (
              <>
                <LogIn size={20} />
                <span>Iniciar Sesión</span>
              </>
            )}
          </motion.button>
        </form>

        <div className="login-footer">
          <p>© 2025 Centro de Presentaciones - Sistema Seguro</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login