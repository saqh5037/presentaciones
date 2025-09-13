import { motion } from 'framer-motion'
import { Cpu, Target, TrendingUp, Zap } from 'lucide-react'
import MicrotecLogo from './MicrotecLogo'

function Slide1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="microtec-slide">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        {/* Main Title with Icon */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '10px'
          }}
        >
          <motion.div animate={pulseAnimation}>
            <Cpu size={80} color="#6ba644" />
          </motion.div>
          <h1 style={{ 
            fontSize: '3.5rem', 
            margin: 0,
            color: '#1e3a8a',
            fontWeight: '900',
            cursor: 'pointer',
            letterSpacing: '-0.02em',
            WebkitTextFillColor: '#1e3a8a',
            textFillColor: '#1e3a8a'
          }}>
            Plan de Implementación de IA
          </h1>
        </motion.div>

        {/* Microtec Logo - Prominent */}
        <motion.div
          variants={itemVariants}
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MicrotecLogo size="large" />
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="subtitle"
          style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#475569', fontWeight: '500' }}
        >
          Estrategia de Transformación Digital Modular y Escalable
        </motion.p>

        {/* Key Features */}
        <motion.div 
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
            width: '100%',
            margin: '0 auto'
          }}
        >
          {/* Feature 1 */}
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px',
              textAlign: 'center',
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)'
            }}
          >
            <Target size={50} color="#ef4444" style={{ marginBottom: '15px', opacity: 0.8 }} />
            <motion.h3 
              whileHover={{ scale: 1.1, color: '#6ba644' }}
              transition={{ duration: 0.2 }}
              style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700', cursor: 'pointer' }}
            >
              18 Meses
            </motion.h3>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '500' }}>
              Implementación progresiva con resultados visibles cada mes
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateX: 5,
              rotateY: 0,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px',
              textAlign: 'center',
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)'
            }}
          >
            <Zap size={50} color="#6ba644" style={{ marginBottom: '15px' }} />
            <motion.h3 
              whileHover={{ scale: 1.1, color: '#6ba644' }}
              transition={{ duration: 0.2 }}
              style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700', cursor: 'pointer' }}
            >
              Quick Wins
            </motion.h3>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '500' }}>
              Valor tangible desde el primer mes con soluciones prácticas
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px',
              textAlign: 'center',
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)'
            }}
          >
            <TrendingUp size={50} color="#1e3a8a" style={{ marginBottom: '15px' }} />
            <motion.h3 
              whileHover={{ scale: 1.1, color: '#6ba644' }}
              transition={{ duration: 0.2 }}
              style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700', cursor: 'pointer' }}
            >
              ROI 200%
            </motion.h3>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '500' }}>
              Retorno de inversión proyectado con métricas claras
            </p>
          </motion.div>
        </motion.div>

        {/* Implementation Approach */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 20px 60px rgba(107, 166, 68, 0.25)',
            transition: { duration: 0.3 }
          }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(107, 166, 68, 0.4)',
            boxShadow: '0 10px 40px rgba(107, 166, 68, 0.15)',
            borderRadius: '20px',
            padding: '30px',
            marginTop: '20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <h3 style={{ color: '#1e3a8a', fontSize: '1.8rem', marginBottom: '20px', fontWeight: '700' }}>
            Metodología de Implementación
          </h3>
          <motion.div 
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: '#6ba644',
              marginBottom: '15px',
              cursor: 'pointer'
            }}
          >
            Modular y Escalable
          </motion.div>
          <p style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: '600' }}>
            18 meses • Open Source First • Resultados Progresivos
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', marginTop: '20px' }}
        >
          <p style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: '600', fontStyle: 'italic' }}>
            "Construir capacidades propias, implementar gradualmente, validar con datos reales"
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide1