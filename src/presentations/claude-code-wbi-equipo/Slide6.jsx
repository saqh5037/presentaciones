import { motion } from 'framer-motion'
import { useState } from 'react'
import { Music, Zap, FileCode, Shield, TestTube, FileText, GitBranch } from 'lucide-react'

function Slide6() {
  const [playingTrack, setPlayingTrack] = useState(null)

  const features = [
    {
      title: "Instant CRUD",
      time: "30 segundos",
      description: "Genera operaciones completas",
      icon: Zap,
      color: "#ffd89b"
    },
    {
      title: "Debug Detective",
      time: "Instantáneo",
      description: "Encuentra bugs ocultos",
      icon: FileCode,
      color: "#ffb347"
    },
    {
      title: "Test Generator",
      time: "100% coverage",
      description: "Tests unitarios y E2E",
      icon: TestTube,
      color: "#4ade80"
    },
    {
      title: "Doc Writer",
      time: "Automático",
      description: "Nunca más sin documentar",
      icon: FileText,
      color: "#60a5fa"
    },
    {
      title: "Refactor Master",
      time: "Código limpio",
      description: "Mejora tu código legacy",
      icon: GitBranch,
      color: "#c084fc"
    },
    {
      title: "Security Guard",
      time: "Best practices",
      description: "Código seguro siempre",
      icon: Shield,
      color: "#f87171"
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
              <Music size={30} color="#ffd89b" />
            </motion.span>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Tu Playlist de Features</h1>
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
              <Music size={30} color="#ffd89b" />
            </motion.span>
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
          Top Tracks - Lo que más usarás
        </motion.p>

        {/* Feature Tracks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {features.map((feature, index) => {
            const isPlaying = playingTrack === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setPlayingTrack(isPlaying ? null : index)}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: isPlaying 
                    ? 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                  border: isPlaying ? '3px solid #ffd89b' : '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '20px',
                  padding: '15px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: isPlaying ? '0 20px 40px rgba(255, 216, 155, 0.3)' : 'none'
                }}
              >
                {/* Playing indicator */}
                {isPlaying && (
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, transparent 100%)',
                      borderRadius: '20px',
                      pointerEvents: 'none'
                    }}
                  />
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Track number and emoji */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <motion.div
                        animate={isPlaying ? {
                          rotate: [0, 360]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: isPlaying ? Infinity : 0,
                          ease: "linear"
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '35px',
                          height: '35px',
                          background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                          border: '2px solid rgba(255, 216, 155, 0.3)',
                          borderRadius: '15px'
                        }}
                      >
                        <feature.icon size={20} color="#ffd89b" />
                      </motion.div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        color: '#b0b0b0',
                        fontWeight: '600'
                      }}>
                        Track {index + 1}
                      </span>
                    </div>
                    {isPlaying && (
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity
                        }}
                        style={{
                          width: '12px',
                          height: '12px',
                          background: '#4ade80',
                          borderRadius: '50%',
                          boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
                        }}
                      />
                    )}
                  </div>

                  {/* Icon and title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}>
                    <motion.div
                      animate={isPlaying ? {
                        y: [0, -5, 0]
                      } : {}}
                      transition={{
                        duration: 1,
                        repeat: isPlaying ? Infinity : 0
                      }}
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `linear-gradient(135deg, ${feature.color}30 0%, ${feature.color}15 100%)`,
                        border: `2px solid ${feature.color}`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <feature.icon size={18} color="#ffd89b" />
                      </motion.span>
                    </motion.div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#ffd89b',
                        marginBottom: '4px',
                        fontWeight: '700'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#ffb347',
                        fontWeight: '600'
                      }}>
                        {feature.time}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#e0e0e0',
                    marginBottom: '10px'
                  }}>
                    {feature.description}
                  </p>

                  {/* Play bar */}
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 216, 155, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 216, 155, 0.2)'
                  }}>
                    {isPlaying && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #ffd89b 0%, #ffb347 100%)'
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Now Playing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
            border: '2px solid #ffd89b',
            borderRadius: '50px',
            padding: '10px 25px'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              margin: 0
            }}>
              <motion.span
                animate={{
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
                style={{
                  color: '#4ade80',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}
              >
                ▶
              </motion.span>
              Now Playing: Tu Productividad x10
              <span style={{
                color: '#ffb347',
                fontWeight: '600'
              }}>
                • Repeat: ∞
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide6