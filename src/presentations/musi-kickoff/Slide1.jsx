import { motion } from 'framer-motion'

function Slide1() {
  return (
    <div className="musi-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center' }}
      >
        {/* Logos */}
        <motion.div 
          className="logo-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src="/musi/Desktop - 49.svg" alt="Musi" style={{ height: '100px' }} />
          <motion.span 
            style={{ fontSize: '3rem', color: '#ccc', margin: '0 20px' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ×
          </motion.span>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#333', margin: 0, fontSize: '1.8rem' }}>WBI Innovations</h3>
            <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>We Build IT</p>
          </div>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: '4rem', marginTop: '60px' }}
        >
          Kickoff Meeting
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ color: '#555', fontWeight: '400', fontSize: '2rem' }}
        >
          Proyecto Catálogo de Espacios
        </motion.h2>

        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ marginTop: '30px', fontSize: '1.3rem' }}
        >
          Tiendas Musi & Mussmanni
        </motion.p>

        {/* Detalles del proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '60px',
            padding: '25px 40px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'inline-block'
          }}
        >
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>REFERENCIA</p>
              <p style={{ margin: '5px 0', color: '#333', fontSize: '1.1rem', fontWeight: '600' }}>RFP-IMS-2025</p>
            </div>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>FECHA</p>
              <p style={{ margin: '5px 0', color: '#333', fontSize: '1.1rem', fontWeight: '600' }}>14 de Agosto, 2025</p>
            </div>
            <div>
              <p style={{ margin: '5px 0', color: '#999', fontSize: '0.9rem' }}>DURACIÓN</p>
              <p style={{ margin: '5px 0', color: '#333', fontSize: '1.1rem', fontWeight: '600' }}>Agosto - Diciembre</p>
            </div>
          </div>
        </motion.div>

        {/* Animated dots */}
        <motion.div
          style={{ marginTop: '40px' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ color: '#E31E24', fontSize: '2rem' }}>•••</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide1