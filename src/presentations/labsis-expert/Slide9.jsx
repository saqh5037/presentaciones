import { motion } from 'framer-motion'
import { Building, Clock, TrendingUp, Award } from 'lucide-react'

function Slide9() {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ROI y Valor
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '1.1rem', color: '#ffd89b', margin: '20px 0 25px', textAlign: 'center' }}
      >
        Esta tecnología ya está transformando laboratorios
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
        {/* Singapore Hospital */}
        <motion.div
          className="feature-box"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '5px',
              height: '100%',
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)'
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', paddingLeft: '20px' }}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Building size={60} color="#667eea" />
            </motion.div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#667eea', marginBottom: '15px' }}>
                Hospital Universitario de Singapur
              </h3>
              
              <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                <motion.div
                  className="stat-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  <Clock size={25} color="#ffd89b" style={{ marginBottom: '10px' }} />
                  <div className="stat-number">3h → 60min</div>
                  <div className="stat-label">Tiempo de entrega</div>
                </motion.div>
                
                <motion.div
                  className="stat-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <Award size={25} color="#4caf50" style={{ marginBottom: '10px' }} />
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Automatizado</div>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                style={{ marginTop: '15px', fontSize: '0.95rem' }}
              >
                Primer laboratorio 100% automatizado de la región.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Mayo Clinic */}
        <motion.div
          className="feature-box"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '5px',
              height: '100%',
              background: 'linear-gradient(180deg, #ffd89b 0%, #19547b 100%)'
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', paddingLeft: '20px' }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Building size={60} color="#ffd89b" />
            </motion.div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#ffd89b', marginBottom: '15px' }}>
                Mayo Clinic
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p style={{ marginBottom: '15px' }}>
                  Uso de algoritmos para:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <TrendingUp size={20} color="#4caf50" />
                    <span>Mejorar la atención al paciente</span>
                  </motion.li>
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <TrendingUp size={20} color="#4caf50" />
                    <span>Aumentar la eficiencia operativa</span>
                  </motion.li>
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <TrendingUp size={20} color="#4caf50" />
                    <span>Reducir costos significativamente</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        style={{ 
          marginTop: '50px',
          padding: '30px',
          background: 'linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(255,216,155,0.1) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        <motion.p 
          style={{ 
            fontSize: '1.3rem', 
            color: '#ffd89b',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          La autovalidación exitosa es una realidad, no una promesa.
        </motion.p>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
          Únete a los líderes mundiales en innovación de laboratorio clínico.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide9