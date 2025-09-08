import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DollarSign, Users, Clock, TrendingUp, Calculator } from 'lucide-react'

function Slide7() {
  const [investment, setInvestment] = useState(0)
  const [hoursSaved, setHoursSaved] = useState(0)
  const [weeklyValue, setWeeklyValue] = useState(0)
  const [monthlyReturn, setMonthlyReturn] = useState(0)
  const [roi, setRoi] = useState(0)

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setInvestment(prev => prev < 200 ? prev + 4 : 200)
      setHoursSaved(prev => prev < 200 ? prev + 4 : 200)
      setWeeklyValue(prev => prev < 10000 ? prev + 200 : 10000)
      setMonthlyReturn(prev => prev < 40000 ? prev + 800 : 40000)
      setRoi(prev => prev < 20000 ? prev + 400 : 20000)
    }, 50)

    return () => clearInterval(interval)
  }, [])

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ fontSize: '2.5rem' }}
            >
              <Calculator size={30} color="#ffd89b" />
            </motion.span>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Tu ROI Personal</h1>
          </div>
        </motion.div>

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
          La inversión que se paga sola
        </motion.p>

        {/* Calculator Interface */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px',
          marginBottom: '25px',
          maxWidth: '1200px',
          margin: '0 auto 25px auto'
        }}>
          {/* Investment Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '3px solid #60a5fa',
              borderRadius: '20px',
              padding: '20px',
              height: '100%'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <motion.span
                  animate={{
                    rotate: [0, 20, -20, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ fontSize: '2rem' }}
                >
                  <DollarSign size={30} color="#ffd89b" />
                </motion.span>
                <h2 style={{
                  fontSize: '1.4rem',
                  color: '#60a5fa',
                  fontWeight: '700',
                  margin: 0
                }}>
                  INVERSIÓN
                </h2>
              </div>

              {/* Team Size */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ fontSize: '1.2rem' }}
                    >
                      <Users size={20} color="#ffb347" />
                    </motion.span>
                    <span style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>Equipo WBI</span>
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffd89b' }}>10 devs</span>
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.85rem' }}>
                  Franco, Diego, Juan Camilo, Ricardo, Cristina, Roberto + 4 más
                </div>
              </div>

              {/* Cost per dev */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ color: '#e0e0e0' }}>Costo por desarrollador</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffd89b' }}>$20/mes</span>
                </div>
                <div style={{
                  height: '8px',
                  background: 'rgba(96, 165, 250, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(96, 165, 250, 0.3)'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)'
                    }}
                  />
                </div>
              </div>

              {/* Total Investment */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  border: '2px solid #60a5fa',
                  borderRadius: '15px',
                  padding: '15px',
                  textAlign: 'center'
                }}
              >
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '10px' }}>
                  TOTAL MENSUAL
                </p>
                <p style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#60a5fa',
                  margin: '10px 0'
                }}>
                  ${Math.round(investment)}
                </p>
                <p style={{ color: '#ffb347', fontSize: '1rem' }}>
                  = $2,400 anual
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Return Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%)',
              border: '3px solid #4ade80',
              borderRadius: '20px',
              padding: '20px',
              height: '100%'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <motion.span
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ fontSize: '2rem' }}
                >
                  <TrendingUp size={30} color="#4ade80" />
                </motion.span>
                <h2 style={{
                  fontSize: '1.4rem',
                  color: '#4ade80',
                  fontWeight: '700',
                  margin: 0
                }}>
                  RETORNO
                </h2>
              </div>

              {/* Productivity Increase */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ color: '#e0e0e0' }}>Productividad aumentada</span>
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#4ade80'
                    }}
                  >
                    250%
                  </motion.span>
                </div>
              </div>

              {/* Hours Saved */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <motion.span
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ fontSize: '1.2rem' }}
                    >
                      <Clock size={20} color="#ffb347" />
                    </motion.span>
                    <span style={{ color: '#e0e0e0' }}>Horas ahorradas</span>
                  </div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffd89b' }}>
                    {Math.round(hoursSaved)} hrs/sem
                  </span>
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.85rem' }}>
                  20 hrs × 10 devs = 200 hrs/semana
                </div>
              </div>

              {/* Weekly Value */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#e0e0e0' }}>Valor semanal</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#4ade80' }}>
                    ${Math.round(weeklyValue).toLocaleString()}
                  </span>
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.85rem' }}>
                  200 hrs × $50/hr = $10,000/semana
                </div>
              </div>

              {/* Monthly Return */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  border: '2px solid #4ade80',
                  borderRadius: '15px',
                  padding: '15px',
                  textAlign: 'center'
                }}
              >
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '10px' }}>
                  RETORNO MENSUAL
                </p>
                <p style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#4ade80',
                  margin: '10px 0'
                }}>
                  ${Math.round(monthlyReturn).toLocaleString()}
                </p>
                <p style={{ color: '#ffb347', fontSize: '1rem' }}>
                  = 5 devs extra gratis
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ROI Result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            padding: '20px 40px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#e0e0e0',
              marginBottom: '20px'
            }}>
              RETURN ON INVESTMENT
            </p>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px'
              }}
            >
              {Math.round(roi).toLocaleString()}% ROI
            </motion.div>
            <p style={{
              fontSize: '1.1rem',
              color: '#e0e0e0',
              marginBottom: '15px'
            }}>
              Por cada $1 invertido → recuperas $
              <span style={{ color: '#4ade80', fontWeight: '700' }}>200</span>
            </p>
            
            {/* Bonus note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              style={{
                background: 'rgba(147, 51, 234, 0.15)',
                border: '2px solid #9333ea',
                borderRadius: '15px',
                padding: '15px 25px',
                marginTop: '20px'
              }}
            >
              <p style={{
                fontSize: '1.1rem',
                color: '#e0e0e0'
              }}>
Con 15 licencias, es como tener{" "}
                <span style={{ fontWeight: '700', color: '#c084fc' }}>30 desarrolladores</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide7