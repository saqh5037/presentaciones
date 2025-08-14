import { motion } from 'framer-motion'
import { Users, Mail, Phone, Briefcase } from 'lucide-react'

function Slide8() {
  const teamMembers = [
    {
      name: "Francisco Gaivis",
      role: "Project Lead",
      company: "WBI Innovations",
      initial: "FG",
      email: "fgaivis@wbinnova.com"
    },
    {
      name: "Samuel Quiroz",
      role: "Tech Lead",
      company: "WBI Innovations",
      initial: "SQ",
      email: "squiroz@wbinnova.com"
    },
    {
      name: "Krisia Díaz",
      role: "Project Manager",
      company: "FIFCO",
      initial: "KD",
      email: "krisia.diaz@fifco.com"
    },
    {
      name: "Vanessa Núñez",
      role: "Project Manager T&T",
      company: "FIFCO",
      initial: "VN",
      email: "uidext2553@fifco.com"
    },
    {
      name: "Ariana González",
      role: "Procurement",
      company: "FIFCO",
      initial: "AG",
      email: "ariana.gonzalez@fifco.com"
    },
    {
      name: "Hilary Quesada",
      role: "Legal & Contracts",
      company: "FIFCO",
      initial: "HQ",
      email: "hilary.quesada@fifco.com"
    }
  ]

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Equipo de Trabajo
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Users size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
        Colaboración WBI Innovations & FIFCO
      </motion.p>

      <motion.div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(227, 30, 36, 0.2)'
            }}
          >
            <div className="team-avatar">
              {member.initial}
            </div>
            <h4>{member.name}</h4>
            <p className="role">{member.role}</p>
            <p className="company">{member.company}</p>
            <div style={{ 
              marginTop: '15px', 
              paddingTop: '15px', 
              borderTop: '1px solid #eee' 
            }}>
              <a 
                href={`mailto:${member.email}`}
                style={{ 
                  color: '#666', 
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#E31E24'}
                onMouseLeave={(e) => e.target.style.color = '#666'}
              >
                <Mail size={14} />
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.05) 0%, rgba(227, 30, 36, 0.1) 100%)',
          borderRadius: '12px',
          padding: '30px',
          maxWidth: '900px',
          margin: '40px auto',
          border: '1px solid rgba(227, 30, 36, 0.2)'
        }}
      >
        <h3 style={{ color: '#E31E24', marginBottom: '20px' }}>
          <Briefcase size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
          Metodología de Trabajo
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Comunicación</h4>
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'left' }}>
              • Reuniones semanales de seguimiento<br/>
              • Canal dedicado en Teams<br/>
              • Reportes de avance quincenal
            </p>
          </div>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Desarrollo</h4>
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'left' }}>
              • Metodología Agile/Scrum<br/>
              • Sprints de 2 semanas<br/>
              • Demos al final de cada sprint
            </p>
          </div>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Colaboración</h4>
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'left' }}>
              • GitHub para control de versiones<br/>
              • Jira para gestión de tareas<br/>
              • Confluence para documentación
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide8