import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare, Play, Users, Target, BarChart3, Code, Zap, Brain, Sparkles, Rocket, Database, GitBranch, Terminal, FileCode, Cpu, Globe, Shield, Package, Hexagon, Star, Layers, Cloud, Lock, Gauge, Bot, Workflow } from 'lucide-react'
import { useState, useEffect } from 'react'

function Slide13() {
  const [hoveredAction, setHoveredAction] = useState(null)
  const [showMagicBox, setShowMagicBox] = useState(false)
  const [explosionPhase, setExplosionPhase] = useState(0)
  const [particlesExploded, setParticlesExploded] = useState(false)

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

  // Skills que explotan con poder
  const magicSkills = [
    { icon: Code, label: "Code Generation", color: "#60a5fa", power: "10x", description: "Genera código perfecto al instante" },
    { icon: Brain, label: "AI Debugging", color: "#f472b6", power: "5x", description: "Encuentra bugs antes que existan" },
    { icon: Rocket, label: "Velocity", color: "#ffd89b", power: "10x", description: "Desarrollo a velocidad luz" },
    { icon: Database, label: "Data Master", color: "#4ade80", power: "8x", description: "Modela datos como un arquitecto" },
    { icon: GitBranch, label: "Git Wizard", color: "#c084fc", power: "7x", description: "Control de versiones mágico" },
    { icon: Terminal, label: "CLI Power", color: "#fbbf24", power: "9x", description: "Terminal bajo tu comando" },
    { icon: FileCode, label: "Refactoring", color: "#fb923c", power: "6x", description: "Código limpio automático" },
    { icon: Shield, label: "Security", color: "#ef4444", power: "10x", description: "Seguridad impenetrable" },
    { icon: Globe, label: "Deploy", color: "#06b6d4", power: "8x", description: "Deploy con un click" },
    { icon: Package, label: "Testing", color: "#8b5cf6", power: "9x", description: "100% coverage garantizado" },
    { icon: Cpu, label: "Performance", color: "#10b981", power: "10x", description: "Optimización extrema" },
    { icon: Bot, label: "Automation", color: "#ff6b6b", power: "10x", description: "Automatiza todo" },
    { icon: Workflow, label: "Pipelines", color: "#4ecdc4", power: "8x", description: "CI/CD perfecto" },
    { icon: Cloud, label: "Cloud Native", color: "#667eea", power: "9x", description: "Nativo en la nube" },
    { icon: Layers, label: "Architecture", color: "#f687b3", power: "10x", description: "Arquitectura sólida" },
    { icon: Lock, label: "Auth System", color: "#ffd93d", power: "7x", description: "Autenticación robusta" },
    { icon: Gauge, label: "Monitoring", color: "#6ee7b7", power: "8x", description: "Monitoreo en tiempo real" },
    { icon: Sparkles, label: "Innovation", color: "#ffb347", power: "∞", description: "Innovación sin límites" }
  ]

  const handleOpenBox = () => {
    setShowMagicBox(true)
    setExplosionPhase(1)
    
    // Secuencia de explosión
    setTimeout(() => setExplosionPhase(2), 500)   // Carga de energía
    setTimeout(() => setExplosionPhase(3), 1500)  // Pre-explosión
    setTimeout(() => {
      setExplosionPhase(4)  // EXPLOSIÓN
      setParticlesExploded(true)
    }, 2500)
  }

  // Crear anillos de energía para la explosión
  const energyRings = [1, 2, 3, 4, 5]

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
            onClick={handleOpenBox}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 20px 40px rgba(255, 216, 155, 0.4)',
                '0 25px 50px rgba(255, 216, 155, 0.6)',
                '0 20px 40px rgba(255, 216, 155, 0.4)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 30px 60px rgba(255, 216, 155, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 40px',
              cursor: 'pointer',
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
                <Zap size={20} color="#1a1a2e" fill="#1a1a2e" />
              </motion.div>
              DESBLOQUEAR SUPERPODERES
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

        {/* EPIC EXPLOSION Animation */}
        <AnimatePresence>
          {showMagicBox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowMagicBox(false)
                setExplosionPhase(0)
                setParticlesExploded(false)
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: explosionPhase >= 3 ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
                overflow: 'hidden'
              }}
            >
              {/* Lightning effects during charge - Perfectly Centered */}
              {explosionPhase >= 1 && explosionPhase < 4 && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`lightning-${i}`}
                      initial={{ 
                        opacity: 0,
                        x: 0,
                        y: 0
                      }}
                      animate={{ 
                        opacity: explosionPhase === 3 ? [0, 1, 0] : [0, 0.5, 0],
                        scale: explosionPhase === 3 ? [0.5, 1.5, 0.5] : [0.3, 0.8, 0.3],
                        x: 0,
                        y: 0
                      }}
                      transition={{
                        duration: explosionPhase === 3 ? 0.3 : 0.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        width: '2px',
                        height: '100vh',
                        background: `linear-gradient(to bottom, transparent, ${magicSkills[i].color}, transparent)`,
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        transformOrigin: 'center'
                      }}
                    />
                  ))}
                </>
              )}

              {/* Central Energy Core - Perfectly Centered Container */}
                {/* Energy Core - Visible from the start */}
                {explosionPhase >= 1 && explosionPhase < 4 && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ 
                      scale: 0.8,
                      opacity: 0 
                    }}
                    animate={{
                      scale: explosionPhase === 3 ? [1, 1.3, 1] : 1,
                      rotate: [0, 360],
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    transition={{
                      scale: {
                        duration: explosionPhase === 3 ? 0.5 : 0.8,
                        repeat: explosionPhase === 3 ? Infinity : 0
                      },
                      rotate: {
                        duration: explosionPhase === 3 ? 0.5 : 2,
                        repeat: Infinity,
                        ease: 'linear'
                      },
                      opacity: {
                        duration: 0.5
                      },
                      x: { duration: 0 },
                      y: { duration: 0 }
                    }}
                    style={{
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '150px',
                      height: '150px',
                      background: explosionPhase >= 2 
                        ? 'radial-gradient(circle, #ffd89b, #ffb347, #ff6b6b)' 
                        : 'radial-gradient(circle, #ffd89b, #ffb347)',
                      borderRadius: '50%',
                      boxShadow: explosionPhase >= 2
                        ? '0 0 100px 50px rgba(255, 216, 155, 0.8)'
                        : '0 0 50px 20px rgba(255, 216, 155, 0.5)',
                      filter: explosionPhase === 3 ? 'brightness(2)' : 'brightness(1)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Hexagon 
                      size={60} 
                      color="#1a1a2e" 
                    />
                  </motion.div>
                )}

                {/* Energy Rings - Perfectly Centered */}
                {explosionPhase >= 1 && explosionPhase < 4 && energyRings.map((ring, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 2 + i * 0.5],
                      opacity: [0.8, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    style={{
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '150px',
                      height: '150px',
                      border: `3px solid ${magicSkills[i * 3].color}`,
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  />
                ))}

                {/* EXPLOSION SHOCKWAVE */}
                {explosionPhase >= 4 && (
                  <>
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 20, opacity: 0 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255, 216, 155, 0.8), transparent)',
                        borderRadius: '50%'
                      }}
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 15, opacity: 0 }}
                      transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        border: '5px solid rgba(255, 179, 71, 0.8)',
                        borderRadius: '50%'
                      }}
                    />
                  </>
                )}

                {/* Title that appears - Perfectly Centered */}
                {explosionPhase >= 1 && explosionPhase < 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: explosionPhase === 3 ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.5,
                      scale: {
                        duration: 0.3,
                        repeat: Infinity
                      }
                    }}
                    style={{
                      position: 'fixed',
                      top: '15%',
                      left: '0',
                      right: '0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 10
                    }}
                  >
                    <h2 style={{
                      fontSize: '3rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '3px',
                      margin: 0,
                      padding: 0
                    }}>
                      {explosionPhase === 1 && "Preparando..."}
                      {explosionPhase === 2 && "Cargando Poder..."}
                      {explosionPhase === 3 && "¡MÁXIMO PODER!"}
                    </h2>
                  </motion.div>
                )}

                {/* Floating Skills after explosion */}
                {particlesExploded && (
                  <div style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    top: '0',
                    left: '0',
                    pointerEvents: 'none'
                  }}>
                    {magicSkills.map((skill, index) => {
                      // Distribución optimizada para usar toda la pantalla de forma centrada
                      // Configuración por anillo: [inner, middle, outer]
                      const rings = [
                        { count: 6, radiusX: 380, radiusY: 220 },   // Anillo interno - cerca del centro pero sin tocar
                        { count: 6, radiusX: 550, radiusY: 320 },   // Anillo medio
                        { count: 6, radiusX: 720, radiusY: 420 }    // Anillo externo - distribuido uniformemente
                      ]
                      
                      // Determinar en qué anillo está este elemento
                      let accumCount = 0
                      let ring = 0
                      let positionInRing = 0
                      
                      for (let i = 0; i < rings.length; i++) {
                        if (index < accumCount + rings[i].count) {
                          ring = i
                          positionInRing = index - accumCount
                          break
                        }
                        accumCount += rings[i].count
                      }
                      
                      // Calcular ángulo con offset para cada anillo
                      const angleOffset = ring * (Math.PI / 6) // Offset para que no se alineen
                      const angle = (positionInRing / rings[ring].count) * Math.PI * 2 + angleOffset
                      
                      // Calcular posición final con variación para aspecto más natural
                      const variation = Math.sin(index * 0.5) * 15 // Pequeña variación
                      const x = Math.cos(angle) * (rings[ring].radiusX + variation)
                      const y = Math.sin(angle) * (rings[ring].radiusY + variation)

                      return (
                        <motion.div
                          key={index}
                          initial={{ 
                            scale: 0, 
                            opacity: 0,
                            rotate: -180,
                            x: 0,
                            y: 0
                          }}
                          animate={{ 
                            scale: 1, 
                            opacity: 1,
                            rotate: 0,
                            x: x,
                            y: y
                          }}
                          transition={{ 
                            duration: 1.8,
                            delay: 0.3 + index * 0.05,
                            type: 'spring',
                            damping: 10,
                            stiffness: 100
                          }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                            whileHover={{ scale: 1.2, zIndex: 100 }}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '10px',
                              background: `linear-gradient(135deg, ${skill.color}30 0%, ${skill.color}10 100%)`,
                              border: `2px solid ${skill.color}`,
                              borderRadius: '18px',
                              boxShadow: `0 12px 25px ${skill.color}50`,
                              backdropFilter: 'blur(10px)',
                              cursor: 'pointer',
                              position: 'relative',
                              minWidth: '100px',
                              maxWidth: '120px'
                            }}
                          >
                            {/* Power indicator */}
                            <motion.div
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.1
                              }}
                              style={{
                                position: 'absolute',
                                top: '-15px',
                                right: '-15px',
                                background: skill.color,
                                borderRadius: '50%',
                                padding: '8px',
                                fontWeight: '900',
                                fontSize: '0.9rem',
                                color: '#1a1a2e',
                                boxShadow: `0 0 30px ${skill.color}`,
                                minWidth: '32px',
                                textAlign: 'center'
                              }}
                            >
                              {skill.power}
                            </motion.div>

                            {/* Glowing orb behind icon */}
                            <motion.div
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.2
                              }}
                              style={{
                                position: 'absolute',
                                width: '70px',
                                height: '70px',
                                background: `radial-gradient(circle, ${skill.color}40, transparent)`,
                                borderRadius: '50%',
                                filter: 'blur(20px)',
                                top: '10px'
                              }}
                            />

                            <motion.div
                              animate={{
                                rotate: [0, 360]
                              }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear'
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '45px',
                                height: '45px',
                                background: `linear-gradient(135deg, ${skill.color}40 0%, ${skill.color}20 100%)`,
                                borderRadius: '15px',
                                position: 'relative',
                                zIndex: 1
                              }}
                            >
                              <skill.icon size={24} color={skill.color} />
                            </motion.div>

                            <span style={{
                              fontSize: '0.85rem',
                              fontWeight: '800',
                              color: skill.color,
                              textAlign: 'center',
                              whiteSpace: 'nowrap',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              {skill.label}
                            </span>

                            <span style={{
                              fontSize: '0.65rem',
                              color: '#e0e0e0',
                              textAlign: 'center',
                              opacity: 0.8,
                              lineHeight: '1.1'
                            }}>
                              {skill.description}
                            </span>

                            {/* Energy particles */}
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  y: [-20, -40, -20],
                                  x: [0, (i - 1) * 10, 0],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.5
                                }}
                                style={{
                                  position: 'absolute',
                                  bottom: '10px',
                                  width: '4px',
                                  height: '4px',
                                  background: skill.color,
                                  borderRadius: '50%',
                                  boxShadow: `0 0 10px ${skill.color}`
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                      )
                    })}


                    {/* Central success message - Perfectly Centered */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, type: 'spring' }}
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                        pointerEvents: 'none'
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                        style={{
                          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 100%)',
                          border: '4px solid #ffd89b',
                          borderRadius: '30px',
                          padding: '40px 60px',
                          boxShadow: '0 40px 80px rgba(255, 216, 155, 0.6), 0 0 200px rgba(255, 216, 155, 0.3)',
                          backdropFilter: 'blur(20px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          pointerEvents: 'auto'
                        }}
                      >
                        <motion.h1
                          animate={{
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                          style={{
                            fontSize: '3.5rem',
                            fontWeight: '900',
                            background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                          }}
                        >
                          PODER DESBLOQUEADO
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                          style={{
                            fontSize: '1.5rem',
                            color: '#e0e0e0',
                            marginBottom: '15px'
                          }}
                        >
                          18 Superpoderes Activados
                        </motion.p>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 2.5, duration: 1 }}
                          style={{
                            height: '6px',
                            background: 'linear-gradient(90deg, #4ade80 0%, #ffd89b 50%, #ffb347 100%)',
                            borderRadius: '10px',
                            marginBottom: '15px'
                          }}
                        />
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 }}
                          style={{
                            fontSize: '2rem',
                            color: '#ffd89b',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginTop: '10px',
                            textShadow: '0 0 30px rgba(255, 216, 155, 0.8)'
                          }}
                        >
                          Productividad al 100% 🚀
                        </motion.p>
                        
                        {/* Epic WBI Message */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 3.5 }}
                          style={{
                            marginTop: '30px',
                            padding: '20px',
                            borderTop: '2px solid rgba(255, 216, 155, 0.3)'
                          }}
                        >
                          <motion.p
                            animate={{
                              scale: [1, 1.02, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity
                            }}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '900',
                              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 50%, #ff6b6b 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              textTransform: 'uppercase',
                              letterSpacing: '3px',
                              marginBottom: '10px'
                            }}
                          >
                            WBI SIEMPRE INNOVANDO
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4 }}
                            style={{
                              fontSize: '1.1rem',
                              color: '#e0e0e0',
                              fontStyle: 'italic'
                            }}
                          >
                            "El futuro no se predice, se construye con código"
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}

                {/* Close hint */}
                {particlesExploded && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    style={{
                      position: 'fixed',
                      bottom: '30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '1rem',
                      color: '#b0b0b0',
                      fontStyle: 'italic',
                      zIndex: 100
                    }}
                  >
                    Haz clic en cualquier lugar para cerrar
                  </motion.p>
                )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Slide13