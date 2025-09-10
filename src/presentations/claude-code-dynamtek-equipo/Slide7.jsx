import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code, Bug, TestTube, Clock, Zap, TrendingUp } from 'lucide-react'

function Slide7() {
  const [codeQuality, setCodeQuality] = useState(0)
  const [bugReduction, setBugReduction] = useState(0)
  const [testCoverage, setTestCoverage] = useState(0)
  const [devSpeed, setDevSpeed] = useState(0)
  const [productivity, setProductivity] = useState(0)

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setCodeQuality(prev => prev < 95 ? prev + 2 : 95)
      setBugReduction(prev => prev < 70 ? prev + 1.5 : 70)
      setTestCoverage(prev => prev < 90 ? prev + 2 : 90)
      setDevSpeed(prev => prev < 250 ? prev + 5 : 250)
      setProductivity(prev => prev < 10 ? prev + 0.2 : 10)
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
              <TrendingUp size={30} color="#ffd89b" />
            </motion.span>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Métricas de Productividad</h1>
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
          Mejoras medibles desde el día 1
        </motion.p>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '25px',
          maxWidth: '1200px',
          margin: '0 auto 25px auto'
        }}>
          {/* Code Quality */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%)',
              border: '3px solid #4ade80',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <Code size={40} color="#4ade80" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#4ade80',
                marginBottom: '10px'
              }}>
                Calidad del Código
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#4ade80',
                  margin: '10px 0'
                }}
              >
                {Math.round(codeQuality)}%
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Mejores prácticas automáticas
              </p>
            </div>
          </motion.div>

          {/* Bug Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%)',
              border: '3px solid #ef4444',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <Bug size={40} color="#ef4444" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#ef4444',
                marginBottom: '10px'
              }}>
                Reducción de Bugs
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ef4444',
                  margin: '10px 0'
                }}
              >
                -{Math.round(bugReduction)}%
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Detección proactiva
              </p>
            </div>
          </motion.div>

          {/* Test Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '3px solid #60a5fa',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <TestTube size={40} color="#60a5fa" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#60a5fa',
                marginBottom: '10px'
              }}>
                Coverage de Tests
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#60a5fa',
                  margin: '10px 0'
                }}
              >
                {Math.round(testCoverage)}%
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Tests generados con IA
              </p>
            </div>
          </motion.div>

          {/* Dev Speed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '3px solid #ffd89b',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <Zap size={40} color="#ffd89b" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#ffd89b',
                marginBottom: '10px'
              }}>
                Velocidad de Desarrollo
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ffd89b',
                  margin: '10px 0'
                }}
              >
                {Math.round(devSpeed)}%
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Más rápido que antes
              </p>
            </div>
          </motion.div>

          {/* Time Saved */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(126, 34, 206, 0.08) 100%)',
              border: '3px solid #9333ea',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <Clock size={40} color="#9333ea" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#9333ea',
                marginBottom: '10px'
              }}>
                Tiempo Ahorrado
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#9333ea',
                  margin: '10px 0'
                }}
              >
                20hrs
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Por desarrollador/semana
              </p>
            </div>
          </motion.div>

          {/* Overall Productivity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '3px solid #ffb347',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <motion.span
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{ display: 'inline-block', marginBottom: '15px' }}
              >
                <TrendingUp size={40} color="#ffb347" />
              </motion.span>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#ffb347',
                marginBottom: '10px'
              }}>
                Productividad Global
              </h3>
              <motion.p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ffb347',
                  margin: '10px 0'
                }}
              >
                {productivity.toFixed(1)}x
              </motion.p>
              <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
                Multiplicador de eficiencia
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
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
            <motion.div
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <p style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#ffd89b',
                marginBottom: '10px'
              }}>
                Código más limpio, rápido y confiable
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#e0e0e0'
              }}>
                Métricas reales del equipo de desarrollo
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide7