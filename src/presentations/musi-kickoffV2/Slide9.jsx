import { motion } from 'framer-motion'

function Slide9() {
  const steps = [
    { icon: '📄', title: 'Firma de Contrato', description: 'Formalización legal del proyecto', date: 'Esta semana' },
    { icon: '👥', title: 'Reunión de Requerimientos', description: 'Sesión detallada con usuarios clave', date: 'Próxima semana' },
    { icon: '📅', title: 'Cronograma Detallado', description: 'Definición de milestones y entregables', date: 'Próxima semana' },
    { icon: '💻', title: 'Inicio de Desarrollo', description: 'Configuración de ambiente y primeros módulos', date: 'Semana 3' },
    { icon: '✅', title: 'Primera Demo', description: 'Presentación de avances iniciales', date: 'Fin de Agosto' }
  ]

  return (
    <div className="slide-fifco slide9-nextsteps">
      <div className="nextsteps-container">
        <div className="nextsteps-header">
          <motion.h1
            className="nextsteps-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Próximos Pasos
          </motion.h1>
          <motion.p
            className="nextsteps-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Acciones inmediatas para iniciar el proyecto
          </motion.p>
        </div>

        <div className="steps-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <span className="step-date">{step.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="commitment-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="commitment-title">🎯 Compromiso de Éxito</h2>
          <p className="commitment-text">
            En WBI Innovations estamos comprometidos con el éxito de este proyecto. 
            Trabajaremos de la mano con el equipo de FIFCO para asegurar la entrega 
            de una solución que supere las expectativas.
          </p>
          <motion.p
            style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ¡Comencemos este viaje juntos! 🚀
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide9