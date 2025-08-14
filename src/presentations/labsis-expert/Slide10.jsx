import { motion } from 'framer-motion'
import { Calendar, Settings, Rocket, CheckCircle } from 'lucide-react'

function Slide10() {
  const phases = [
    {
      icon: Settings,
      title: 'FASE 1: Fundación',
      duration: 'Meses 1-3',
      tasks: [
        'Instalación y configuración',
        'Implementación de la validación básica'
      ],
      color: '#667eea'
    },
    {
      icon: Rocket,
      title: 'FASE 2: Avance',
      duration: 'Meses 4-6',
      tasks: [
        'Activación de la IA y la búsqueda por similitud',
        'Integración con casos más complejos'
      ],
      color: '#ffd89b'
    },
    {
      icon: CheckCircle,
      title: 'FASE 3: Optimización',
      duration: 'Meses 7-9',
      tasks: [
        'Ajuste fino del sistema según nuestro flujo de trabajo',
        'Capacitación completa y puesta en marcha total'
      ],
      color: '#4caf50'
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nuestro Viaje Juntos
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginBottom: '40px', fontSize: '1.2rem', color: '#ffd89b' }}
      >
        Plan de Implementación
      </motion.p>

      {/* Timeline */}
      <div className="timeline">
        {/* Progress Line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(180deg, #667eea 0%, #ffd89b 50%, #4caf50 100%)',
            transform: 'translateX(-50%)'
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {phases.map((phase, index) => {
          const Icon = phase.icon
          const isLeft = index % 2 === 0
          
          return (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ 
                x: isLeft ? -100 : 100, 
                opacity: 0 
              }}
              animate={{ 
                x: 0, 
                opacity: 1 
              }}
              transition={{ 
                delay: 0.7 + index * 0.3, 
                duration: 0.5 
              }}
              style={{
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                textAlign: isLeft ? 'right' : 'left'
              }}
            >
              {isLeft && (
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                  style={{ marginRight: '30px' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px',
                    justifyContent: 'flex-end'
                  }}>
                    <div>
                      <h4 style={{ color: phase.color }}>{phase.title}</h4>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '10px'
                      }}>
                        {phase.duration}
                      </p>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        fontSize: '0.95rem'
                      }}>
                        {phase.tasks.map((task, tIndex) => (
                          <motion.li
                            key={tIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + index * 0.3 + tIndex * 0.1 }}
                            style={{ marginBottom: '5px' }}
                          >
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <Icon size={40} color={phase.color} />
                  </div>
                </motion.div>
              )}
              
              <motion.div
                className="timeline-dot"
                style={{ 
                  background: phase.color,
                  position: 'relative',
                  zIndex: 2
                }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    `0 0 0 0 ${phase.color}40`,
                    `0 0 0 15px ${phase.color}20`,
                    `0 0 0 0 ${phase.color}40`
                  ]
                }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity
                }}
              />
              
              {!isLeft && (
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                  style={{ marginLeft: '30px' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px' 
                  }}>
                    <Icon size={40} color={phase.color} />
                    <div>
                      <h4 style={{ color: phase.color }}>{phase.title}</h4>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '10px'
                      }}>
                        {phase.duration}
                      </p>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        fontSize: '0.95rem'
                      }}>
                        {phase.tasks.map((task, tIndex) => (
                          <motion.li
                            key={tIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + index * 0.3 + tIndex * 0.1 }}
                            style={{ marginBottom: '5px' }}
                          >
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ 
          marginTop: '50px',
          padding: '25px',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(76,175,80,0.1) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        <Calendar size={30} color="#ffd89b" style={{ marginBottom: '10px' }} />
        <motion.p 
          style={{ 
            fontSize: '1.3rem', 
            color: '#fff',
            fontWeight: 'bold'
          }}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Una transición gradual, colaborativa y sin sorpresas.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Slide10