import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { Rocket, CheckCircle, Users, Calendar, Code, ArrowRight } from 'lucide-react'

function Slide8() {
  const [hoveredStep, setHoveredStep] = useState(null)

  const immediateSteps = [
    {
      week: 'Semana 1-2',
      title: 'Preparación',
      icon: <Users size={30} />,
      tasks: [
        'Formar equipo core',
        'Definir presupuesto inicial',
        'Configurar ambiente cloud básico',
        'Mapear procesos actuales'
      ],
      responsible: 'Dirección + TI',
      color: '#1e3a8a'
    },
    {
      week: 'Semana 3-4',
      title: 'Inicio Fase 1',
      icon: <Code size={30} />,
      tasks: [
        'Instalar stack base',
        'Conectar primera fuente de datos',
        'Crear primer dashboard',
        'Primer quick win visible'
      ],
      responsible: 'Equipo TI',
      color: '#6ba644'
    },
    {
      week: 'Mes 2',
      title: 'Momentum',
      icon: <Rocket size={30} />,
      tasks: [
        'Consolidar datos principales',
        'Capacitar equipo en herramientas',
        'Definir roadmap detallado',
        'Comunicar avances'
      ],
      responsible: 'Product Owner',
      color: '#ef4444'
    }
  ]

  const teamStructure = [
    { role: 'Product Owner / PM', dedication: '100%', key: true },
    { role: 'Full Stack Developers', dedication: '100%', quantity: 2 },
    { role: 'Data/ML Engineer', dedication: '100%', key: true },
    { role: 'DevOps/Infraestructura', dedication: '100%', key: false },
    { role: 'QA/Tester', dedication: '100%', key: false },
    { role: 'UX/UI Designer', dedication: '50%', key: false }
  ]

  const successFactors = [
    { factor: 'Empezar simple', desc: 'No sobre-engineerear' },
    { factor: 'Iterar rápido', desc: 'MVP → Mejora → Escala' },
    { factor: 'Medir todo', desc: 'KPIs desde día 1' },
    { factor: 'Involucrar usuarios', desc: 'Feedback continuo' },
    { factor: 'Documentar', desc: 'Código y procesos' },
    { factor: 'Capacitar', desc: 'Usuarios empoderados' },
    { factor: 'Celebrar wins', desc: 'Mantener momentum' }
  ]

  return (
    <div className="microtec-slide">
      <MicrotecLogo size="small" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ width: '100%' }}
      >
        <h1 style={{ 
            fontSize: '2.8rem', 
            margin: 0,
            marginBottom: '10px',
            color: '#1e3a8a',
            fontWeight: '900',
            letterSpacing: '-0.02em'
          }}>Próximos Pasos Inmediatos</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', fontWeight: '500' }}>
          Acciones concretas para iniciar la transformación
        </p>

        {/* Immediate Steps Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {immediateSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: hoveredStep === index
                  ? `2px solid ${step.color}30`
                  : `1px solid ${step.color}20`,
                borderTop: `4px solid ${step.color}`,
                borderRadius: '20px',
                boxShadow: hoveredStep === index
                  ? '0 8px 32px rgba(59, 130, 246, 0.12)'
                  : '0 4px 16px rgba(59, 130, 246, 0.08)',
                padding: '20px',
                minHeight: '250px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  color: step.color,
                  background: `${step.color}15`,
                  padding: '10px',
                  borderRadius: '10px',
                  border: `1px solid ${step.color}30`
                }}>
                  {step.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: '#1e3a8a', 
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '5px'
                  }}>
                    {step.title}
                  </h3>
                  <div style={{ color: '#475569', fontSize: '0.9rem' }}>
                    {step.week}
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div style={{ marginBottom: '15px' }}>
                {step.tasks.map((task, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <CheckCircle size={16} color="#10b981" />
                    <span style={{ color: '#1e293b', fontWeight: '500', fontSize: '0.95rem' }}>
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsible */}
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '10px',
                padding: '8px 12px',
                display: 'inline-block'
              }}>
                <span style={{ color: '#1e3a8a', fontSize: '0.85rem' }}>
                  Responsable: {step.responsible}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Structure */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginBottom: '25px'
        }}>
          {/* Team Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderTop: '3px solid #1e3a8a',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px'
            }}
          >
            <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
              <Users size={25} style={{ marginBottom: '-5px', marginRight: '10px' }} />
              Equipo Mínimo Necesario
            </h3>
            
            {teamStructure.map((member, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: index % 2 === 0 ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                borderRadius: '10px',
                marginBottom: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {member.key && (
                    <div style={{
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      KEY
                    </div>
                  )}
                  <span style={{ color: '#1e293b', fontWeight: '500' }}>
                    {member.role}
                    {member.quantity && ` (${member.quantity})`}
                  </span>
                </div>
                <span style={{ 
                  color: '#1e3a8a',
                  fontWeight: '700'
                }}>
                  {member.dedication}
                </span>
              </div>
            ))}
            
            <div style={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '2px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>
                Total: 5-7 personas dedicadas
              </div>
            </div>
          </motion.div>

          {/* Success Factors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(107, 166, 68, 0.2)',
              borderTop: '3px solid #6ba644',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px'
            }}
          >
            <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
              <Rocket size={25} style={{ marginBottom: '-5px', marginRight: '10px' }} />
              Factores de Éxito
            </h3>
            
            {successFactors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '12px'
                }}
              >
                <ArrowRight size={16} color="#6ba644" />
                <div>
                  <span style={{ color: '#1e3a8a', fontWeight: '700' }}>
                    {item.factor}:
                  </span>
                  <span style={{ color: '#1e293b', fontWeight: '500', marginLeft: '8px' }}>
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)',
            padding: '35px',
            textAlign: 'center'
          }}
        >
          <Calendar size={50} color="#1e3a8a" style={{ marginBottom: '20px' }} />
          <h2 style={{ color: '#1e3a8a', fontSize: '2rem', fontWeight: '700', marginBottom: '20px' }}>
            ¿Listos para comenzar?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#1e293b',
            fontWeight: '500',
            marginBottom: '25px'
          }}>
            La transformación digital de Microtec comienza con un solo paso.
            <br />
            18 meses de ahora, su laboratorio operará con la eficiencia del futuro.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #6ba644 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '18px 45px',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
            }}
          >
            Iniciar Transformación
          </motion.button>
          
          <div style={{ marginTop: '25px' }}>
            <p style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>
              Inversión modular • ROI esperado: 200% • Payback: 6 meses
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide8