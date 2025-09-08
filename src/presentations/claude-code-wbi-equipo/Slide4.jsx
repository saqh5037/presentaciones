import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TrendingUp, Zap, Award, Users } from 'lucide-react'

function Slide4() {
  const [activeProfile, setActiveProfile] = useState(0)
  const [counters, setCounters] = useState({
    junior: { before: 0, after: 0 },
    semiSenior: { before: 0, after: 0 },
    qa: { before: 0, after: 0 },
    design: { before: 0, after: 0 }
  })

  const profiles = [
    {
      title: "JUNIOR → SEMI-SENIOR",
      subtitle: "Frontend & Backend Devs",
      icon: TrendingUp,
      metrics: {
        before: { value: 1, label: "feature/semana" },
        after: { value: 4, label: "features/semana" },
        improvement: "300%",
        bonus: "Aprenden best practices automáticamente"
      }
    },
    {
      title: "JUNIOR POWER-UP",
      subtitle: "Full Stack Team",
      icon: Zap,
      metrics: {
        before: { value: 20, label: "hrs en tutoriales/semana" },
        after: { value: 2, label: "hrs aprendiendo/semana" },
        improvement: "10x más rápido",
        bonus: "Mentoría 24/7 con IA"
      }
    },
    {
      title: "QA SUPERHERO",
      subtitle: "QA Engineers",
      icon: Award,
      metrics: {
        before: { value: 40, label: "% coverage" },
        after: { value: 95, label: "% coverage" },
        improvement: "70% menos bugs",
        bonus: "Edge cases detectados por IA"
      }
    },
    {
      title: "DISEÑO ACELERADO",
      subtitle: "Frontend Team",
      icon: Users,
      metrics: {
        before: { value: 3, label: "días Figma→React" },
        after: { value: 30, label: "min Figma→React" },
        improvement: "144x más rápido",
        bonus: "CSS perfecto y accesible"
      }
    }
  ]

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setCounters(prev => {
        const updated = { ...prev }
        profiles.forEach((profile, index) => {
          const key = ['junior', 'semiSenior', 'qa', 'design'][index]
          if (updated[key].before < profile.metrics.before.value) {
            updated[key].before = Math.min(
              updated[key].before + profile.metrics.before.value / 20,
              profile.metrics.before.value
            )
          }
          if (updated[key].after < profile.metrics.after.value) {
            updated[key].after = Math.min(
              updated[key].after + profile.metrics.after.value / 20,
              profile.metrics.after.value
            )
          }
        })
        return updated
      })
    }, 100)

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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '10px', fontSize: '2.8rem' }}
        >
          Tu Developer Profile Potenciado
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
          Métricas reales de transformación para cada rol
        </motion.p>

        {/* Profile Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          marginBottom: '25px',
          maxWidth: '1400px',
          margin: '0 auto 25px auto'
        }}>
          {profiles.map((profile, index) => {
            const isActive = index === activeProfile
            const counterKey = ['junior', 'semiSenior', 'qa', 'design'][index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveProfile(index)}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 216, 155, 0.08) 0%, rgba(255, 179, 71, 0.03) 100%)',
                  border: isActive ? '3px solid #ffd89b' : '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '20px',
                  padding: '15px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  transform: isActive ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: isActive ? '0 20px 40px rgba(255, 216, 155, 0.3)' : 'none'
                }}
              >
                {/* Active Badge */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '20px',
                      background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      boxShadow: '0 3px 10px rgba(255, 216, 155, 0.5)'
                    }}
                  >
                    <span style={{ 
                      fontSize: '0.8rem', 
                      fontWeight: '800',
                      color: '#1a1a2e'
                    }}>
                      ACTIVO
                    </span>
                  </motion.div>
                )}

                {/* Icon */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                      border: '2px solid rgba(255, 216, 155, 0.3)',
                      borderRadius: '18px'
                    }}
                  >
                    <profile.icon size={26} color="#ffd89b" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '1.1rem',
                  color: '#ffd89b',
                  marginBottom: '5px',
                  fontWeight: '700'
                }}>
                  {profile.title}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  marginBottom: '15px'
                }}>
                  {profile.subtitle}
                </p>

                {/* Before/After Metrics */}
                <div style={{ marginBottom: '10px' }}>
                  {/* Before */}
                  <div style={{
                    background: 'rgba(255, 107, 107, 0.15)',
                    border: '2px solid rgba(255, 107, 107, 0.4)',
                    borderRadius: '12px',
                    padding: '10px',
                    marginBottom: '10px'
                  }}>
                    <p style={{ 
                      fontSize: '0.8rem',
                      color: '#ff6b6b',
                      marginBottom: '5px',
                      fontWeight: '600'
                    }}>
                      ANTES
                    </p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ 
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: '#ff6b6b'
                      }}>
                        {Math.round(counters[counterKey].before)}
                      </span>
                      <span style={{ 
                        fontSize: '0.85rem',
                        color: '#ffb347'
                      }}>
                        {profile.metrics.before.label}
                      </span>
                    </div>
                  </div>

                  {/* After */}
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.02, 1] : 1
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isActive ? Infinity : 0
                    }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                      border: '3px solid #ffd89b',
                      borderRadius: '12px',
                      padding: '10px',
                      boxShadow: '0 5px 15px rgba(255, 216, 155, 0.3)'
                    }}
                  >
                    <p style={{ 
                      fontSize: '0.8rem',
                      color: '#ffd89b',
                      marginBottom: '5px',
                      fontWeight: '700'
                    }}>
                      CON CLAUDE CODE
                    </p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ 
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {Math.round(counters[counterKey].after)}
                      </span>
                      <span style={{ 
                        fontSize: '0.85rem',
                        color: '#ffb347',
                        fontWeight: '600'
                      }}>
                        {profile.metrics.after.label}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Improvement Badge */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  border: '2px solid #4ade80',
                  borderRadius: '10px',
                  padding: '8px',
                  marginBottom: '10px',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '1rem',
                    color: '#4ade80',
                    fontWeight: '700'
                  }}>
                    {profile.metrics.improvement} mejor
                  </p>
                </div>

                {/* Bonus Feature */}
                <div style={{
                  background: 'rgba(255, 216, 155, 0.05)',
                  border: '1px solid rgba(255, 216, 155, 0.2)',
                  borderRadius: '8px',
                  padding: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '0.8rem',
                    color: '#ffd89b',
                    fontWeight: '500'
                  }}>
                    {profile.metrics.bonus}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Team Impact Summary */}
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
            padding: '15px 40px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.3rem',
              color: '#e0e0e0',
              marginBottom: '10px'
            }}>
              Impacto Total del Equipo:
            </p>
            <motion.p
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              10x Productividad
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide4