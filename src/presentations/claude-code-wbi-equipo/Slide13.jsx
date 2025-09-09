import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare, Play, Users, Target, BarChart3 } from 'lucide-react'
import { useState } from 'react'

function Slide13() {
  const [hoveredAction, setHoveredAction] = useState(null)

  const actions = [
    {
      title: "Bienvenidos a la nueva era de desarrollo en WBI",
      icon: Play
    },
    {
      title: "Workshop de onboarding esta semana",
      icon: Users
    },
    {
      title: "Claude Code: Tu nuevo compañero de código",
      icon: Target
    },
    {
      title: "Multiplicando nuestra productividad juntos",
      icon: BarChart3
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
        {/* Animated background particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '6px',
                height: '6px',
                background: 'rgba(255, 216, 155, 0.5)'
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '15px' }}
        >
          <motion.h1
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 50%, #ffd89b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '10px'
            }}
          >
            Bienvenidos a la Nueva Era
          </motion.h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#ffb347',
            fontWeight: '600'
          }}>
            WBI adopta Claude Code como su asistente de IA
          </p>
        </motion.div>

        {/* Actions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {actions.map((action, index) => {
            const isHovered = hoveredAction === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredAction(index)}
                onHoverEnd={() => setHoveredAction(null)}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                  border: isHovered ? '3px solid #ffd89b' : '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '20px',
                  padding: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isHovered ? '0 15px 30px rgba(255, 216, 155, 0.3)' : 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <motion.div
                    animate={isHovered ? {
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{
                      duration: 1
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                      border: '2px solid #ffd89b',
                      borderRadius: '15px',
                      flexShrink: 0
                    }}
                  >
                    <action.icon size={24} color="#ffd89b" />
                  </motion.div>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    fontWeight: '600',
                    flex: 1,
                    margin: 0
                  }}>
                    {action.title}
                  </p>
                  <motion.div
                    animate={isHovered ? {
                      x: [0, 5, 0]
                    } : {}}
                    transition={{
                      duration: 0.5,
                      repeat: isHovered ? Infinity : 0
                    }}
                  >
                    <ArrowRight size={20} color="#ffb347" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          <motion.button
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 40px',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(255, 216, 155, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '1.4rem',
              fontWeight: '700',
              color: '#1a1a2e'
            }}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Play size={20} color="#1a1a2e" fill="#1a1a2e" />
              </motion.div>
              COMENZAMOS HOY MISMO
            </span>
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '2px solid #ffd89b',
            borderRadius: '20px',
            padding: '15px 30px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#ffd89b',
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Recursos de Soporte para el Equipo
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Mail size={18} color="#ffb347" />
                <span style={{ color: '#e0e0e0' }}>soporte@wbi.team</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <MessageSquare size={18} color="#ffb347" />
                <span style={{ color: '#e0e0e0' }}>#IA-support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final motivational message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ textAlign: 'center' }}
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            WBI + Claude Code = Desarrollo 10x
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide13