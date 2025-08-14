import { motion } from 'framer-motion'
import { ArrowRight, FileText, Users, Calendar, Code, CheckSquare } from 'lucide-react'

function Slide9() {
  const nextSteps = [
    {
      icon: FileText,
      title: "Firma de Contrato",
      description: "Formalización legal del proyecto",
      date: "Semana 1",
      status: "urgent"
    },
    {
      icon: Users,
      title: "Reunión de Requerimientos",
      description: "Sesión detallada con usuarios clave",
      date: "Semana 2",
      status: "upcoming"
    },
    {
      icon: Calendar,
      title: "Cronograma Detallado",
      description: "Definición de milestones y entregables",
      date: "Semana 2",
      status: "upcoming"
    },
    {
      icon: Code,
      title: "Inicio de Desarrollo",
      description: "Configuración de ambiente y primeros módulos",
      date: "Semana 3",
      status: "planned"
    },
    {
      icon: CheckSquare,
      title: "Primera Demo",
      description: "Presentación de avances iniciales",
      date: "Semana 4",
      status: "planned"
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'urgent': return '#E31E24'
      case 'upcoming': return '#ff9800'
      case 'planned': return '#4CAF50'
      default: return '#999'
    }
  }

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Próximos Pasos
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Acciones inmediatas para iniciar el proyecto
      </motion.p>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px',
          maxWidth: '1100px',
          margin: '40px auto'
        }}
      >
        {nextSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${getStatusColor(step.status)}`,
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${getStatusColor(step.status)}22, ${getStatusColor(step.status)}44)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={24} color={getStatusColor(step.status)} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#333', marginBottom: '8px', fontSize: '1.1rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '10px', textAlign: 'left' }}>
                    {step.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: `${getStatusColor(step.status)}22`,
                    color: getStatusColor(step.status),
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {step.date}
                  </span>
                </div>
                <ArrowRight size={20} color="#ccc" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '800px',
          margin: '40px auto',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '3px solid #E31E24',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #E31E24 0%, #ff6b6b 100%)'
          }}
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.h3 
          style={{ 
            fontSize: '1.8rem', 
            marginBottom: '20px',
            color: '#E31E24',
            fontWeight: '700'
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎯 Compromiso de Éxito
        </motion.h3>
        <p style={{ 
          fontSize: '1.15rem', 
          lineHeight: '1.8', 
          marginBottom: '25px',
          color: '#333',
          fontWeight: '400'
        }}>
          En <strong style={{ color: '#E31E24' }}>WBI Innovations</strong> estamos comprometidos con el éxito de este proyecto. 
          Trabajaremos de la mano con el equipo de <strong style={{ color: '#E31E24' }}>FIFCO</strong> para asegurar la entrega 
          de una solución que <strong style={{ color: '#E31E24' }}>supere las expectativas</strong>.
        </p>
        <motion.button 
          className="cta-button"
          style={{ 
            background: 'linear-gradient(135deg, #E31E24 0%, #ff6b6b 100%)', 
            color: 'white',
            marginTop: '10px',
            fontSize: '1.2rem',
            padding: '20px 50px'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ¡Comencemos este viaje juntos! 🚀
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Slide9