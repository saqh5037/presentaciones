import { motion } from 'framer-motion'
import { Database, Search, Zap, GitBranch } from 'lucide-react'

function Slide3b() {
  const comparisons = [
    { sql: 'Búsqueda exacta', vector: 'Búsqueda por similitud', color: '#667eea' },
    { sql: '"Hemoglobina = 12.5"', vector: '"Casos parecidos a este perfil"', color: '#9575CD' },
    { sql: 'Rígida', vector: 'Flexible y adaptativa', color: '#ffd89b' },
    { sql: 'Lenta para patrones', vector: 'Ultrarrápida para IA', color: '#4caf50' }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bases de Datos Vectoriales
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '1.1rem', color: '#ffd89b', margin: '20px 0 25px', textAlign: 'center' }}
      >
        🔢 Convirtiendo Datos Médicos en Inteligencia
      </motion.p>

      {/* Concepto Fundamental - Flujo Visual */}
      <motion.div
        className="feature-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: '20px', background: 'rgba(126, 87, 194, 0.1)', padding: '15px' }}
      >
        <h3 style={{ color: '#9575CD', marginBottom: '15px', fontSize: '1.1rem' }}>Concepto Fundamental</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          {/* Datos Tradicionales */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              flex: 1,
              background: 'rgba(0,0,0,0.4)',
              padding: '15px',
              borderRadius: '10px',
              fontSize: '0.9rem'
            }}
          >
            <strong style={{ color: '#667eea' }}>Datos Tradicionales</strong>
            <div style={{ marginTop: '10px', fontFamily: 'monospace' }}>
              <div>Hemoglobina: 12.5 g/dL</div>
              <div>Glucosa: 180 mg/dL</div>
              <div>Edad: 45 años</div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: '#ffd89b', fontSize: '2rem' }}
          >
            →
          </motion.div>

          {/* Vectores */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ 
              flex: 1,
              background: 'rgba(102, 126, 234, 0.2)',
              padding: '15px',
              borderRadius: '10px',
              fontSize: '0.9rem'
            }}
          >
            <strong style={{ color: '#ffd89b' }}>Vectores Numéricos</strong>
            <div style={{ marginTop: '10px', fontFamily: 'monospace', color: '#7EC8E3' }}>
              <div>[0.75, 0.23, 0.91, ...]</div>
              <div>[0.85, 0.67, 0.12, ...]</div>
              <div>[0.45, 0.89, 0.34, ...]</div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            style={{ color: '#ffd89b', fontSize: '2rem' }}
          >
            →
          </motion.div>

          {/* Resultado */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ 
              flex: 1,
              background: 'rgba(76, 175, 80, 0.2)',
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid #4caf50'
            }}
          >
            <strong style={{ color: '#4caf50' }}>Búsqueda Inteligente</strong>
            <div style={{ marginTop: '10px' }}>
              Casos similares en
              <span style={{ color: '#ffd89b', fontWeight: 'bold' }}> milisegundos</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Cómo Funciona */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ marginBottom: '20px' }}
      >
        <h3 style={{ color: '#ffd89b', marginBottom: '15px', fontSize: '1.1rem' }}>¿Cómo Funciona la Magia?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: 'center', padding: '15px' }}
          >
            <GitBranch size={35} color="#667eea" style={{ marginBottom: '8px' }} />
            <strong style={{ color: '#667eea', fontSize: '0.95rem' }}>Vectorización</strong>
            <p style={{ fontSize: '0.8rem', marginTop: '8px' }}>
              Cada paciente es un "punto" matemático multidimensional
            </p>
          </motion.div>
          
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: 'center', padding: '15px' }}
          >
            <Search size={35} color="#9575CD" style={{ marginBottom: '8px' }} />
            <strong style={{ color: '#9575CD', fontSize: '0.95rem' }}>Similitud</strong>
            <p style={{ fontSize: '0.8rem', marginTop: '8px' }}>
              Casos similares están "cerca" en el espacio vectorial
            </p>
          </motion.div>
          
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: 'center', padding: '15px' }}
          >
            <Zap size={35} color="#ffd89b" style={{ marginBottom: '8px' }} />
            <strong style={{ color: '#ffd89b', fontSize: '0.95rem' }}>Búsqueda</strong>
            <p style={{ fontSize: '0.8rem', marginTop: '8px' }}>
              Algoritmos encuentran vecinos cercanos instantáneamente
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Comparación SQL vs Vector */}
      <motion.div
        className="feature-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        style={{ marginBottom: '20px', background: 'rgba(0,0,0,0.5)', padding: '15px' }}
      >
        <h3 style={{ color: '#ffd89b', marginBottom: '15px', fontSize: '1.1rem' }}>Ventajas vs Métodos Tradicionales</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#ff6b6b', marginBottom: '15px' }}>Base de Datos SQL</h4>
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
                style={{ 
                  padding: '8px',
                  marginBottom: '8px',
                  background: 'rgba(255, 107, 107, 0.1)',
                  borderRadius: '5px',
                  borderLeft: '3px solid #ff6b6b'
                }}
              >
                {item.sql}
              </motion.div>
            ))}
          </div>
          
          <div>
            <h4 style={{ color: '#4caf50', marginBottom: '15px' }}>Base de Datos Vectorial</h4>
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
                style={{ 
                  padding: '8px',
                  marginBottom: '8px',
                  background: 'rgba(76, 175, 80, 0.1)',
                  borderRadius: '5px',
                  borderLeft: '3px solid #4caf50',
                  color: item.color
                }}
              >
                {item.vector}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tecnología de Vanguardia */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ 
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(255,216,155,0.1))',
          padding: '15px',
          borderRadius: '15px'
        }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ textAlign: 'center' }}
        >
          <strong style={{ color: '#667eea', fontSize: '0.95rem' }}>pgvector</strong>
          <p style={{ fontSize: '0.8rem' }}>9× mejor rendimiento</p>
        </motion.div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          style={{ textAlign: 'center' }}
        >
          <strong style={{ color: '#9575CD', fontSize: '0.95rem' }}>Weaviate</strong>
          <p style={{ fontSize: '0.8rem' }}>HIPAA-compliant</p>
        </motion.div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          style={{ textAlign: 'center' }}
        >
          <strong style={{ color: '#ffd89b', fontSize: '0.95rem' }}>50M+ vectores</strong>
          <p style={{ fontSize: '0.8rem' }}>Capacidad enterprise</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide3b