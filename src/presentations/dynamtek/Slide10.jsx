import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Target, FileText, ArrowRight } from 'lucide-react'

function Slide10() {
  const nextSteps = [
    {
      icon: CheckCircle,
      title: 'La Petición',
      description: 'Solicitamos la luz verde para iniciar la Fase 1: Descubrimiento Estratégico',
      highlight: true
    },
    {
      icon: Calendar,
      title: 'El Objetivo',
      description: 'En 60 días, presentaremos una hoja de ruta detallada, evaluación de proveedores y caso de negocio completo',
      highlight: false
    },
    {
      icon: Target,
      title: 'La Decisión',
      description: 'Aprobemos hoy la creación del equipo que diseñará el futuro de nuestro laboratorio',
      highlight: true
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
          Próximos Pasos
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
          Demos el Primer Paso Juntos
        </motion.h2>

        {/* Next Steps Cards */}
        <div style={{ marginBottom: '50px' }}>
          {nextSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                style={{
                  background: step.highlight 
                    ? 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 216, 155, 0.08) 0%, rgba(255, 179, 71, 0.04) 100%)',
                  border: step.highlight ? '3px solid #ffd89b' : '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '20px',
                  padding: '35px',
                  marginBottom: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {step.highlight && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 150,
                      height: 150,
                      background: 'radial-gradient(circle, rgba(255, 216, 155, 0.2) 0%, transparent 70%)',
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
                )}

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '70px',
                    height: '70px',
                    background: step.highlight 
                      ? 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)'
                      : 'rgba(255, 216, 155, 0.2)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={40} color={step.highlight ? '#1a1a2e' : '#ffd89b'} />
                </motion.div>

                <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    color: '#ffd89b',
                    marginBottom: '10px',
                    fontWeight: '700'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#e0e0e0',
                    lineHeight: '1.6'
                  }}>
                    {step.description}
                  </p>
                </div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={30} color="#ffd89b" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '50px',
            padding: '30px',
            background: 'rgba(255, 216, 155, 0.05)',
            borderRadius: '20px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <FileText size={40} color="#ffd89b" style={{ marginBottom: '15px' }} />
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffd89b' }}>Hoy</div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Aprobación Inicial</div>
          </div>
          
          <motion.div
            style={{ 
              width: '200px', 
              height: '2px', 
              background: '#ffd89b',
              alignSelf: 'center'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
          
          <div style={{ textAlign: 'center' }}>
            <Calendar size={40} color="#ffd89b" style={{ marginBottom: '15px' }} />
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffd89b' }}>60 Días</div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Propuesta Completa</div>
          </div>
          
          <motion.div
            style={{ 
              width: '200px', 
              height: '2px', 
              background: '#ffd89b',
              alignSelf: 'center'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          />
          
          <div style={{ textAlign: 'center' }}>
            <Target size={40} color="#ffd89b" style={{ marginBottom: '15px' }} />
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffd89b' }}>18 Semanas</div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Transformación Total</div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="quote-block"
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <p className="quote-text" style={{ fontSize: '1.6rem' }}>
              "No estamos construyendo solo un dashboard.<br />
              Estamos construyendo el corazón de un laboratorio<br />
              más inteligente, rápido y rentable."
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="cta-section"
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciemos la Transformación
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide10