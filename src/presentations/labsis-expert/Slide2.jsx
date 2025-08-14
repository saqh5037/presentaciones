import { motion } from 'framer-motion'
import { Clock, FileStack, TrendingUp, AlertCircle } from 'lucide-react'

function Slide2() {
  const challenges = [
    {
      icon: TrendingUp,
      title: 'Mayor Volumen de Muestras',
      description: 'La demanda de análisis no deja de crecer.',
      color: '#ff6b6b'
    },
    {
      icon: Clock,
      title: 'Presión por la Rapidez',
      description: 'Necesitamos entregar resultados confiables en menos tiempo.',
      color: '#4ecdc4'
    },
    {
      icon: FileStack,
      title: 'Validación Manual',
      description: 'Un proceso crítico pero repetitivo que consume tiempo valioso.',
      color: '#ffd93d'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="slide">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        El Desafío Actual
      </motion.h2>

      <motion.div 
        className="icons-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon
          return (
            <motion.div 
              key={index}
              className="icon-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: index === 0 ? [0, 5, -5, 0] : 0,
                  scale: index === 1 ? [1, 1.1, 1] : 1,
                  y: index === 2 ? [0, -5, 0] : 0
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Icon size={60} color={challenge.color} />
              </motion.div>
              <h3 style={{ color: challenge.color }}>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ 
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}
      >
        <AlertCircle size={30} color="#ffd89b" style={{ marginBottom: '10px' }} />
        <p style={{ fontSize: '1.3rem', color: '#ffd89b' }}>
          <strong>Nuestra labor más importante es la interpretación,</strong>
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          no la revisión rutinaria.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide2