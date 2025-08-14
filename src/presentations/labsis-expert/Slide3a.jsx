import { motion } from 'framer-motion'
import { Brain, Activity, TrendingUp, Zap } from 'lucide-react'

function Slide3a() {
  const capabilities = [
    { 
      title: 'Detección precoz',
      desc: 'Identifica patrones antes que métodos tradicionales',
      icon: TrendingUp,
      color: '#4caf50'
    },
    { 
      title: 'Diagnósticos diferenciales',
      desc: 'Sugiere múltiples posibilidades ordenadas por probabilidad',
      icon: Activity,
      color: '#667eea'
    },
    { 
      title: 'Casos raros',
      desc: 'Encuentra enfermedades poco frecuentes en segundos',
      icon: Zap,
      color: '#ffd89b'
    },
    { 
      title: 'Validación cruzada',
      desc: 'Confirma diagnósticos con evidencia de millones de casos',
      icon: Brain,
      color: '#9575CD'
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Diagnóstico Asistido por IA
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '1.1rem', color: '#ffd89b', margin: '20px 0 25px', textAlign: 'center' }}
      >
        🧠 Transformando la Medicina de Laboratorio
      </motion.p>

      {/* Ejemplo Práctico */}
      <motion.div
        className="feature-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginBottom: '20px', background: 'rgba(102, 126, 234, 0.1)', padding: '20px' }}
      >
        <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.2rem' }}>
          🔬 Ejemplo Práctico: Reconocimiento Inteligente
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px' }}>
            <strong style={{ color: '#ffd89b' }}>Paciente:</strong>
            <p style={{ margin: '5px 0' }}>Mujer, 35 años, fatiga crónica</p>
            <strong style={{ color: '#ffd89b', marginTop: '10px', display: 'block' }}>Laboratorio:</strong>
            <div style={{ fontSize: '0.95rem', marginTop: '5px' }}>
              <span style={{ color: '#ff6b6b' }}>TSH ↑</span>, 
              <span style={{ color: '#4caf50' }}> T4 ↓</span>, 
              <span style={{ color: '#ff6b6b' }}> Anti-TPO ↑</span>, 
              <span style={{ color: '#ff9800' }}> Colesterol ↑</span>
            </div>
          </div>
          
          <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '15px', borderRadius: '10px', border: '2px solid #4caf50' }}>
            <strong style={{ color: '#4caf50' }}>Resultado IA:</strong>
            <p style={{ margin: '10px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>
              "Hipotiroidismo autoinmune (Hashimoto)"
            </p>
            <span style={{ color: '#ffd89b' }}>Confianza: 92%</span>
            <p style={{ fontSize: '0.85rem', marginTop: '5px', opacity: 0.9 }}>
              Base: 15,847 casos similares
            </p>
          </div>
        </div>

        {/* Flujo animado */}
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Vector IA</span>
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
          <span>Análisis en tiempo real</span>
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            →
          </motion.span>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Diagnóstico</span>
        </motion.div>
      </motion.div>

      {/* Capacidades Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ marginBottom: '20px' }}
      >
        <h3 style={{ marginBottom: '15px', color: '#ffd89b', fontSize: '1.1rem' }}>Capacidades Avanzadas</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{ padding: '12px', background: 'rgba(0,0,0,0.4)' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icon size={22} color={cap.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: cap.color, fontSize: '0.95rem' }}>{cap.title}</strong>
                    <p style={{ fontSize: '0.85rem', marginTop: '3px', opacity: 0.9 }}>{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Resultados Comprobados */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        style={{ 
          background: 'linear-gradient(135deg, rgba(102,126,234,0.2), rgba(255,216,155,0.1))',
          padding: '15px',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        <h4 style={{ color: '#ffd89b', marginBottom: '12px', fontSize: '1rem' }}>📊 Resultados Comprobados</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', fontSize: '0.9rem' }}>
          <motion.div 
            style={{ textAlign: 'center' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50' }}>86.06%</div>
            <div style={{ fontSize: '0.8rem' }}>OpenBioLLM vs 64% GPT-4</div>
          </motion.div>
          <motion.div 
            style={{ textAlign: 'center' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>85-95%</div>
            <div style={{ fontSize: '0.8rem' }}>Detección anomalías</div>
          </motion.div>
          <motion.div 
            style={{ textAlign: 'center' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffd89b' }}>1000×</div>
            <div style={{ fontSize: '0.8rem' }}>Más rápido</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide3a