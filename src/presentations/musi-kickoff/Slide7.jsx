import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Clock, Rocket, ArrowRight } from 'lucide-react'

function Slide7() {
  const phases = [
    {
      month: "Agosto",
      title: "Análisis y Diseño",
      week: "Semanas 1-4",
      tasks: [
        "Levantamiento de requerimientos",
        "Diseño de arquitectura",
        "Creación de mockups"
      ],
      status: "active",
      color: "#4CAF50"
    },
    {
      month: "Septiembre",
      title: "Desarrollo Backend",
      week: "Semanas 5-8",
      tasks: [
        "Base de datos",
        "APIs REST",
        "Lógica de negocio"
      ],
      status: "pending",
      color: "#2196F3"
    },
    {
      month: "Octubre",
      title: "Desarrollo Frontend",
      week: "Semanas 9-12",
      tasks: [
        "Interfaz de usuario",
        "Editor visual",
        "Dashboard"
      ],
      status: "pending",
      color: "#FF9800"
    },
    {
      month: "Noviembre",
      title: "Testing y QA",
      week: "Semanas 13-16",
      tasks: [
        "Pruebas unitarias",
        "Pruebas de integración",
        "Corrección de bugs"
      ],
      status: "pending",
      color: "#9C27B0"
    },
    {
      month: "Diciembre",
      title: "Implementación",
      week: "Semanas 17-20",
      tasks: [
        "Despliegue",
        "Capacitación",
        "Go-live"
      ],
      status: "pending",
      color: "#E31E24"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  const phaseVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const arrowVariants = {
    hidden: { 
      opacity: 0,
      scaleX: 0
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="musi-slide" style={{ 
      padding: '30px 40px',
      paddingTop: '60px',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
      overflow: 'auto'
    }}>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '15px', marginTop: '0' }}
      >
        Cronograma del Proyecto
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ marginBottom: '20px' }}
      >
        <Calendar size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
        5 Fases | Agosto - Diciembre 2025
      </motion.p>

      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px',
          flexWrap: 'nowrap',
          maxWidth: '100%',
          margin: '0 auto',
          overflowX: 'auto',
          padding: '10px 0'
        }}
      >
        {phases.map((phase, index) => (
          <>
            {/* Phase Card */}
            <motion.div
              key={phase.month}
              variants={phaseVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                width: '200px',
                minWidth: '200px',
                height: 'auto',
                minHeight: '280px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                borderTop: `4px solid ${phase.color}`,
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Status Badge */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '20px',
                  background: phase.status === 'active' ? '#4CAF50' : '#e0e0e0',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}
                animate={phase.status === 'active' ? {
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {phase.status === 'active' ? 'EN CURSO' : 'PENDIENTE'}
              </motion.div>

              {/* Month */}
              <h3 style={{ 
                color: phase.color,
                fontSize: '1.1rem',
                marginBottom: '5px',
                fontWeight: '700'
              }}>
                {phase.month}
              </h3>

              {/* Phase Title */}
              <h4 style={{
                color: '#333',
                fontSize: '0.95rem',
                marginBottom: '3px',
                fontWeight: '600'
              }}>
                {phase.title}
              </h4>

              {/* Week */}
              <p style={{
                color: '#999',
                fontSize: '0.75rem',
                marginBottom: '10px'
              }}>
                {phase.week}
              </p>

              {/* Tasks */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {phase.tasks.map((task, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.3 + idx * 0.1 }}
                    style={{
                      fontSize: '0.8rem',
                      color: '#666',
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: phase.color,
                      opacity: 0.6
                    }} />
                    {task}
                  </motion.li>
                ))}
              </ul>

              {/* Icon */}
              <motion.div
                style={{
                  marginTop: '15px',
                  textAlign: 'center'
                }}
                animate={{ rotate: phase.status === 'active' ? 360 : 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {phase.status === 'active' ? (
                  <Clock size={24} color={phase.color} />
                ) : (
                  <CheckCircle2 size={24} color="#ccc" />
                )}
              </motion.div>
            </motion.div>

            {/* Arrow between phases */}
            {index < phases.length - 1 && (
              <motion.div
                variants={arrowVariants}
                style={{
                  color: '#ccc',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <ArrowRight size={30} />
              </motion.div>
            )}
          </>
        ))}
      </motion.div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          maxWidth: '700px',
          margin: '20px auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '2px solid #E31E24'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#E31E24',
                marginBottom: '8px'
              }}
            >
              20
            </motion.div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Semanas totales</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#4CAF50',
                marginBottom: '8px'
              }}
            >
              5
            </motion.div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Fases del proyecto</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #E31E24, #ff6b6b)',
                color: 'white',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              ¡Iniciamos Agosto!
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide7