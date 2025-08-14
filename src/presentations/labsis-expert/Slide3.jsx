import { motion } from 'framer-motion'
import { Cpu, Zap, CheckCircle, XCircle } from 'lucide-react'

function Slide3() {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La Solución: Autovalidación Inteligente
      </motion.h2>

      {/* Animated Flow Diagram */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ margin: '40px 0' }}
      >
        <svg width="100%" height="150" viewBox="0 0 950 150">
          {/* Input */}
          <motion.rect
            x="20" y="50" width="160" height="50"
            fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" rx="10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <text x="100" y="80" fill="white" textAnchor="middle" fontSize="14">
            Resultados de Equipos
          </text>

          {/* Arrow 1 */}
          <motion.path
            d="M 180 75 L 250 75"
            stroke="#ffd89b" strokeWidth="3"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />

          {/* Labsis (nueva caja) */}
          <motion.rect
            x="250" y="45" width="130" height="60"
            fill="rgba(126,87,194,0.3)" stroke="#7E57C2" strokeWidth="2" rx="12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          />
          <text x="315" y="80" fill="white" textAnchor="middle" fontSize="16" fontWeight="bold">
            Labsis
          </text>

          {/* Arrow 2 */}
          <motion.path
            d="M 380 75 L 450 75"
            stroke="#ffd89b" strokeWidth="3"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />

          {/* Labsis Expert */}
          <motion.rect
            x="450" y="40" width="180" height="70"
            fill="rgba(102,126,234,0.3)" stroke="#667eea" strokeWidth="3" rx="15"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          />
          <text x="540" y="80" fill="white" textAnchor="middle" fontSize="18" fontWeight="bold">
            Labsis Expert
          </text>

          {/* Arrow 3 */}
          <motion.path
            d="M 630 75 L 700 75"
            stroke="#ffd89b" strokeWidth="3"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />

          {/* Outputs */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <rect x="700" y="20" width="150" height="40" fill="rgba(76,175,80,0.3)" stroke="#4caf50" strokeWidth="2" rx="8" />
            <text x="775" y="45" fill="white" textAnchor="middle" fontSize="12">
              Resultados Validados
            </text>
          </motion.g>

          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <rect x="700" y="90" width="150" height="40" fill="rgba(255,152,0,0.3)" stroke="#ff9800" strokeWidth="2" rx="8" />
            <text x="775" y="115" fill="white" textAnchor="middle" fontSize="12">
              Casos para Revisión
            </text>
          </motion.g>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#ffd89b" />
            </marker>
          </defs>
        </svg>
      </motion.div>

      {/* What it is / What it's not */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '50px' }}>
        <motion.div
          className="feature-box"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle color="#4caf50" />
            ¿Qué es Labsis Expert?
          </h3>
          <p>Es un asistente inteligente que automatiza la revisión de resultados normales y predecibles.</p>
        </motion.div>

        <motion.div
          className="feature-box"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <XCircle color="#ff6b6b" />
            ¿Qué NO es?
          </h3>
          <p>No es un reemplazo del bioanalista. Es una herramienta para filtrar el ruido y permitirte concentrar en lo que realmente importa.</p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ 
          marginTop: '30px', 
          fontSize: '1.3rem', 
          color: '#ffd89b',
          fontWeight: '500'
        }}
      >
        <Zap size={25} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
        Libera resultados seguros automáticamente. Señala los complejos para tu análisis experto.
      </motion.p>
    </div>
  )
}

export default Slide3