import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Globe } from 'lucide-react'

function Slide11() {
  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          textAlign: 'center', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <h2 style={{ 
            fontSize: '3rem', 
            color: '#ffd89b', 
            margin: 0,
            fontWeight: '800',
            letterSpacing: '2px'
          }}>
            DYNAMTEK
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#b0b0b0', 
            margin: '10px 0',
            letterSpacing: '1px'
          }}>
            Centro de Mando para Laboratorios
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          style={{ 
            fontSize: '4rem',
            marginBottom: '30px'
          }}
        >
          Preguntas y Discusión
        </motion.h1>

        {/* Q&A Icon */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <MessageCircle size={60} color="#ffd89b" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontSize: '1.6rem',
            color: '#e0e0e0',
            marginBottom: '50px',
            maxWidth: '800px'
          }}
        >
          Estamos aquí para responder sus preguntas y explorar juntos
          cómo esta transformación puede llevar nuestro laboratorio al siguiente nivel
        </motion.p>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
            border: '2px solid rgba(255, 216, 155, 0.3)',
            borderRadius: '20px',
            padding: '40px 60px',
            marginBottom: '40px'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffd89b',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Gracias por su Tiempo
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#b0b0b0'
          }}>
            Juntos construiremos el laboratorio del futuro
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 25px',
              background: 'rgba(255, 216, 155, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 216, 155, 0.3)'
            }}
          >
            <Mail size={20} color="#ffd89b" />
            <span style={{ color: '#e0e0e0' }}>info@dynamtek.com</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 25px',
              background: 'rgba(255, 216, 155, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 216, 155, 0.3)'
            }}
          >
            <Phone size={20} color="#ffd89b" />
            <span style={{ color: '#e0e0e0' }}>+1 (555) 123-4567</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 25px',
              background: 'rgba(255, 216, 155, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 216, 155, 0.3)'
            }}
          >
            <Globe size={20} color="#ffd89b" />
            <span style={{ color: '#e0e0e0' }}>www.dynamtek.com</span>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'rgba(255, 216, 155, 0.2)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide11