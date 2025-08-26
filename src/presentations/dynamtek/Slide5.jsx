import { motion } from 'framer-motion'
import { Building2, Award, Zap, CheckCircle } from 'lucide-react'

function Slide5() {
  const cases = [
    {
      company: 'MAYO CLINIC LABORATORIES',
      icon: Building2,
      stats: [
        { value: '52M', label: 'Muestras Anuales' },
        { value: '2X', label: 'Rendimiento Duplicado' },
        { value: '6,000/hr', label: 'Capacidad Actual' }
      ],
      achievement: 'Cero errores de clasificación post-implementación',
      sources: '[AAPL, Design World Online]'
    },
    {
      company: 'QUEST DIAGNOSTICS',
      icon: Award,
      stats: [
        { value: '114%', label: 'ROI Proyectado' },
        { value: 'TOP 1', label: 'Servicio al Cliente' },
        { value: '100%', label: 'Digital Integration' }
      ],
      achievement: 'Transformaron su servicio centralizando operaciones',
      sources: '[Quest Diagnostics, WalkMe]'
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
          El Modelo a Seguir:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '2.5rem', 
            color: '#ffd89b',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          Así lo Hacen los Gigantes
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
          No Estamos Inventando, Estamos Adaptando la Excelencia
        </motion.p>

        {/* Case Studies */}
        {cases.map((caseStudy, caseIndex) => {
          const Icon = caseStudy.icon
          return (
            <motion.div
              key={caseIndex}
              initial={{ opacity: 0, x: caseIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + caseIndex * 0.3, duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                border: '2px solid rgba(255, 216, 155, 0.3)',
                borderRadius: '25px',
                padding: '40px',
                marginBottom: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: -100,
                  right: caseIndex % 2 === 0 ? -100 : 'auto',
                  left: caseIndex % 2 === 0 ? 'auto' : -100,
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(255, 216, 155, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Company Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={35} color="#1a1a2e" />
                  </motion.div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    color: '#ffd89b',
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    {caseStudy.company}
                  </h3>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  {caseStudy.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 1.2 + caseIndex * 0.3 + statIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      style={{
                        textAlign: 'center',
                        padding: '15px',
                        background: 'rgba(255, 216, 155, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 216, 155, 0.2)'
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#b0b0b0',
                        marginTop: '5px'
                      }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + caseIndex * 0.3, duration: 0.6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '20px',
                    background: 'rgba(255, 216, 155, 0.08)',
                    borderRadius: '15px',
                    marginBottom: '15px'
                  }}
                >
                  <CheckCircle size={24} color="#4ade80" />
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    margin: 0
                  }}>
                    {caseStudy.achievement}
                  </p>
                </motion.div>

                {/* Sources */}
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  fontStyle: 'italic',
                  textAlign: 'right'
                }}>
                  {caseStudy.sources}
                </p>
              </div>
            </motion.div>
          )
        })}

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <Zap size={40} color="#ffd89b" style={{ marginBottom: '20px' }} />
          <p style={{
            fontSize: '1.3rem',
            color: '#ffd89b',
            fontWeight: '600'
          }}>
            El éxito está documentado. La metodología está probada.
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#b0b0b0',
            marginTop: '10px'
          }}>
            Es momento de unirnos a los líderes del sector
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide5