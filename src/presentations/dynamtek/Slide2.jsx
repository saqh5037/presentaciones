import { motion } from 'framer-motion'
import { AlertCircle, Eye, TrendingDown, Clock } from 'lucide-react'

function Slide2() {
  const challenges = [
    {
      icon: Eye,
      title: 'Visibilidad Limitada',
      description: 'No vemos los cuellos de botella hasta que ya es tarde. Reaccionamos a los problemas en lugar de anticiparlos.'
    },
    {
      icon: TrendingDown,
      title: 'Pérdida de Oportunidades',
      description: 'Cada ineficiencia oculta es un costo directo y una oportunidad perdida para superar a la competencia.'
    },
    {
      icon: Clock,
      title: 'El Riesgo',
      description: 'La complejidad nos está volviendo más lentos y vulnerables cuando el mercado exige más agilidad.'
    }
  ]

  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          La Barrera Invisible que Frena<br />
          Nuestro Crecimiento
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '2rem', 
            color: '#ffb347',
            marginBottom: '40px'
          }}
        >
          Operamos con Puntos Ciegos
        </motion.h2>

        {/* Main Challenge Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 100, 100, 0.1) 0%, rgba(255, 50, 50, 0.05) 100%)',
            border: '2px solid rgba(255, 100, 100, 0.3)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 150,
              height: 150,
              background: 'radial-gradient(circle, rgba(255, 100, 100, 0.2) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <AlertCircle size={60} color="#ff6b6b" style={{ marginBottom: '20px' }} />
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#ffffff', 
              marginBottom: '20px' 
            }}>
              El Desafío
            </h3>
            <p style={{
              fontSize: '1.3rem',
              color: '#e0e0e0',
              lineHeight: '1.8'
            }}>
              Gestionar más de <span style={{ 
                color: '#ffd89b', 
                fontWeight: 'bold',
                fontSize: '1.5rem' 
              }}>2 millones de órdenes anuales</span> con sistemas fragmentados 
              es como navegar un superpetrolero con un mapa dibujado a mano.
            </p>
          </div>
        </motion.div>

        {/* Challenge Cards Grid */}
        <div className="impact-grid">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={index}
                className="impact-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={50} color="#ff6b6b" style={{ marginBottom: '20px' }} />
                </motion.div>
                <h3 className="impact-title" style={{ color: '#ff6b6b' }}>
                  {challenge.title}
                </h3>
                <p className="impact-description">
                  {challenge.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="stats-container"
          style={{ marginTop: '60px' }}
        >
          <div className="stat-item">
            <span className="stat-value" style={{ color: '#ff6b6b' }}>70%</span>
            <span className="stat-label">Tiempo en Tareas Reactivas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ color: '#ff6b6b' }}>45%</span>
            <span className="stat-label">Decisiones sin Datos Completos</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ color: '#ff6b6b' }}>3X</span>
            <span className="stat-label">Más Lento que Líderes del Sector</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide2