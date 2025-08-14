import { motion } from 'framer-motion'
import { Users, Zap, Heart, TrendingUp } from 'lucide-react'

function Slide11() {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Conclusión: El Futuro de Nuestro Laboratorio
      </motion.h2>

      {/* Team Collaboration Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px',
          marginTop: '40px'
        }}
      >
        <svg width="400" height="200" viewBox="0 0 400 200">
          {/* Central Lab */}
          <motion.rect
            x="150" y="75" width="100" height="50"
            fill="rgba(102,126,234,0.3)" stroke="#667eea" strokeWidth="2" rx="10"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(102,126,234,0.4)',
                '0 0 40px rgba(102,126,234,0.6)',
                '0 0 20px rgba(102,126,234,0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="200" y="105" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">
            Labsis Expert
          </text>

          {/* Team Members */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <circle cx="80" cy="50" r="25" fill="rgba(255,216,155,0.3)" stroke="#ffd89b" strokeWidth="2" />
            <Users size={20} x="70" y="40" color="#ffd89b" />
            
            <circle cx="320" cy="50" r="25" fill="rgba(255,216,155,0.3)" stroke="#ffd89b" strokeWidth="2" />
            <Users size={20} x="310" y="40" color="#ffd89b" />
            
            <circle cx="80" cy="150" r="25" fill="rgba(255,216,155,0.3)" stroke="#ffd89b" strokeWidth="2" />
            <Users size={20} x="70" y="140" color="#ffd89b" />
            
            <circle cx="320" cy="150" r="25" fill="rgba(255,216,155,0.3)" stroke="#ffd89b" strokeWidth="2" />
            <Users size={20} x="310" y="140" color="#ffd89b" />
          </motion.g>

          {/* Connection Lines */}
          <motion.path
            d="M 105 50 L 150 85 M 295 50 L 250 85 M 105 150 L 150 115 M 295 150 L 250 115"
            stroke="#ffd89b" strokeWidth="2" strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
      </motion.div>

      {/* Key Points */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ marginBottom: '40px' }}
      >
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <motion.li
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <Zap size={25} color="#ffd89b" />
            <span>Labsis Expert es una herramienta para <strong>potenciar nuestra experiencia</strong>, no para sustituirla.</span>
          </motion.li>
          
          <motion.li
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <TrendingUp size={25} color="#4caf50" />
            <span>Nos permite ser <strong>más rápidos, más precisos y más eficientes</strong>.</span>
          </motion.li>
          
          <motion.li
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <Heart size={25} color="#ff6b6b" />
            <span>Nos posiciona a la <strong>vanguardia de la medicina diagnóstica</strong>.</span>
          </motion.li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ 
          padding: '30px',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(255,216,155,0.2) 100%)',
          borderRadius: '25px',
          border: '3px solid rgba(255,255,255,0.3)',
          maxWidth: '700px',
          margin: '0 auto'
        }}
      >
        <motion.p 
          style={{ 
            fontSize: '1.4rem', 
            color: '#ffd89b',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}
          animate={{ 
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Adoptemos el futuro para dedicar nuestro talento
        </motion.p>
        <p style={{ 
          fontSize: '1.2rem',
          color: 'rgba(255,255,255,0.9)'
        }}>
          a lo que más importa: <strong style={{ color: '#4caf50' }}>la ciencia al servicio del paciente</strong>.
        </p>
      </motion.div>

      {/* Animated Particles */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#ffd89b',
              borderRadius: '50%',
              left: `${20 + i * 15}%`
            }}
            animate={{
              y: ['100vh', '-10vh'],
              x: [0, (i % 2 === 0 ? 20 : -20)]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear'
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Slide11