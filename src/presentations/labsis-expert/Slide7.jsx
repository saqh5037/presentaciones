import { motion } from 'framer-motion'
import { Search, Database, MousePointer, Lightbulb } from 'lucide-react'

function Slide7() {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Una Herramienta Revolucionaria: Búsqueda por Similitud
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '40px'
        }}
      >
        <Search size={40} color="#ffd89b" />
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          ¿Te has encontrado con un caso que nunca habías visto?
        </p>
      </motion.div>

      {/* Interactive Demo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ margin: '40px 0' }}
      >
        <svg width="100%" height="300" viewBox="0 0 800 300">
          {/* Current Case */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="50" y="100" width="150" height="100" fill="rgba(255,107,107,0.2)" stroke="#ff6b6b" strokeWidth="2" rx="10" />
            <text x="125" y="130" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Caso Actual</text>
            <text x="125" y="155" fill="white" textAnchor="middle" fontSize="12">Perfil inusual</text>
            <text x="125" y="175" fill="white" textAnchor="middle" fontSize="12">detectado</text>
          </motion.g>

          {/* Click Animation */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.circle
              cx="250"
              cy="150"
              r="15"
              fill="#ffd89b"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <MousePointer size={20} x="240" y="140" color="white" />
            <text x="250" y="190" fill="#ffd89b" textAnchor="middle" fontSize="12">Click</text>
          </motion.g>

          {/* Database Search */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <rect x="350" y="50" width="180" height="200" fill="rgba(102,126,234,0.1)" stroke="#667eea" strokeWidth="2" rx="15" />
            <Database size={40} x="420" y="70" color="#667eea" />
            <text x="440" y="130" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Base de Datos</text>
            <text x="440" y="150" fill="white" textAnchor="middle" fontSize="12">Anónima</text>
            
            {/* Animated search lines */}
            <motion.line
              x1="440" y1="170" x2="440" y2="230"
              stroke="#ffd89b" strokeWidth="2"
              strokeDasharray="5 5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.g>

          {/* Similar Cases */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <rect x="600" y="40" width="120" height="60" fill="rgba(76,175,80,0.2)" stroke="#4caf50" strokeWidth="2" rx="8" />
            <text x="660" y="65" fill="white" textAnchor="middle" fontSize="12">Caso Similar 1</text>
            <text x="660" y="85" fill="#4caf50" textAnchor="middle" fontSize="11">95% match</text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <rect x="600" y="120" width="120" height="60" fill="rgba(76,175,80,0.2)" stroke="#4caf50" strokeWidth="2" rx="8" />
            <text x="660" y="145" fill="white" textAnchor="middle" fontSize="12">Caso Similar 2</text>
            <text x="660" y="165" fill="#4caf50" textAnchor="middle" fontSize="11">87% match</text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <rect x="600" y="200" width="120" height="60" fill="rgba(76,175,80,0.2)" stroke="#4caf50" strokeWidth="2" rx="8" />
            <text x="660" y="225" fill="white" textAnchor="middle" fontSize="12">Caso Similar 3</text>
            <text x="660" y="245" fill="#4caf50" textAnchor="middle" fontSize="11">82% match</text>
          </motion.g>

          {/* Arrows */}
          <motion.path
            d="M 200 150 L 350 150"
            stroke="#ffd89b" strokeWidth="3"
            markerEnd="url(#arrowhead2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />

          <motion.path
            d="M 530 150 L 600 70 M 530 150 L 600 150 M 530 150 L 600 230"
            stroke="#4caf50" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />

          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#ffd89b" />
            </marker>
          </defs>
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ fontSize: '1.1rem', marginBottom: '30px' }}
      >
        Con un solo clic, Labsis Expert puede:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      >
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{ 
              marginBottom: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              padding: '15px',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Database size={25} color="#667eea" />
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>Buscar en una base de datos totalmente anónima otros pacientes con perfiles de laboratorio similares.</span>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.9 }}
            style={{ 
              marginBottom: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              padding: '15px',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Lightbulb size={25} color="#ffd89b" />
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>Proporcionar pistas y contexto basados en casos históricos.</span>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              padding: '15px',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Search size={25} color="#4caf50" />
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>Ayudar a validar resultados inesperados o guiar la interpretación.</span>
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{ 
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,216,155,0.1)',
          borderRadius: '20px',
          border: '2px solid rgba(255,216,155,0.3)'
        }}
      >
        <p style={{ fontSize: '1.2rem', color: '#ffd89b', fontWeight: 'bold' }}>
          Transforma la duda en una decisión informada.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide7