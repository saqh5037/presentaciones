import { motion } from 'framer-motion'
import { Cpu, Cloud, Zap, Brain } from 'lucide-react'

function Slide6() {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tu Nuevo Asistente: La Inteligencia Artificial
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginBottom: '40px', fontSize: '1.1rem' }}
      >
        Labsis Expert utiliza un enfoque de <strong style={{ color: '#ffd89b' }}>IA Híbrida</strong>:
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Local AI */}
        <motion.div
          className="feature-box"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ marginBottom: '20px' }}
            >
              <Cpu size={60} color="#667eea" />
            </motion.div>
            
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>
              <Zap size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Para la Rutina Diaria (IA Local)
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                marginBottom: '10px', 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '10px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                Un modelo rápido y especializado, entrenado con millones de textos médicos.
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '10px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                Ideal para el screening inicial y el reconocimiento de patrones comunes.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Cloud AI */}
        <motion.div
          className="feature-box"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,216,155,0.1) 0%, transparent 70%)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ marginBottom: '20px' }}
            >
              <Cloud size={60} color="#ffd89b" />
            </motion.div>
            
            <h3 style={{ color: '#ffd89b', marginBottom: '15px' }}>
              <Brain size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Para los Casos Complejos (IA en la Nube)
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                marginBottom: '10px', 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '10px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                Acceso seguro a las IA médicas más potentes del mundo.
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '10px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                Ayuda a generar hipótesis en enfermedades raras o diagnósticos diferenciales complejos.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Connection Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ margin: '40px 0' }}
      >
        <svg width="100%" height="100" viewBox="0 0 400 100">
          <motion.path
            d="M 100 50 Q 200 20 300 50"
            stroke="#ffd89b"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="50"
            r="8"
            fill="#667eea"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.circle
            cx="300"
            cy="50"
            r="8"
            fill="#ffd89b"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ 
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(255,216,155,0.1) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        <motion.p 
          style={{ 
            fontSize: '1.3rem', 
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
          animate={{ 
            textShadow: [
              '0 0 10px rgba(255,216,155,0.5)',
              '0 0 20px rgba(255,216,155,0.8)',
              '0 0 10px rgba(255,216,155,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Combina la velocidad local con la potencia de la nube.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Slide6