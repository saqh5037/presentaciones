import { motion } from 'framer-motion'
import { Trophy, Star, Users, Lightbulb } from 'lucide-react'

function Slide8() {
  const values = [
    {
      icon: Trophy,
      title: 'Ventaja Competitiva Sostenible',
      description: 'Nos moveremos más rápido, con más inteligencia y con mayor calidad que nadie en el mercado.'
    },
    {
      icon: Star,
      title: 'Marca de Innovación',
      description: 'Nos posicionará como el laboratorio tecnológicamente más avanzado, atrayendo contratos valiosos.'
    },
    {
      icon: Users,
      title: 'Imán de Talento',
      description: 'Los mejores profesionales quieren trabajar con las mejores herramientas en un entorno de excelencia.'
    },
    {
      icon: Lightbulb,
      title: 'Plataforma para el Futuro',
      description: 'Construimos hoy la base para implementar IA, análisis predictivo e innovaciones del mañana.'
    }
  ]

  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          El Valor Estratégico:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '2.5rem', 
            color: '#ffd89b',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          Más Allá de la Eficiencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: '1.4rem',
            color: '#b0b0b0',
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          Esto No es una Mejora Operativa, es una Refundación Estratégica
        </motion.p>

        {/* Value Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.15, 
                  duration: 0.6,
                  type: "spring"
                }}
                className="feature-card"
                whileHover={{ 
                  scale: 1.03,
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(255, 216, 155, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }}
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <motion.div
                    className="feature-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '25px' }}
                  >
                    <Icon size={35} />
                  </motion.div>
                  
                  <h3 className="feature-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                    {value.title}
                  </h3>
                  
                  <p className="feature-description" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '25px',
            padding: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: '#ffd89b',
                borderRadius: '50%',
                left: `${10 + i * 12}%`,
                top: '50%'
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
              style={{ marginBottom: '30px' }}
            >
              <Trophy size={60} color="#ffd89b" />
            </motion.div>

            <h3 style={{
              fontSize: '2rem',
              color: '#ffd89b',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              El Resultado Final
            </h3>

            <p style={{
              fontSize: '1.4rem',
              color: '#ffffff',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Un laboratorio que no solo <span style={{ color: '#ffd89b', fontWeight: 'bold' }}>responde</span> al futuro,
              sino que lo <span style={{ color: '#ffd89b', fontWeight: 'bold' }}>define</span>.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginTop: '30px'
            }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ffd89b'
                }}>
                  3X
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Más Rápido</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ffd89b'
                }}>
                  5X
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Más Inteligente</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#ffd89b'
                }}>
                  10X
                </div>
                <div style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Más Valioso</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide8