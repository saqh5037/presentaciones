import { motion } from 'framer-motion'
import { Rocket, Clock, Target, TrendingUp } from 'lucide-react'

function Slide4() {
  const impacts = [
    {
      icon: '🚀',
      percentage: '+20-50%',
      title: 'Eficiencia Operativa',
      description: 'Procese más muestras con los mismos recursos',
      source: '[Deloitte]'
    },
    {
      icon: '⏱️',
      percentage: '-30-50%',
      title: 'Tiempos de Respuesta (TAT)',
      description: 'Entregue resultados críticos más rápido',
      source: '[Deloitte]'
    },
    {
      icon: '🎯',
      percentage: '-60-80%',
      title: 'Tasa de Errores',
      description: 'Aumente la calidad y confiabilidad',
      source: '[Industry Report]'
    },
    {
      icon: '📈',
      percentage: '200-400%',
      title: 'Retorno sobre Inversión',
      description: 'Se paga solo en 18-24 meses',
      source: '[Deloitte, CEOHangout]'
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
          El Impacto:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '2.5rem', 
            color: '#ffd89b',
            marginBottom: '50px',
            textAlign: 'center'
          }}
        >
          La Evidencia es Contundente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: '1.3rem',
            color: '#b0b0b0',
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          Los Líderes de la Industria ya Viven en el Futuro
        </motion.p>

        {/* Impact Cards Grid */}
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="impact-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.8 + index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="impact-icon"
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  delay: 1.5 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {impact.icon}
              </motion.span>
              
              <motion.span 
                className="impact-percentage"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {impact.percentage}
              </motion.span>
              
              <h3 className="impact-title">
                {impact.title}
              </h3>
              
              <p className="impact-description">
                {impact.description}
              </p>
              
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#666',
                marginTop: '10px',
                fontStyle: 'italic'
              }}>
                {impact.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
            border: '2px solid rgba(255, 216, 155, 0.3)',
            borderRadius: '20px',
            padding: '30px',
            marginTop: '50px',
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <TrendingUp size={50} color="#ffd89b" style={{ marginBottom: '20px' }} />
          </motion.div>
          <p style={{
            fontSize: '1.4rem',
            color: '#ffffff',
            fontWeight: '600'
          }}>
            Resultados Comprobados en Laboratorios Líderes Mundiales
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#b0b0b0',
            marginTop: '15px'
          }}>
            La transformación digital no es una opción, es una necesidad competitiva
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide4