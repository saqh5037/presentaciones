import { motion } from 'framer-motion'
import { Search, GitCompare, TrendingUp, CheckCircle } from 'lucide-react'

function Slide5() {
  const validationSteps = [
    {
      icon: Search,
      title: 'Análisis Completo (Multivariado)',
      points: [
        'Revisa el conjunto de pruebas del paciente, no solo resultados aislados.',
        'Busca coherencia entre diferentes analitos (ej. hemograma y química).',
        'Precisión de detección > 85%'
      ],
      color: '#667eea'
    },
    {
      icon: GitCompare,
      title: 'Comparación Histórica (Delta Check)',
      points: [
        'Compara los resultados actuales con los previos del mismo paciente.',
        'Alerta sobre cambios biológicamente improbables.',
        'Sensibilidad > 92% para detectar errores de muestra.'
      ],
      color: '#764ba2'
    },
    {
      icon: TrendingUp,
      title: 'Detección de Patrones Inusuales',
      points: [
        'Aprende cómo son los resultados "normales".',
        'Identifica combinaciones raras o atípicas, incluso si los valores individuales están en rango.'
      ],
      color: '#ffd89b'
    }
  ]

  return (
    <div className="slide" style={{ maxHeight: '100vh', overflowY: 'auto', paddingBottom: '50px' }}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '2rem', marginBottom: '20px' }}
      >
        ¿Cómo Funciona el Motor de Validación?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginBottom: '20px', fontSize: '1rem' }}
      >
        Nuestro sistema analiza cada resultado con una triple verificación:
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {validationSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={index}
              className="feature-box"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Icon size={50} color={step.color} />
                </motion.div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: step.color, 
                    marginBottom: '15px',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                    fontSize: '1.3rem'
                  }}>
                    {step.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {step.points.map((point, pIndex) => (
                      <motion.li
                        key={pIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + pIndex * 0.1 }}
                        style={{ 
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}
                      >
                        <CheckCircle size={20} color="#4caf50" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ 
                          fontSize: '1.05rem',
                          color: 'rgba(255, 255, 255, 0.95)',
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                          lineHeight: '1.5'
                        }}>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Animated Performance Meters */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          marginTop: '20px',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          minHeight: '180px'
        }}
      >
        {/* Precisión Meter */}
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              border: '3px solid #4caf50',
              boxShadow: '0 5px 15px rgba(76, 175, 80, 0.3)'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50%',
                border: '4px solid transparent',
                borderTopColor: '#4caf50',
                borderRightColor: '#4caf50',
                borderBottomColor: '#4caf50'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              color: '#4caf50',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
              zIndex: 1
            }}>
              85%
            </span>
          </div>
          <p style={{ 
            marginTop: '10px', 
            fontSize: '1rem',
            color: '#4caf50',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'
          }}>
            Precisión
          </p>
        </motion.div>

        {/* Sensibilidad Meter */}
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              border: '3px solid #ffd89b',
              boxShadow: '0 5px 15px rgba(255, 216, 155, 0.3)'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50%',
                border: '4px solid transparent',
                borderTopColor: '#ffd89b',
                borderRightColor: '#ffd89b',
                borderBottomColor: '#ffd89b',
                borderLeftColor: '#ffd89b'
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              color: '#ffd89b',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
              zIndex: 1
            }}>
              92%
            </span>
          </div>
          <p style={{ 
            marginTop: '10px', 
            fontSize: '1rem',
            color: '#ffd89b',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'
          }}>
            Sensibilidad
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide5