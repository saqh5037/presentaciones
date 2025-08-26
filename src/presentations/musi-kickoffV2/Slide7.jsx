import { motion } from 'framer-motion'

function Slide7() {
  const phases = [
    { month: 'Ago-Sep', title: 'Análisis y Diseño', date: 'Agosto - Septiembre', color: '#4A90E2' },
    { month: 'Sep-Oct', title: 'Desarrollo Backend', date: 'Septiembre - Octubre', color: '#5BC0DE' },
    { month: 'Oct-Nov', title: 'Desarrollo Frontend', date: 'Octubre - Noviembre', color: '#4CAF50' },
    { month: 'Octubre', title: 'Carga de Data', date: 'Octubre', color: '#FF9800' },
    { month: 'Nov', title: 'Capacitación', date: 'Noviembre', color: '#9C27B0' },
    { month: 'Nov', title: 'Testing y QA', date: 'Noviembre', color: '#E91E63' },
    { month: '17 Nov', title: 'Implementación Parcial', date: '17 Noviembre 2025', color: '#1B5DAE', highlight: true },
    { month: 'Dic', title: 'Desarrollo Mejoras', date: 'Diciembre', color: '#607D8B' },
    { month: 'Dic', title: 'Testing Final', date: 'Diciembre', color: '#795548' },
    { month: 'Ene 2026', title: 'Pase a Producción', date: 'Enero 2026', color: '#1B5DAE', highlight: true }
  ]

  return (
    <div className="slide-fifco slide7-timeline">
      <div className="timeline-container">
        <div className="timeline-header">
          <motion.h1
            className="timeline-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'var(--text-h1)',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            Cronograma del Proyecto
          </motion.h1>
          <motion.p
            className="timeline-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            10 Fases | Agosto 2025 - Enero 2026
          </motion.p>
        </div>

        <div className="timeline-track">
          <motion.div 
            className="timeline-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '40px',
              left: '5%',
              right: '5%',
              height: '3px',
              background: 'linear-gradient(90deg, var(--fifco-blue-dark) 0%, var(--fifco-cyan) 50%, var(--fifco-blue-dark) 100%)',
              zIndex: 1,
              opacity: 0.3
            }}
          />
          <div className="timeline-phases">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="phase-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                <motion.div 
                  className="phase-circle"
                  style={{ 
                    borderColor: phase.color,
                    background: phase.highlight 
                      ? `linear-gradient(135deg, ${phase.color}15 0%, ${phase.color}30 100%)`
                      : 'var(--fifco-white)',
                    boxShadow: phase.highlight 
                      ? `0 8px 25px ${phase.color}40`
                      : '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0 10px 30px ${phase.color}50`
                  }}
                >
                  {index + 1}
                </motion.div>
                <div className="phase-content" style={{
                  background: 'var(--fifco-white)',
                  padding: '1rem',
                  borderRadius: '12px',
                  boxShadow: phase.highlight 
                    ? `0 5px 20px ${phase.color}30`
                    : '0 3px 10px rgba(0,0,0,0.08)',
                  border: `2px solid ${phase.highlight ? phase.color : 'transparent'}`,
                  transition: 'all 0.3s ease'
                }}>
                  <h3 className="phase-month" style={{ 
                    color: phase.color,
                    fontSize: phase.highlight ? '1.1rem' : '0.95rem',
                    fontWeight: phase.highlight ? 'bold' : '600',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>{phase.month}</h3>
                  <p className="phase-title" style={{
                    fontSize: phase.highlight ? '1.05rem' : '0.95rem',
                    fontWeight: phase.highlight ? '600' : '500',
                    color: 'var(--fifco-dark)',
                    marginBottom: '0.3rem',
                    lineHeight: '1.3'
                  }}>{phase.title}</p>
                  <p className="phase-weeks" style={{
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    color: 'var(--fifco-dark)',
                    fontStyle: 'italic'
                  }}>{phase.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem'
          }}
        >
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px var(--fifco-shadow)'
          }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--fifco-blue-dark)', fontWeight: 'bold' }}>6</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>Meses de desarrollo</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px var(--fifco-shadow)'
          }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--fifco-cyan)', fontWeight: 'bold' }}>10</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>Fases del proyecto</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px var(--fifco-shadow)'
          }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--fifco-blue-dark)', fontWeight: 'bold' }}>17 Nov</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>Implementación Parcial</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide7