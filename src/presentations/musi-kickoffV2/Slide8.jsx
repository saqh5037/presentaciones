import { motion } from 'framer-motion'

function Slide8() {
  const wbiTeam = [
    { name: 'Diego Cumares', role: 'Desarrollador', initials: 'DC' },
    { name: 'Juan Pieschacón', role: 'Desarrollador', initials: 'JP' },
    { name: 'Sebastián Agüero', role: 'Desarrollador', initials: 'SA' },
    { name: 'Roberto Heligón', role: 'Desarrollador Senior (GCP)', initials: 'RH' },
    { name: 'Cristina Barrios', role: 'QA', initials: 'CB' },
    { name: 'Carled Arévalo', role: 'UX/UI', initials: 'CA' },
    { name: 'Mauricio Ourcilleon', role: 'Project Manager', initials: 'MO' },
    { name: 'Samuel Quiroz', role: 'Líder Técnico & Country Manager (GCP)', initials: 'SQ' },
    { name: 'Francisco Gaivis', role: 'Arquitecto (GCP)', initials: 'FG' }
  ]

  const fifcoTeam = [
    { name: 'Luis Diego Montero', role: 'Sponsor', initials: 'LM' },
    { name: 'Nathalia Reyes', role: 'Champion de Negocio', initials: 'NR' },
    { name: 'Jeffry Zuñiga', role: 'Product Owner', initials: 'JZ' },
    { name: 'Karina Solano', role: 'SME', initials: 'KS' },
    { name: 'Krisia Díaz', role: 'BP Comercial', initials: 'KD' },
    { name: 'Josseline Núñez', role: 'Program Manager', initials: 'JN' },
    { name: 'Vanessa Núñez', role: 'PM Transformación & Tecnología', initials: 'VN' },
    { name: 'Edgar Díaz', role: 'PM Negocio', initials: 'ED' },
    { name: 'Susana Jiménez', role: 'Tech Lead', initials: 'SJ' },
    { name: 'Ignacio Brenes', role: 'Tech Lead', initials: 'IB' },
    { name: 'Juan Arroyo', role: 'Ciberseguridad', initials: 'JA' }
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
                  <motion.div 
                    className="member-avatar"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? 'var(--fifco-blue-dark)' : 'var(--fifco-cyan)'} 0%, ${index % 2 === 0 ? 'var(--fifco-cyan)' : 'var(--fifco-blue-medium)'} 100%)`,
                      boxShadow: '0 4px 15px rgba(27, 93, 174, 0.3)'
                    }}
                  >
                    {member.initials}
                  </motion.div>
                  <div className="member-info">
                    <h3 className="member-name" style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: 'var(--fifco-blue-dark)',
                      marginBottom: '0.3rem'
                    }}>{member.name}</h3>
                    <p className="member-role" style={{
                      fontSize: '0.85rem',
                      color: 'var(--fifco-cyan)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.2rem'
                    }}>{member.role}</p>
                    {member.email && <p className="member-email">{member.email}</p>}
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
                  <motion.div 
                    className="member-avatar"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? 'var(--fifco-blue-dark)' : 'var(--fifco-cyan)'} 0%, ${index % 2 === 0 ? 'var(--fifco-cyan)' : 'var(--fifco-blue-medium)'} 100%)`,
                      boxShadow: '0 4px 15px rgba(27, 93, 174, 0.3)'
                    }}
                  >
                    {member.initials}
                  </motion.div>
                  <div className="member-info">
                    <h3 className="member-name" style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: 'var(--fifco-blue-dark)',
                      marginBottom: '0.3rem'
                    }}>{member.name}</h3>
                    <p className="member-role" style={{
                      fontSize: '0.85rem',
                      color: 'var(--fifco-cyan)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.2rem'
                    }}>{member.role}</p>
                    {member.email && <p className="member-email">{member.email}</p>}
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