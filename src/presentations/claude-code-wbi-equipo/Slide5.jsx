import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Calendar, Code, Bug, FileText, Rocket, TrendingDown } from 'lucide-react'

function Slide5() {
  const [showComparison, setShowComparison] = useState(false)
  const [timeWithout, setTimeWithout] = useState(0)
  const [timeWith, setTimeWith] = useState(0)

  useEffect(() => {
    setTimeout(() => setShowComparison(true), 500)
    
    // Animate time counters
    const interval = setInterval(() => {
      setTimeWithout(prev => prev < 12 ? prev + 0.2 : 12)
      setTimeWith(prev => prev < 3 ? prev + 0.05 : 3)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const phasesWithout = [
    { title: "Setup inicial", time: "2 semanas", icon: Calendar },
    { title: "Desarrollo core", time: "6 semanas", icon: Code },
    { title: "Testing y bugs", time: "3 semanas", icon: Bug },
    { title: "Documentación", time: "1 semana", icon: FileText }
  ]

  const phasesWith = [
    { title: "Setup + boilerplate", time: "2 días", icon: Rocket },
    { title: "Desarrollo completo", time: "2 semanas", icon: TrendingDown },
    { title: "Tests automatizados", time: "3 días", icon: Bug },
    { title: "Docs generadas", time: "2 días", icon: FileText }
  ]

  return (
    <div className="claude-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1400px' }}
      >
        {/* Background Particles Effect */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '10px', fontSize: '2.8rem' }}
        >
          Tu Caso Real: Proyecto FIFCO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '25px',
            textAlign: 'center'
          }}
        >
          "Si hubieras tenido Claude Code en FIFCO..."
        </motion.p>

        {showComparison && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '20px',
            width: '100%'
          }}>
            {/* Without Claude Code */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 71, 71, 0.08) 100%)',
                border: '3px solid #ff6b6b',
                borderRadius: '20px',
                padding: '15px',
                position: 'relative',
                width: '600px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#ff6b6b',
                    fontWeight: '700'
                  }}>
                    SIN CLAUDE CODE
                  </h3>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, -20, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ fontSize: '2rem' }}
                    >
                      <TrendingDown size={32} color="#ff6b6b" />
                    </motion.span>
                  </motion.div>
                </div>

                {/* Timeline */}
                <div style={{ marginBottom: '15px' }}>
                  {phasesWithout.map((phase, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '10px'
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255, 107, 107, 0.2)',
                          border: '2px solid #ff6b6b',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <motion.span
                            animate={{
                              rotate: [0, -10, 10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{ fontSize: '1.5rem' }}
                          >
                            <phase.icon size={20} color="#ff6b6b" />
                          </motion.span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ 
                            fontSize: '1rem',
                            color: '#e0e0e0',
                            marginBottom: '2px'
                          }}>
                            {phase.title}
                          </p>
                          <p style={{ 
                            fontSize: '0.9rem',
                            color: '#ff6b6b',
                            fontWeight: '600'
                          }}>
                            {phase.time}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Total Time */}
                <div style={{
                  background: 'rgba(255, 107, 107, 0.2)',
                  border: '2px solid #ff6b6b',
                  borderRadius: '12px',
                  padding: '10px',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '0.8rem',
                    color: '#b0b0b0',
                    marginBottom: '6px'
                  }}>
                    TIEMPO TOTAL
                  </p>
                  <motion.p
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      color: '#ff6b6b'
                    }}
                  >
                    {Math.round(timeWithout)} semanas
                  </motion.p>
                  <p style={{ 
                    fontSize: '1rem',
                    color: '#ffb347',
                    marginTop: '10px'
                  }}>
                    = 3 meses completos
                  </p>
                </div>
              </div>
            </motion.div>

            {/* With Claude Code */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                border: '3px solid #ffd89b',
                borderRadius: '20px',
                padding: '15px',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)',
                width: '600px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#ffd89b',
                    fontWeight: '700'
                  }}>
                    CON CLAUDE CODE
                  </h3>
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ fontSize: '2rem' }}
                    >
                      <Rocket size={32} color="#ffd89b" />
                    </motion.span>
                  </motion.div>
                </div>

                {/* Timeline */}
                <div style={{ marginBottom: '15px' }}>
                  {phasesWith.map((phase, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '10px'
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.3) 0%, rgba(255, 179, 71, 0.15) 100%)',
                          border: '2px solid #ffd89b',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <motion.span
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{ fontSize: '1.5rem' }}
                          >
                            <phase.icon size={20} color="#ffd89b" />
                          </motion.span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ 
                            fontSize: '1rem',
                            color: '#e0e0e0',
                            marginBottom: '2px'
                          }}>
                            {phase.title}
                          </p>
                          <p style={{ 
                            fontSize: '0.9rem',
                            color: '#4ade80',
                            fontWeight: '600'
                          }}>
                            {phase.time}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Total Time */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  border: '3px solid #4ade80',
                  borderRadius: '12px',
                  padding: '10px',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '0.8rem',
                    color: '#b0b0b0',
                    marginBottom: '6px'
                  }}>
                    TIEMPO TOTAL
                  </p>
                  <motion.p
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {Math.round(timeWith)} semanas
                  </motion.p>
                  <p style={{ 
                    fontSize: '1rem',
                    color: '#4ade80',
                    marginTop: '10px',
                    fontWeight: '600'
                  }}>
                    ¡Solo 21 días!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            padding: '12px 30px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#ffd89b',
                marginBottom: '15px'
              }}
            >
              70% menos tiempo = Más proyectos = Más revenue
            </motion.p>
            <p style={{
              fontSize: '1.1rem',
              color: '#e0e0e0'
            }}>
              Con Claude Code, FIFCO habría estado listo en{" "}
              <span style={{ color: '#4ade80', fontWeight: '700' }}>3 semanas</span> en lugar de{" "}
              <span style={{ color: '#ff6b6b', fontWeight: '700' }}>3 meses</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide5