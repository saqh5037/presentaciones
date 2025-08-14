import { motion } from 'framer-motion'
import { MessageCircle, HelpCircle, Coffee, Heart } from 'lucide-react'

function Slide10() {
  return (
    <div className="musi-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
      >
        {/* Icon Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity
          }}
          style={{ marginBottom: '40px' }}
        >
          <MessageCircle size={100} color="#E31E24" />
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: '4rem', marginBottom: '30px' }}
        >
          Preguntas y Respuestas
        </motion.h1>
        
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: '1.5rem', marginBottom: '60px' }}
        >
          Es momento de resolver todas sus dudas
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: '4px solid #E31E24'
            }}
          >
            <HelpCircle size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Dudas Técnicas</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'center' }}>
              Samuel Quiroz<br/>
              squiroz@wbinnova.com
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: '4px solid #E31E24'
            }}
          >
            <Coffee size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Gestión del Proyecto</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'center' }}>
              Francisco Gaivis<br/>
              fgaivis@wbinnova.com
            </p>
          </motion.div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.05) 0%, rgba(227, 30, 36, 0.1) 100%)',
            borderRadius: '12px',
            padding: '40px',
            border: '1px solid rgba(227, 30, 36, 0.2)'
          }}
        >
          <Heart size={40} color="#E31E24" style={{ marginBottom: '20px' }} />
          <h2 style={{ color: '#E31E24', marginBottom: '20px' }}>
            ¡Gracias por su confianza!
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Estamos emocionados de trabajar con ustedes en este proyecto.<br/>
            Juntos construiremos una solución excepcional para Musi y Mussmanni.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px'
          }}
        >
          <img src="/musi/Desktop - 49.svg" alt="Musi" style={{ height: '60px' }} />
          <span style={{ fontSize: '2rem', color: '#ccc' }}>×</span>
          <div>
            <h4 style={{ color: '#333', margin: 0 }}>WBI Innovations</h4>
            <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>We Build IT</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide10