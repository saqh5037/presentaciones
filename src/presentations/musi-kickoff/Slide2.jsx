import { motion } from 'framer-motion'
import { Clock, Users, Target, Code, Calendar, MessageSquare } from 'lucide-react'

function Slide2() {
  const agendaItems = [
    {
      icon: Target,
      title: "Objetivos del Proyecto",
      description: "Visión y metas del catálogo de espacios",
      time: "10 min"
    },
    {
      icon: Code,
      title: "Alcance y Funcionalidades",
      description: "Características principales del sistema",
      time: "15 min"
    },
    {
      icon: Calendar,
      title: "Cronograma de Trabajo",
      description: "Fases y entregables del proyecto",
      time: "10 min"
    },
    {
      icon: Users,
      title: "Equipo y Responsabilidades",
      description: "Presentación del equipo WBI y FIFCO",
      time: "10 min"
    },
    {
      icon: MessageSquare,
      title: "Q&A y Próximos Pasos",
      description: "Preguntas y acciones inmediatas",
      time: "15 min"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Agenda del Día
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Clock size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
        Duración estimada: 1 hora
      </motion.p>

      <motion.div 
        className="agenda-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {agendaItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              className="agenda-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="agenda-number">{index + 1}</div>
              <div style={{ flex: 1 }}>
                <div className="agenda-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div style={{ 
                padding: '8px 16px',
                background: 'rgba(227, 30, 36, 0.1)',
                borderRadius: '20px',
                color: '#E31E24',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {item.time}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ 
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(227, 30, 36, 0.05)',
          borderRadius: '12px',
          borderLeft: '4px solid #E31E24'
        }}
      >
        <p style={{ margin: 0, color: '#666', fontSize: '1rem', textAlign: 'left' }}>
          <strong>Nota:</strong> Esta agenda es flexible y puede ajustarse según las necesidades de la reunión.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide2