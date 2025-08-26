import { motion } from 'framer-motion'
import { MapPin, Target, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'

function Slide7() {
  const phases = [
    {
      phase: 'Fase 1',
      title: 'Descubrimiento Estratégico',
      description: 'Alinear la visión y definir el éxito',
      duration: '2 semanas',
      icon: MapPin
    },
    {
      phase: 'Fase 2',
      title: 'Integración de Datos',
      description: 'Conectar las arterias de información',
      duration: '4 semanas',
      icon: Target
    },
    {
      phase: 'Fase 3',
      title: 'Desarrollo de Dashboards',
      description: 'Construir nuestro centro de mando',
      duration: '6 semanas',
      icon: Rocket
    },
    {
      phase: 'Fase 4',
      title: 'Lanzamiento Piloto',
      description: 'Probar, aprender y perfeccionar',
      duration: '4 semanas',
      icon: CheckCircle2
    },
    {
      phase: 'Fase 5',
      title: 'Despliegue Total',
      description: 'Extender la inteligencia a toda la organización',
      duration: '2 semanas',
      icon: ArrowRight
    }
  ]

  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1100px' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestra Ruta Hacia la Transformación:
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
          Un Camino Claro, por Fases, Hacia el Liderazgo
        </motion.h2>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Timeline Line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline Items */}
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 1 + index * 0.2, 
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Timeline Content */}
                <motion.div
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={24} color="#1a1a2e" />
                    </motion.div>
                    <div>
                      <div className="timeline-phase">{phase.phase}</div>
                      <div style={{ 
                        fontSize: '0.85rem', 
                        color: '#666',
                        marginTop: '2px'
                      }}>
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                  <h4 className="timeline-title">{phase.title}</h4>
                  <p className="timeline-description">{phase.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginTop: '60px',
            marginBottom: '40px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              18
            </div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Semanas Total</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              5
            </div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Fases Claras</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              100%
            </div>
            <div style={{ color: '#b0b0b0', fontSize: '1rem' }}>Metodología Ágil</div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="quote-block"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <p className="quote-text">
            "Nuestra metodología ágil garantiza resultados visibles en cada etapa, 
            minimizando riesgos y maximizando el impacto"
          </p>
          <p style={{ 
            color: '#ffd89b', 
            fontSize: '1rem',
            marginTop: '15px'
          }}>
            Cada fase construye sobre la anterior, creando momentum hacia el éxito
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide7