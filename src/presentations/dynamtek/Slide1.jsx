import { motion } from 'framer-motion'
import { Brain, Activity, Database, TrendingUp } from 'lucide-react'

function Slide1() {
  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', width: '100%' }}
      >
        {/* Background Particles Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: -1
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255, 216, 155, 0.3)',
                borderRadius: '50%',
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
        </motion.div>

        {/* Logo Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#ffd89b', 
            margin: 0,
            fontWeight: '800',
            letterSpacing: '2px'
          }}>
            DYNAMTEK
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            color: '#b0b0b0', 
            margin: '5px 0',
            letterSpacing: '1px'
          }}>
            Centro de Mando para Laboratorios
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '4.5rem', 
            marginBottom: '30px',
            lineHeight: '1.1'
          }}
        >
          Liderando la Próxima<br />
          Revolución del Diagnóstico
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ fontSize: '1.8rem', marginBottom: '50px' }}
        >
          De la Operación Reactiva a la Inteligencia Predictiva
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginBottom: '50px'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
              border: '2px solid #ffd89b',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px'
            }}>
              <Brain size={40} color="#ffd89b" />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>IA Predictiva</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
              border: '2px solid #ffd89b',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px'
            }}>
              <Activity size={40} color="#ffd89b" />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>Tiempo Real</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
              border: '2px solid #ffd89b',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px'
            }}>
              <Database size={40} color="#ffd89b" />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>Integración Total</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
              border: '2px solid #ffd89b',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px'
            }}>
              <TrendingUp size={40} color="#ffd89b" />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>ROI Exponencial</p>
          </motion.div>
        </motion.div>

        {/* Presentation Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
            border: '2px solid rgba(255, 216, 155, 0.3)',
            borderRadius: '20px',
            padding: '30px 50px',
            display: 'inline-block'
          }}
        >
          <div style={{ 
            display: 'flex', 
            gap: '80px', 
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>AUDIENCIA</p>
              <p style={{ margin: '5px 0', color: '#ffd89b', fontSize: '1.1rem', fontWeight: '600' }}>
                CEO & Directores
              </p>
            </div>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>OBJETIVO</p>
              <p style={{ margin: '5px 0', color: '#ffd89b', fontSize: '1.1rem', fontWeight: '600' }}>
                Transformación Estratégica
              </p>
            </div>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>FECHA</p>
              <p style={{ margin: '5px 0', color: '#ffd89b', fontSize: '1.1rem', fontWeight: '600' }}>
                {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated indicator */}
        <motion.div
          style={{ marginTop: '40px' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ color: '#ffd89b', fontSize: '2rem' }}>⬇</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide1