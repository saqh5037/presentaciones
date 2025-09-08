import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FileQuestion, Bug, Code2, Clock, Search } from 'lucide-react'

function Slide2() {
  const [activeIndex, setActiveIndex] = useState(0)

  const timeKillers = [
    {
      rank: 1,
      title: "Documentación faltante",
      percentage: 30,
      time: "12 hrs/semana",
      icon: FileQuestion
    },
    {
      rank: 2,
      title: "Debugging sin contexto",
      percentage: 25,
      time: "10 hrs/semana",
      icon: Bug
    },
    {
      rank: 3,
      title: "Escribir tests unitarios",
      percentage: 20,
      time: "8 hrs/semana",
      icon: Code2
    },
    {
      rank: 4,
      title: "Code reviews largos",
      percentage: 15,
      time: "6 hrs/semana",
      icon: Clock
    },
    {
      rank: 5,
      title: "Buscar en Stack Overflow",
      percentage: 10,
      time: "4 hrs/semana",
      icon: Search
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timeKillers.length)
    }, 3000)
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
          Tus Top 5 Time-Killers en WBI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '30px',
            textAlign: 'center'
          }}
        >
          ¿Dónde se va realmente tu tiempo productivo?
        </motion.p>

        {/* Time Killers Grid */}
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBottom: '25px',
          maxWidth: '1400px',
          margin: '0 auto 25px auto'
        }}>
          {timeKillers.map((killer, index) => {
            const isActive = index === activeIndex

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
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
                  boxShadow: isActive ? '0 20px 40px rgba(255, 216, 155, 0.3)' : 'none',
                  width: index < 3 ? '260px' : '280px',
                  minHeight: '180px',
                  flex: '0 0 auto'
                }}
              >
                {/* Rank Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 216, 155, 0.5)'
                }}>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '800',
                    color: '#1a1a2e'
                  }}>
                    {killer.rank}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: isActive ? [0, 10, -10, 0] : 0,
                    scale: isActive ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Infinity : 0
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                    border: '2px solid rgba(255, 216, 155, 0.3)',
                    borderRadius: '20px',
                    marginBottom: '15px'
                  }}
                >
                  <killer.icon size={30} color="#ffd89b" />
                </motion.div>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '1.1rem',
                  color: '#ffd89b',
                  marginBottom: '10px',
                  fontWeight: '700'
                }}>
                  {killer.title}
                </h3>

                {/* Stats */}
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{ 
                      color: '#ffb347',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {killer.percentage}%
                    </span>
                    <span style={{ 
                      color: '#b0b0b0',
                      fontSize: '0.95rem'
                    }}>
                      {killer.time}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div style={{
                    height: '8px',
                    background: 'rgba(255, 216, 155, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 216, 155, 0.2)'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${killer.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #ffd89b 0%, #ffb347 100%)'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Total Time Wasted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          style={{ textAlign: 'center', marginBottom: '25px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
            border: '3px solid #ff6b6b',
            borderRadius: '30px',
            padding: '20px 50px',
            boxShadow: '0 20px 40px rgba(255, 107, 107, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.2rem',
              color: '#ff6b6b',
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Total tiempo perdido:
            </p>
            <motion.p
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '5px 0'
              }}
            >
              40 hrs/semana
            </motion.p>
            <p style={{ 
              fontSize: '1rem',
              color: '#ffb347',
              marginTop: '5px'
            }}>
              = 1 desarrollador completo desperdiciado 😱
            </p>
          </div>
        </motion.div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
              border: '2px solid #ffd89b',
              borderRadius: '50px',
              padding: '15px 40px'
            }}
          >
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ⚡ Claude Code elimina TODOS estos pain points
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide2