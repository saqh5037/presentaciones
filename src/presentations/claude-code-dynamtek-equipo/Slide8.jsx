import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function Slide8() {
  const technologies = [
    { name: 'React', icon: Check, delay: 0.1 },
    { name: 'Angular', icon: Check, delay: 0.15 },
    { name: 'Vue', icon: Check, delay: 0.2 },
    { name: 'Node.js', icon: Check, delay: 0.25 },
    { name: 'Express', icon: Check, delay: 0.3 },
    { name: 'Python', icon: Check, delay: 0.35 },
    { name: 'Django', icon: Check, delay: 0.4 },
    { name: 'Java', icon: Check, delay: 0.45 },
    { name: 'Spring Boot', icon: Check, delay: 0.5 },
    { name: 'PostgreSQL', icon: Check, delay: 0.55 },
    { name: 'MongoDB', icon: Check, delay: 0.6 },
    { name: 'Docker', icon: Check, delay: 0.65 },
    { name: 'Kubernetes', icon: Check, delay: 0.7 },
    { name: 'AWS', icon: Check, delay: 0.75 },
    { name: 'Google Cloud', icon: Check, delay: 0.8 },
    { name: 'Git', icon: Check, delay: 0.85 },
    { name: 'GitHub', icon: Check, delay: 0.9 },
    { name: 'Bitbucket', icon: Check, delay: 0.95 }
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
          Compatible con Tu Stack
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          No cambies nada, solo añade superpoderes
        </motion.p>

        {/* Your Current Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: '20px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '20px',
            padding: '15px 30px',
            boxShadow: '0 15px 30px rgba(255, 216, 155, 0.2)'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#ffd89b',
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Tu Stack Actual en Dynamtek:
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                    border: '2px solid #ffd89b',
                    borderRadius: '8px'
                  }}
                >
                  <Check size={16} color="#ffd89b" />
                </motion.div>
                VS Code
              </span>
              <span style={{ color: '#ffb347', fontSize: '1.2rem', fontWeight: '700' }}>+</span>
              <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                    border: '2px solid #ffd89b',
                    borderRadius: '8px'
                  }}
                >
                  <Check size={16} color="#ffd89b" />
                </motion.div>
                Bitbucket
              </span>
              <span style={{ color: '#ffb347', fontSize: '1.2rem', fontWeight: '700' }}>+</span>
              <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                    border: '2px solid #ffd89b',
                    borderRadius: '8px'
                  }}
                >
                  <Check size={16} color="#ffd89b" />
                </motion.div>
                React
              </span>
              <span style={{ color: '#ffb347', fontSize: '1.2rem', fontWeight: '700' }}>+</span>
              <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                    border: '2px solid #ffd89b',
                    borderRadius: '8px'
                  }}
                >
                  <Check size={16} color="#ffd89b" />
                </motion.div>
                Node.js
              </span>
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '12px',
          marginBottom: '25px',
          maxWidth: '1200px',
          margin: '0 auto 25px auto'
        }}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: tech.delay,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '12px',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <motion.div
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: tech.delay + 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ fontSize: '2rem' }}
                  >
                    <tech.icon size={24} color="#4ade80" />
                  </motion.div>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#e0e0e0',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    {tech.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '3px solid #ffd89b',
              borderRadius: '30px',
              padding: '20px 40px',
              boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
            }}
          >
            <p style={{
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#ffd89b',
              marginBottom: '15px'
            }}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                  border: '2px solid #ffd89b',
                  borderRadius: '50%',
                  marginRight: '10px'
                }}
              >
                <Check size={16} color="#ffd89b" />
              </motion.div> Integración perfecta con VS Code
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#e0e0e0'
            }}>
              Extension nativa • Sin cambiar tu flujo • Solo mejorándolo
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide8