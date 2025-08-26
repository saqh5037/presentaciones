import { motion } from 'framer-motion'
import { Monitor, Eye, Brain, Zap } from 'lucide-react'

function Slide3() {
  const features = [
    {
      icon: Eye,
      title: 'Visión 360° en Vivo',
      description: 'Observe en una sola pantalla la capacidad, los tiempos de respuesta (TAT), los KPIs de calidad y el rendimiento financiero.'
    },
    {
      icon: Brain,
      title: 'De Datos a Decisiones',
      description: 'Convierte un mar de datos en inteligencia accionable, permitiendo decisiones estratégicas en minutos, no en semanas.'
    },
    {
      icon: Zap,
      title: 'Orquestación Proactiva',
      description: 'Predice picos de demanda, reasigna recursos al instante y garantiza que cada parte funcione en perfecta sincronía.'
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
          La Solución:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '3rem', 
            color: '#ffd89b',
            marginBottom: '50px',
            textAlign: 'center'
          }}
        >
          El Centro de Mando Integral
        </motion.h2>

        {/* Main Feature Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '25px',
            padding: '50px',
            marginBottom: '50px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(255, 216, 155, 0.2) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Monitor size={80} color="#ffd89b" style={{ marginBottom: '30px' }} />
            <h3 style={{ 
              fontSize: '2rem', 
              color: '#ffffff', 
              marginBottom: '25px' 
            }}>
              ¿Qué es?
            </h3>
            <p style={{
              fontSize: '1.4rem',
              color: '#e0e0e0',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Es la <span style={{ color: '#ffd89b', fontWeight: 'bold' }}>torre de control</span> de nuestra operación. 
              Una plataforma única que integra y visualiza en <span style={{ color: '#ffd89b', fontWeight: 'bold' }}>tiempo real</span> cada 
              pulso del laboratorio, desde la llegada de la muestra hasta la entrega del resultado.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="feature-icon"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={35} />
                </motion.div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <p style={{
            fontSize: '1.3rem',
            color: '#ffd89b',
            fontStyle: 'italic'
          }}>
            "Transformando complejidad en claridad, datos en decisiones"
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide3