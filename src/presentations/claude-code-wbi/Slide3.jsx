import { motion } from 'framer-motion'
import { X, Check, ArrowRight, Gem, Bot, Zap } from 'lucide-react'

function Slide3() {
  const tools = [
    {
      name: "Gemini Gratis",
      logo: Gem,
      limitations: [
        "Respuestas genéricas",
        "Sin contexto del proyecto",
        "Límites estrictos",
        "No entiende tu codebase"
      ]
    },
    {
      name: "ChatGPT Free",
      logo: Bot,
      limitations: [
        "Conocimiento desactualizado",
        "Sin acceso a tu código",
        "Respuestas inconsistentes",
        "No integrado con IDE"
      ]
    },
    {
      name: "Claude Code",
      logo: Zap,
      features: [
        "Entiende TODO tu proyecto",
        "Contexto completo del código",
        "Integrado con VS Code",
        "Best practices automáticas"
      ]
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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: '2.8rem', marginBottom: '10px' }}
        >
          Tu Nuevo Compañero de Código
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '20px'
          }}
        >
          Claude Code vs tus herramientas actuales
        </motion.h2>

        {/* Tool Cards Container */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          alignItems: 'stretch',
          marginBottom: '25px'
        }}>
          {/* Gemini Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="tool-card"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <div className="tool-logo" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '2px solid rgba(255, 216, 155, 0.3)',
              borderRadius: '20px',
              margin: '0 auto 20px auto'
            }}>
              <Gem size={30} color="#ffd89b" />
            </div>
            <h3 className="tool-name">{tools[0].name}</h3>
            <div style={{ marginTop: '15px' }}>
              {tools[0].limitations.map((limitation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="tool-item"
                >
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
                    <X size={16} color="#ff6b6b" />
                  </motion.span>
                  <span className="tool-item-text">{limitation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ChatGPT Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="tool-card"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <div className="tool-logo" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '2px solid rgba(255, 216, 155, 0.3)',
              borderRadius: '20px',
              margin: '0 auto 20px auto'
            }}>
              <Bot size={30} color="#ffd89b" />
            </div>
            <h3 className="tool-name">{tools[1].name}</h3>
            <div style={{ marginTop: '15px' }}>
              {tools[1].limitations.map((limitation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="tool-item"
                >
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
                    <X size={16} color="#ff6b6b" />
                  </motion.span>
                  <span className="tool-item-text">{limitation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Claude Code Card - FEATURED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="tool-card featured"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="recommended-badge" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                  border: '2px solid #ffd89b',
                  borderRadius: '50%'
                }}
              >
                <Check size={12} color="#ffd89b" />
              </motion.div>
              RECOMENDADO
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="tool-logo"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                border: '2px solid rgba(255, 216, 155, 0.3)',
                borderRadius: '20px',
                margin: '0 auto 20px auto'
              }}
            >
              <Zap size={30} color="#ffd89b" />
            </motion.div>
            <h3 className="tool-name">{tools[2].name}</h3>
            <div style={{ marginTop: '15px' }}>
              {tools[2].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="tool-item"
                >
                  <motion.span
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ fontSize: '1.5rem' }}
                  >
                    <Check size={16} color="#00ff88" />
                  </motion.span>
                  <span className="tool-item-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="cta-container"
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              x: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span>La evolución es clara</span>
            <motion.span
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <ArrowRight size={24} color="#ffd89b" />
            </motion.span>
            <span>Claude Code es el futuro</span>
          </motion.button>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '20px' }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#ffd89b',
            fontStyle: 'italic'
          }}>
            "Transformando la forma en que desarrollamos software"
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide3