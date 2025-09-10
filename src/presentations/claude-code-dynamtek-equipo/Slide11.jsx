import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, Rocket, Target, Users, Trophy } from 'lucide-react'
import { useState, useEffect } from 'react'

function Slide11() {
  const [activeWeek, setActiveWeek] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev < 2 ? prev + 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const roadmap = [
    {
      week: "SEMANA 1",
      title: "First Track",
      icon: Rocket,
      tasks: [
        "5 devs prueban (JuanMa, Felipe, Samuel + 2)",
        "Setup inicial y training (2 hrs)",
        "Proyecto piloto: Componente FIFCO",
        "Primeras métricas de productividad"
      ],
      status: "start"
    },
    {
      week: "SEMANA 2-3",
      title: "Album Completo",
      icon: Users,
      tasks: [
        "Todo el equipo activado (10 devs)",
        "Cristina automatiza tests QA",
        "Métricas en tiempo real",
        "Ajuste de workflows"
      ],
      status: "expand"
    },
    {
      week: "SEMANA 4",
      title: "Platinum Status",
      icon: Trophy,
      tasks: [
        "10x productividad medida",
        "ROI documentado",
        "Decisión de expansión a 15",
        "Best practices establecidas"
      ],
      status: "success"
    }
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '12px'
              }}
            >
              <Calendar size={22} color="#ffd89b" />
            </motion.div>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Tu Roadmap de 30 Días</h1>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '12px'
              }}
            >
              <Target size={22} color="#ffd89b" />
            </motion.div>
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
          Empezamos HOY
        </motion.p>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Roadmap Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            position: 'relative',
            marginBottom: '25px'
          }}>
            {roadmap.map((phase, index) => {
              const isActive = index <= activeWeek

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ position: 'relative' }}
                >

                  <motion.div
                    animate={{
                      scale: index === activeWeek ? 1.02 : 1,
                      y: index === activeWeek ? -5 : 0
                    }}
                    style={{
                      background: index === activeWeek 
                        ? 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 216, 155, 0.08) 0%, rgba(255, 179, 71, 0.03) 100%)',
                      border: index === activeWeek ? '3px solid #ffd89b' : '2px solid rgba(255, 216, 155, 0.3)',
                      borderRadius: '20px',
                      padding: '20px',
                      height: '100%',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Week header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '0.95rem',
                          color: '#b0b0b0',
                          marginBottom: '5px'
                        }}>
                          {phase.week}
                        </p>
                        <h3 style={{
                          fontSize: '1.4rem',
                          color: '#ffd89b',
                          fontWeight: '700',
                          margin: 0
                        }}>
                          {phase.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={index === activeWeek ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: index === activeWeek ? Infinity : 0
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                          border: '2px solid #ffd89b',
                          borderRadius: '12px'
                        }}
                      >
                        <phase.icon size={22} color="#ffd89b" />
                      </motion.div>
                    </div>

                    {/* Tasks */}
                    <div style={{ marginBottom: '15px' }}>
                      {phase.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={taskIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: 1,
                            x: 0
                          }}
                          transition={{ delay: index * 0.2 + taskIndex * 0.1 }}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            marginBottom: '10px'
                          }}
                        >
                          <CheckCircle2 
                            size={18} 
                            color={isActive ? "#4ade80" : "#b0b0b0"}
                            style={{ marginTop: '2px', flexShrink: 0 }}
                          />
                          <p style={{
                            fontSize: '0.9rem',
                            color: '#e0e0e0',
                            margin: 0
                          }}>
                            {task}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div style={{
                        display: 'inline-block',
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)'
                          : 'rgba(176, 176, 176, 0.1)',
                        border: isActive ? '2px solid #4ade80' : '2px solid rgba(176, 176, 176, 0.3)',
                        borderRadius: '50px',
                        padding: '6px 15px'
                      }}>
                        <p style={{
                          fontSize: '0.9rem',
                          color: isActive ? '#4ade80' : '#b0b0b0',
                          fontWeight: '700',
                          margin: 0
                        }}>
                          {isActive ? "EN PROGRESO" : "PENDIENTE"}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Progress Line */}
          <div style={{
            height: '6px',
            background: 'rgba(255, 216, 155, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '20px'
          }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${(activeWeek + 1) * 33.33}%` }}
              transition={{ duration: 1 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #ffd89b 0%, #ffb347 100%)',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>

        {/* Bonus Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          style={{ textAlign: 'center', marginTop: '25px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            padding: '15px 30px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <motion.p
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#ffd89b',
                marginBottom: '10px'
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                  border: '2px solid #ffd89b',
                  borderRadius: '50%',
                  marginRight: '10px'
                }}
              >
                <Target size={18} color="#ffd89b" />
              </motion.span>
              Decisión Estratégica de Dynamtek
            </motion.p>
            <p style={{
              fontSize: '1rem',
              color: '#e0e0e0'
            }}>
              Adoptando la tecnología que multiplicará nuestra productividad
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide11