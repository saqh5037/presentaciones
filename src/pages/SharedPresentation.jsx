import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, Lock, Loader2 } from 'lucide-react'
import { validateTokenAsync, getSessionToken } from '../services/tokenService'
import { presentations } from '../data/presentations'

// Import presentations
import LabsisExpertPresentation from '../presentations/labsis-expert/LabsisExpertPresentation'
import EtiquetasBernardo from '../presentations/etiquetas-bernardo/EtiquetasBernardo'
import MusiKickoffPresentation from '../presentations/musi-kickoff/MusiKickoffPresentation'
import DynamtekPresentation from '../presentations/dynamtek/DynamtekPresentation'

function SharedPresentation() {
  const { token } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [presentation, setPresentation] = useState(null)

  useEffect(() => {
    const validateAndLoad = async () => {
      setLoading(true)
      
      // First check session tokens (for newly created tokens)
      let presentationId = null;
      const sessionToken = getSessionToken(token);
      
      if (sessionToken) {
        presentationId = sessionToken.presentationId;
      } else {
        // Then check persistent tokens from JSON file
        presentationId = await validateTokenAsync(token);
      }
      
      if (!presentationId) {
        setError('Este enlace no es válido o ha expirado')
        setLoading(false)
        return
      }

      // Find presentation
      const pres = presentations.find(p => p.id === presentationId)
      
      if (!pres) {
        setError('La presentación no está disponible')
        setLoading(false)
        return
      }

      setPresentation(pres)
      setLoading(false)
    }

    validateAndLoad()
  }, [token])

  // Component mapping
  const getPresentationComponent = () => {
    if (!presentation) return null

    const componentMap = {
      'labsis-expert': LabsisExpertPresentation,
      'etiquetas-bernardo': EtiquetasBernardo,
      'musi-kickoff': MusiKickoffPresentation,
      'dynamtek-centro-mando': DynamtekPresentation
    }

    const Component = componentMap[presentation.id]
    return Component ? <Component /> : null
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 size={50} color="white" />
        </motion.div>
        <p style={{ color: 'white', marginTop: '20px', fontSize: '1.2rem' }}>
          Cargando presentación...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            background: '#ff6b6b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <AlertCircle size={40} color="white" />
          </div>
          
          <h2 style={{ color: '#333', marginBottom: '10px' }}>
            Enlace No Válido
          </h2>
          
          <p style={{ color: '#666', marginBottom: '20px', fontSize: '1.1rem' }}>
            {error}
          </p>
          
          <p style={{ color: '#999', fontSize: '0.9rem' }}>
            Por favor, verifica el enlace con la persona que te lo compartió.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Shared Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.9rem',
          zIndex: 100,
          backdropFilter: 'blur(10px)'
        }}
      >
        <Lock size={16} />
        Vista Compartida - Solo Lectura
      </motion.div>

      {/* Render the presentation */}
      {getPresentationComponent()}
    </div>
  )
}

export default SharedPresentation