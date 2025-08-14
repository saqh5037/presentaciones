import { motion } from 'framer-motion'
import { MessageCircle, HelpCircle, Mail, Heart, MapPin, Phone, Globe } from 'lucide-react'

function Slide12() {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh'
        }}
      >
        {/* Question Mark Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ marginBottom: '40px' }}
        >
          <HelpCircle size={100} color="#ffd89b" />
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: '3rem', marginBottom: '40px' }}
        >
          ¿Preguntas?
        </motion.h2>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ 
            display: 'flex',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(102,126,234,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #667eea'
            }}>
              <MessageCircle size={40} color="#667eea" />
            </div>
            <span style={{ fontSize: '0.9rem' }}>Conversemos</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,216,155,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ffd89b'
            }}>
              <Mail size={40} color="#ffd89b" />
            </div>
            <span style={{ fontSize: '0.9rem' }}>Contáctanos</span>
          </motion.div>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ 
            padding: '25px 40px',
            background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(255,216,155,0.1) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(255,255,255,0.2)',
            marginBottom: '30px'
          }}
        >
          <motion.h3
            style={{ 
              fontSize: '1.4rem', 
              color: '#ffd89b',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            DT DIAGNOSTICOS SA DE CV
          </motion.h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
            >
              <MapPin size={20} color="#667eea" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                Av. Gabriel Mancera 725, Interno 240<br />
                Colonia Del Valle, Benito Juarez,<br />
                México D.F., México
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Phone size={20} color="#667eea" />
              <span style={{ fontSize: '0.95rem' }}>55 1253 6074</span>
            </motion.div>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Globe size={20} color="#667eea" />
              <a 
                href="https://www.dynamtek.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.95rem', 
                  color: '#ffd89b',
                  textDecoration: 'none'
                }}
              >
                www.dynamtek.com
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{ 
            padding: '20px 40px',
            background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          <motion.p 
            style={{ 
              fontSize: '1.5rem', 
              color: '#fff',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              justifyContent: 'center'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Gracias por su atención
            <Heart size={25} color="#ff6b6b" />
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%'
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(102,126,234,0.1)',
            border: '2px solid rgba(102,126,234,0.3)'
          }} />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '15%'
          }}
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,216,155,0.1)',
            border: '2px solid rgba(255,216,155,0.3)'
          }} />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '20%'
          }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(76,175,80,0.2)',
            border: '2px solid rgba(76,175,80,0.4)'
          }} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide12