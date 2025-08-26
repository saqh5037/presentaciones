import { motion } from 'framer-motion'
import { Calendar, Users, Target, Layout, Clock, CheckCircle, MessageCircle, ChartBar } from 'lucide-react'

function Slide2() {
  const agendaItems = [
    {
      icon: '👋',
      number: '1',
      title: "Introducción y Bienvenida",
      description: "Presentación de equipos y objetivos de la reunión",
      color: '#1B5DAE'
    },
    {
      icon: '🌍',
      number: '2',
      title: "Visión General del Proyecto",
      description: "Contexto, necesidades y oportunidades",
      color: '#4A90E2'
    },
    {
      icon: '🎯',
      number: '3',
      title: "Objetivos y Alcance",
      description: "Metas específicas y límites del proyecto",
      color: '#5BC0DE'
    },
    {
      icon: '⚙️',
      number: '4',
      title: "Funcionalidades Clave",
      description: "Demostración de capacidades principales",
      color: '#7BA7E1'
    },
    {
      icon: '📅',
      number: '5',
      title: "Cronograma y Fases",
      description: "Timeline detallado de implementación",
      color: '#1B5DAE'
    },
    {
      icon: '👥',
      number: '6',
      title: "Equipo de Trabajo",
      description: "Roles y responsabilidades",
      color: '#4A90E2'
    },
    {
      icon: '🚀',
      number: '7',
      title: "Próximos Pasos",
      description: "Acciones inmediatas y compromisos",
      color: '#5BC0DE'
    },
    {
      icon: '💬',
      number: '8',
      title: "Sesión de Preguntas",
      description: "Espacio para dudas y aclaraciones",
      color: '#7BA7E1'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="slide-fifco slide2-agenda" style={{
      background: 'linear-gradient(135deg, var(--fifco-white) 0%, var(--fifco-gray-light) 100%)'
    }}>
      <div className="fifco-container">
        <div className="agenda-header">
          <motion.h1
            className="agenda-title"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textShadow: '3px 3px 6px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}
          >
            Agenda de la Reunión
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--fifco-dark)',
              opacity: 0.8,
              marginTop: '1rem'
            }}
          >
            <Clock size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Duración estimada: 60 minutos
          </motion.p>
        </div>

        <motion.div 
          className="agenda-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              className="agenda-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="agenda-number" style={{
                background: `linear-gradient(135deg, ${item.color} 0%, var(--fifco-cyan) 100%)`
              }}>
                {item.number}
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 className="agenda-card-title">
                  <span style={{ 
                    fontSize: '1.5rem', 
                    marginRight: '0.75rem',
                    display: 'inline-block'
                  }}>
                    {item.icon}
                  </span>
                  {item.title}
                </h3>
                <p className="agenda-card-description">
                  {item.description}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--fifco-blue-medium)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--fifco-blue-dark) 0%, var(--fifco-blue-medium) 100%)',
            borderRadius: '20px',
            color: 'var(--fifco-white)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          
          <p style={{ 
            margin: 0, 
            fontSize: '1.1rem',
            position: 'relative',
            zIndex: 1
          }}>
            <strong>Objetivo de hoy:</strong> Alinear expectativas y establecer las bases 
            para una implementación exitosa del sistema de gestión de espacios comerciales.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2