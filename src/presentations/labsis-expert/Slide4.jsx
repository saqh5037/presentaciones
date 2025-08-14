import { motion } from 'framer-motion'
import { Rocket, Brain, Shield, Target } from 'lucide-react'

function Slide4() {
  const benefits = [
    {
      icon: Rocket,
      title: 'MÁS EFICIENCIA',
      description: 'Reduce drásticamente el tiempo de validación manual. Entrega de resultados más rápida.',
      color: '#ff6b6b',
      delay: 0.2
    },
    {
      icon: Brain,
      title: 'MÁS ENFOQUE',
      description: 'Dedica tu tiempo a casos complejos, investigación y mejora de calidad.',
      color: '#4ecdc4',
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'MAYOR SEGURIDAD',
      description: 'Minimiza el riesgo de errores humanos al analizar miles de datos en segundos.',
      color: '#95e1d3',
      delay: 0.6
    },
    {
      icon: Target,
      title: 'MAYOR PRECISIÓN',
      description: 'Identifica patrones sutiles que el ojo humano podría pasar por alto.',
      color: '#ffd93d',
      delay: 0.8
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Beneficios Clave para TI
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '30px',
        margin: '40px 0'
      }}>
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={index}
              className="icon-card"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: benefit.delay, duration: 0.5, type: 'spring' }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  delay: benefit.delay + 0.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <Icon size={60} color={benefit.color} />
              </motion.div>
              <h3 style={{ color: benefit.color, marginTop: '20px' }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: '1rem' }}>
                {benefit.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ 
          marginTop: '40px',
          padding: '25px',
          background: 'linear-gradient(135deg, rgba(255,216,155,0.1) 0%, rgba(25,84,123,0.1) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(255,216,155,0.3)'
        }}
      >
        <motion.p 
          style={{ 
            fontSize: '1.4rem', 
            color: '#ffd89b',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Menos tiempo en lo repetitivo, más tiempo en la ciencia.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Slide4