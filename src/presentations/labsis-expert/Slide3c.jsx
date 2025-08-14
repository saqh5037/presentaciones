import { motion } from 'framer-motion'
import { Server, Cloud, Shield, Layers } from 'lucide-react'

function Slide3c() {
  const stackLayers = [
    {
      name: 'LABSIS EXPERT',
      desc: 'Interfaz Principal',
      color: '#ffd89b',
      icon: '🎯',
      delay: 0.3
    },
    {
      name: 'FastAPI + Docker/Kubernetes',
      desc: 'Multi-tenant, HIPAA-compliant',
      color: '#667eea',
      icon: '🚀',
      delay: 0.5
    },
    {
      name: 'PostgreSQL + pgvector',
      desc: 'Datos estructurados + Validación rutinaria',
      color: '#4caf50',
      icon: '📊',
      delay: 0.7
    },
    {
      name: 'Weaviate',
      desc: 'Búsquedas complejas + Casos similares',
      color: '#9575CD',
      icon: '🔍',
      delay: 0.9
    },
    {
      name: 'IA Híbrida: Local + Cloud',
      desc: 'PubMedBERT + OpenBioLLM + GPT-4',
      color: '#7EC8E3',
      icon: '🧠',
      delay: 1.1
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Implementación en Labsis Expert
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '1.1rem', color: '#ffd89b', margin: '20px 0 25px', textAlign: 'center' }}
      >
        🎯 Arquitectura Técnica Propuesta
      </motion.p>

      {/* Stack Tecnológico Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: '20px' }}
      >
        <h3 style={{ color: '#667eea', marginBottom: '15px', textAlign: 'center', fontSize: '1.1rem' }}>
          Stack Tecnológico Híbrido
        </h3>
        
        <div style={{ position: 'relative', maxWidth: '650px', margin: '0 auto' }}>
          {stackLayers.map((layer, index) => (
            <motion.div
              key={index}
              className="feature-box"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: layer.delay, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.02, x: 10 }}
              style={{
                marginBottom: index < stackLayers.length - 1 ? '10px' : '0',
                background: `linear-gradient(135deg, ${layer.color}20, rgba(0,0,0,0.4))`,
                border: `2px solid ${layer.color}`,
                padding: '12px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background line */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)`,
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: layer.delay }}
              />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>{layer.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: layer.color, fontSize: '0.95rem' }}>
                    {layer.name}
                  </strong>
                  <p style={{ marginTop: '3px', opacity: 0.9, fontSize: '0.85rem' }}>
                    {layer.desc}
                  </p>
                </div>
                {index === 2 && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Server size={30} color={layer.color} />
                  </motion.div>
                )}
                {index === 3 && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield size={30} color={layer.color} />
                  </motion.div>
                )}
                {index === 4 && (
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Cloud size={30} color={layer.color} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Connection lines between layers */}
          {stackLayers.slice(0, -1).map((_, index) => (
            <motion.div
              key={`connector-${index}`}
              style={{
                position: 'absolute',
                left: '50%',
                top: `${(index + 1) * 85 - 15}px`,
                width: '2px',
                height: '15px',
                background: '#ffd89b',
                transform: 'translateX(-50%)',
                zIndex: -1
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Características clave */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px',
          marginTop: '15px'
        }}
      >
        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.05 }}
          style={{ 
            textAlign: 'center',
            padding: '12px',
            background: 'rgba(76, 175, 80, 0.2)'
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚡</div>
          <strong style={{ color: '#4caf50', fontSize: '0.9rem' }}>Alta Performance</strong>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>
            Procesamiento paralelo masivo
          </p>
        </motion.div>

        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.05 }}
          style={{ 
            textAlign: 'center',
            padding: '12px',
            background: 'rgba(102, 126, 234, 0.2)'
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔒</div>
          <strong style={{ color: '#667eea', fontSize: '0.9rem' }}>Seguridad Total</strong>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>
            HIPAA & ISO 27001 compliant
          </p>
        </motion.div>

        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.05 }}
          style={{ 
            textAlign: 'center',
            padding: '12px',
            background: 'rgba(255, 216, 155, 0.2)'
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔄</div>
          <strong style={{ color: '#ffd89b', fontSize: '0.9rem' }}>Escalable</strong>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>
            De 100 a 1M+ muestras/día
          </p>
        </motion.div>
      </motion.div>

      {/* Integration highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          marginTop: '15px',
          padding: '12px',
          background: 'linear-gradient(135deg, rgba(126, 87, 194, 0.2), rgba(102, 126, 234, 0.1))',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          textAlign: 'center'
        }}
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: '#ffd89b', fontSize: '0.95rem' }}
        >
          ✨ Integración perfecta con la infraestructura existente de Labsis
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Slide3c