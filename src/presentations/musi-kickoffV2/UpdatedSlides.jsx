// This file contains the updated versions of Slides 7-10 with FIFCO design
// Copy these to their respective files

// ============ SLIDE 7 - CRONOGRAMA ============
export const Slide7Content = `
import { motion } from 'framer-motion'

function Slide7() {
  const phases = [
    { month: 'Agosto', title: 'Análisis y Diseño', weeks: 'Semanas 1-4', color: '#4CAF50', tasks: ['Levantamiento de requerimientos', 'Diseño de arquitectura', 'Creación de mockups'] },
    { month: 'Septiembre', title: 'Desarrollo Backend', weeks: 'Semanas 5-8', color: '#2196F3', tasks: ['Base de datos', 'APIs REST', 'Lógica de negocio'] },
    { month: 'Octubre', title: 'Desarrollo Frontend', weeks: 'Semanas 9-12', color: '#FF9800', tasks: ['Interfaz de usuario', 'Editor visual', 'Dashboard'] },
    { month: 'Noviembre', title: 'Testing y QA', weeks: 'Semanas 13-16', color: '#9C27B0', tasks: ['Pruebas unitarias', 'Pruebas de integración', 'Corrección de bugs'] },
    { month: 'Diciembre', title: 'Implementación', weeks: 'Semanas 17-20', color: '#E31E24', tasks: ['Despliegue', 'Capacitación', 'Go-live'] }
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
          >
            Cronograma del Proyecto
          </motion.h1>
          <motion.p
            className="timeline-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            5 Fases | Agosto - Diciembre 2025
          </motion.p>
        </div>

        <div className="timeline-track">
          <div className="timeline-line"></div>
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
                  style={{ borderColor: phase.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
                <div className="phase-content">
                  <h3 className="phase-month" style={{ color: phase.color }}>{phase.month}</h3>
                  <p className="phase-title">{phase.title}</p>
                  <p className="phase-weeks">{phase.weeks}</p>
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
            <h3 style={{ fontSize: '2.5rem', color: 'var(--fifco-blue-dark)', fontWeight: 'bold' }}>20</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>Semanas totales</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px var(--fifco-shadow)'
          }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--fifco-cyan)', fontWeight: 'bold' }}>5</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>Fases del proyecto</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--fifco-gray-light) 0%, var(--fifco-white) 100%)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px var(--fifco-shadow)'
          }}>
            <h3 style={{ fontSize: '2.5rem' }}>🚀</h3>
            <p style={{ color: 'var(--fifco-dark)', opacity: 0.8 }}>¡Iniciamos Agosto!</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide7
`;

// ============ SLIDE 8 - EQUIPO ============
export const Slide8Content = `
import { motion } from 'framer-motion'

function Slide8() {
  const wbiTeam = [
    { name: 'Francisco Gaivis', role: 'Project Lead', email: 'fgaivis@wbinnova.com', initials: 'FG' },
    { name: 'Samuel Quiroz', role: 'Tech Lead', email: 'squiroz@wbinnova.com', initials: 'SQ' }
  ]

  const fifcoTeam = [
    { name: 'Krisia Díaz', role: 'Project Manager', email: 'krisia.diaz@fifco.com', initials: 'KD' },
    { name: 'Vanessa Núñez', role: 'Project Manager T&T', email: 'uidext2553@fifco.com', initials: 'VN' },
    { name: 'Ariana González', role: 'Procurement', email: 'ariana.gonzalez@fifco.com', initials: 'AG' },
    { name: 'Hilary Quesada', role: 'Legal & Contracts', email: 'hilary.quesada@fifco.com', initials: 'HQ' }
  ]

  return (
    <div className="slide-fifco slide8-team">
      <div className="team-container">
        <div className="team-header">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'var(--text-h1)',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: '0.5rem'
            }}
          >
            Equipo de Trabajo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--fifco-dark)',
              opacity: 0.8
            }}
          >
            Colaboración WBI Innovations & FIFCO
          </motion.p>
        </div>

        <div className="team-companies">
          <motion.div 
            className="company-section company-wbi"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="company-header">
              <div className="company-logo">WBI</div>
              <h2 className="company-name">WBI Innovations</h2>
            </div>
            <div className="team-members">
              {wbiTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="member-avatar">{member.initials}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-email">{member.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="company-section company-fifco"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="company-header">
              <div className="company-logo">FIFCO</div>
              <h2 className="company-name">FIFCO</h2>
            </div>
            <div className="team-members">
              {fifcoTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="member-avatar">{member.initials}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-email">{member.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Slide8
`;

// ============ SLIDE 9 - PRÓXIMOS PASOS ============
export const Slide9Content = `
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
`;

// ============ SLIDE 10 - Q&A ============
export const Slide10Content = `
import { motion } from 'framer-motion'

function Slide10() {
  return (
    <div className="slide-fifco slide10-qa">
      <div className="qa-container">
        <div className="qa-header">
          <motion.h1
            className="qa-title"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            ¿Preguntas?
          </motion.h1>
          <motion.p
            className="qa-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Este es el momento para aclarar cualquier duda sobre el proyecto
          </motion.p>
        </div>

        <div className="contact-cards">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-company">WBI INNOVATIONS</div>
            <h3 className="contact-name">Francisco Gaivis</h3>
            <p className="contact-role">Project Lead</p>
            <div className="contact-details">
              <div className="contact-detail">📧 fgaivis@wbinnova.com</div>
              <div className="contact-detail">📱 (+506) 8888-8888</div>
            </div>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-company">FIFCO</div>
            <h3 className="contact-name">Krisia Díaz</h3>
            <p className="contact-role">Project Manager</p>
            <div className="contact-details">
              <div className="contact-detail">📧 krisia.diaz@fifco.com</div>
              <div className="contact-detail">📱 (+506) 7777-7777</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="thank-you-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="thank-you-title">¡Gracias por su tiempo!</h2>
          <p className="thank-you-text">
            Esperamos con entusiasmo trabajar juntos en este proyecto
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide10
`;