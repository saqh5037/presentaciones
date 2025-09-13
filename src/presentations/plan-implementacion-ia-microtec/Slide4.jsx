import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { MessageCircle, Ticket, MapPin, Phone, Clock, TrendingDown, X } from 'lucide-react'

function Slide4() {
  const [selectedWin, setSelectedWin] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const quickWins = [
    {
      id: 'chatbot',
      title: 'Chatbot WhatsApp',
      icon: <MessageCircle size={35} />,
      month: 'Mes 4',
      impact: '-30% llamadas',
      color: '#6ba644',
      features: [
        'Consulta de estatus de resultados',
        'Información de horarios y sucursales',
        'Precios de estudios comunes',
        'FAQ automatizado'
      ],
      tech: ['Rasa Open Source', 'spaCy español', 'WhatsApp Business API'],
      implementation: {
        week1: 'Setup Rasa y entrenamiento NLP básico',
        week2: 'Integración WhatsApp Business API',
        week3: 'Desarrollo de flujos conversacionales',
        week4: 'Testing y deployment'
      },
      roi: 'Reducción 30% en llamadas básicas = 120 horas/mes ahorradas'
    },
    {
      id: 'tickets',
      title: 'Sistema de Tickets',
      icon: <Ticket size={35} />,
      month: 'Mes 5',
      impact: '100% trazabilidad',
      color: '#1e3a8a',
      features: [
        'Registro automático de solicitudes',
        'Asignación por tipo de problema',
        'SLA básico por cliente (IMSS, ISSSTE)',
        'Seguimiento y escalamiento'
      ],
      tech: ['OTRS/osTicket', 'PHP/Python', 'API WhatsApp + Email'],
      implementation: {
        week1: 'Instalación y configuración OTRS',
        week2: 'Personalización de flujos y categorías',
        week3: 'Integración con canales de comunicación',
        week4: 'Capacitación equipo y go-live'
      },
      roi: 'Trazabilidad completa = 0% solicitudes perdidas'
    },
    {
      id: 'rutas',
      title: 'Optimización de Rutas',
      icon: <MapPin size={35} />,
      month: 'Mes 6',
      impact: '-20% kilometraje',
      color: '#5a9037',
      features: [
        'Optimización diaria de rutas',
        'Consideración de tráfico en tiempo real',
        'Priorización por urgencia',
        'App móvil simple para choferes'
      ],
      tech: ['OSRM', 'OpenStreetMap', 'Python OR-Tools', 'React PWA'],
      implementation: {
        week1: 'Setup OSRM y mapas base',
        week2: 'Algoritmo de optimización con OR-Tools',
        week3: 'Desarrollo app móvil PWA',
        week4: 'Piloto con 2 rutas y ajustes'
      },
      roi: 'Reducción significativa en kilometraje = Ahorro considerable en combustible'
    }
  ]

  const openDetails = (win) => {
    setSelectedWin(win)
    setShowDetails(true)
  }

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
          }}>Quick Wins Operativos</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', fontWeight: '500' }}>
          Soluciones de alto impacto con baja complejidad (Meses 4-6)
        </p>

        {/* Quick Wins Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {quickWins.map((win, index) => (
            <motion.div
              key={win.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => openDetails(win)}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `2px solid ${win.color}20`,
                borderTop: `4px solid ${win.color}`,
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08)',
                borderRadius: '15px',
                padding: '25px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '280px'
              }}
            >
              {/* Icon and Title */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  color: win.color,
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {win.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: win.color, 
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '5px'
                  }}>
                    {win.title}
                  </h3>
                  <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: '500' }}>{win.month}</div>
                </div>
              </div>

              {/* Impact Badge */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: `${win.color}15`,
                  color: win.color,
                  padding: '6px 12px',
                  borderRadius: '15px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  border: `1px solid ${win.color}30`
                }}>
                {win.impact}
              </motion.div>

              {/* Features List */}
              <div style={{ marginTop: '20px' }}>
                {win.features.slice(0, 3).map((feature, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: win.color,
                      borderRadius: '50%'
                    }} />
                    <span style={{ color: '#1e293b', fontWeight: '500', fontSize: '0.9rem' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Click for details */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  marginTop: '15px',
                  color: win.color,
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  fontWeight: '500',
                  opacity: 0.8
                }}>
                Ver implementación →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Combined Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(107, 166, 68, 0.3)',
            borderRadius: '15px',
            boxShadow: '0 6px 25px rgba(107, 166, 68, 0.1)',
            padding: '25px',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
            Impacto Combinado (3 meses)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <TrendingDown size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e3a8a', cursor: 'pointer' }}>
                -30%
              </motion.div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Llamadas básicas</div>
            </div>
            <div>
              <Clock size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#6ba644', cursor: 'pointer' }}>
                100%
              </motion.div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Trazabilidad</div>
            </div>
            <div>
              <MapPin size={30} color="#ef4444" style={{ marginBottom: '10px' }} />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ef4444', cursor: 'pointer' }}>
                -20%
              </motion.div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Kilometraje</div>
            </div>
          </div>
        </motion.div>

        {/* Details Modal */}
        {showDetails && selectedWin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '20px',
                padding: '35px',
                maxWidth: '750px',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)'
              }}
            >
              <button
                onClick={() => setShowDetails(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} color="#1e3a8a" />
              </button>

              <h2 style={{ color: '#1e3a8a', fontSize: '2rem', fontWeight: '700', marginBottom: '25px' }}>
                {selectedWin.title} - Implementación
              </h2>

              {/* Technology Stack */}
              <div style={{
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>
                  Stack Tecnológico
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedWin.tech.map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(30, 58, 138, 0.2)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      color: '#1e293b',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Implementation Timeline */}
              <div style={{
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>
                  Plan de Implementación (4 semanas)
                </h3>
                {Object.entries(selectedWin.implementation).map(([week, task]) => (
                  <div key={week} style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '15px',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      background: `${selectedWin.color}20`,
                      color: selectedWin.color,
                      border: `1px solid ${selectedWin.color}30`,
                      padding: '6px 12px',
                      borderRadius: '10px',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase'
                    }}>
                      {week.replace('week', 'Semana ')}
                    </div>
                    <div style={{ color: '#1e293b', fontWeight: '500' }}>{task}</div>
                  </div>
                ))}
              </div>

              {/* ROI */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  ROI Esperado
                </h3>
                <p style={{ color: '#1e293b', fontWeight: '500', fontSize: '1rem' }}>
                  {selectedWin.roi}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide4