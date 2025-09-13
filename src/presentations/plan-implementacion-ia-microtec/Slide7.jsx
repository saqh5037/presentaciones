import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { TrendingUp, DollarSign, Clock, Users, CheckCircle, Award, X } from 'lucide-react'

function Slide7() {
  const [selectedMetric, setSelectedMetric] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const metricsCategories = {
    operational: {
      title: 'Métricas Operativas',
      icon: <Clock size={30} />,
      color: '#1e3a8a',
      metrics: [
        { name: 'Llamadas automatizadas', baseline: '0%', target: '40%', current: '___' },
        { name: 'Tickets resueltos mismo día', baseline: '30%', target: '70%', current: '___' },
        { name: 'Resultados auto-validados', baseline: '10%', target: '60%', current: '___' },
        { name: 'Reducción TAT promedio', baseline: '0%', target: '-30%', current: '___' },
        { name: 'Utilización de equipos', baseline: '65%', target: '85%', current: '___' }
      ]
    },
    financial: {
      title: 'Métricas Financieras',
      icon: <DollarSign size={30} />,
      color: '#6ba644',
      metrics: [
        { name: 'Reducción costos operativos', baseline: '0%', target: '25%', current: '___' },
        { name: 'Facturas automáticas', baseline: '20%', target: '80%', current: '___' },
        { name: 'Recuperación cobranza', baseline: '60%', target: '85%', current: '___' },
        { name: 'Ahorro en combustible', baseline: '0%', target: 'Reducción significativa', current: '___' },
        { name: 'ROI del proyecto', baseline: '0%', target: '200%', current: '___' }
      ]
    },
    customer: {
      title: 'Métricas de Cliente',
      icon: <Users size={30} />,
      color: '#ef4444',
      metrics: [
        { name: 'Órdenes via portal', baseline: '5%', target: '30%', current: '___' },
        { name: 'Satisfacción cliente', baseline: '70%', target: '85%', current: '___' },
        { name: 'Tiempo respuesta consultas', baseline: '24hrs', target: '<2hrs', current: '___' },
        { name: 'NPS Score', baseline: '30', target: '60', current: '___' },
        { name: 'Churn rate', baseline: '15%', target: '8%', current: '___' }
      ]
    }
  }

  const monthlyWins = [
    { month: 1, win: 'Dashboard básico operativo', impact: 'Visibilidad inmediata' },
    { month: 2, win: 'Backup automatizado', impact: 'Seguridad de datos' },
    { month: 3, win: 'Reportes automáticos', impact: 'Ahorro 20 hrs/mes' },
    { month: 4, win: 'Chatbot WhatsApp', impact: '-30% llamadas' },
    { month: 5, win: 'Sistema de tickets', impact: '100% trazabilidad' },
    { month: 6, win: 'Rutas optimizadas', impact: '-20% kilometraje' },
    { month: 7, win: 'CRM básico', impact: 'Vista 360° clientes' },
    { month: 8, win: 'Pipeline de ventas', impact: 'Visibilidad comercial' },
    { month: 9, win: 'Lead scoring', impact: '+15% conversión' },
    { month: 10, win: 'Facturación RPA', impact: '-50% tiempo' },
    { month: 11, win: 'Cobranza automática', impact: '+25% recuperación' },
    { month: 12, win: 'Portal autoservicio', impact: '-40% consultas' }
  ]

  const projectPhases = [
    { phase: 'Fundamentos', description: 'Infraestructura base', icon: <TrendingUp size={20} />, color: '#1e3a8a' },
    { phase: 'Quick Wins', description: 'Soluciones rápidas', icon: <Clock size={20} />, color: '#6ba644' },
    { phase: 'CRM Propio', description: 'Sistema a medida', icon: <Users size={20} />, color: '#1e3a8a' },
    { phase: 'Automatización', description: 'Procesos inteligentes', icon: <TrendingUp size={20} />, color: '#6ba644' },
    { phase: 'IA Laboratorio', description: 'Inteligencia aplicada', icon: <Award size={20} />, color: '#ef4444' },
    { phase: 'Consolidación', description: 'Optimización final', icon: <TrendingUp size={20} />, color: '#1e3a8a' }
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
          }}>Métricas de Éxito y ROI</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#475569', fontWeight: '500' }}>
          KPIs medibles y retorno de inversión proyectado
        </p>

        {/* Metrics Categories Tabs */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '25px',
          flexWrap: 'wrap'
        }}>
          {Object.entries(metricsCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedMetric(key)
                setShowModal(true)
              }}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${category.color}20`,
                borderTop: `3px solid ${category.color}`,
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
                borderRadius: '15px',
                padding: '12px 25px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div style={{ color: category.color }}>
                {category.icon}
              </div>
              <span style={{ 
                color: '#1e3a8a',
                fontWeight: '700',
                fontSize: '1rem'
              }}>
                {category.title}
              </span>
            </motion.button>
          ))}
        </div>


        {/* Project Phases */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {projectPhases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${item.color}20`,
                borderTop: `3px solid ${item.color}`,
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
                borderRadius: '15px',
                padding: '20px',
                minHeight: '120px',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '10px'
              }}>
                <div style={{ 
                  color: item.color,
                  background: `${item.color}15`,
                  padding: '8px',
                  borderRadius: '8px',
                  border: `1px solid ${item.color}30`
                }}>
                  {item.icon}
                </div>
                <h4 style={{ 
                  color: '#1e3a8a', 
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  margin: 0
                }}>
                  {item.phase}
                </h4>
              </div>
              <p style={{ 
                color: '#64748b', 
                fontSize: '0.9rem',
                fontWeight: '500',
                margin: 0
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Monthly Quick Wins - Full Width */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(107, 166, 68, 0.2)',
              borderTop: '3px solid #6ba644',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              borderRadius: '20px',
              padding: '25px',
              marginBottom: '25px'
            }}
          >
            <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Quick Wins Mensuales
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px'
            }}>
              {monthlyWins.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    background: 'rgba(107, 166, 68, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(107, 166, 68, 0.2)'
                  }}
                >
                  <div style={{
                    background: `${index < 4 ? '#1e3a8a' : index < 8 ? '#6ba644' : '#ef4444'}15`,
                    color: index < 4 ? '#1e3a8a' : index < 8 ? '#6ba644' : '#ef4444',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    Mes {item.month}
                  </div>
                  <div style={{ color: '#1e293b', fontWeight: '600', fontSize: '0.85rem', marginBottom: '4px' }}>
                    {item.win}
                  </div>
                  <div style={{ color: '#6ba644', fontSize: '0.75rem', fontWeight: '500' }}>
                    {item.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        {/* ROI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)',
            padding: '30px',
            textAlign: 'center'
          }}
        >
          <Award size={50} color="#1e3a8a" style={{ marginBottom: '20px' }} />
          <h3 style={{ color: '#1e3a8a', fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px' }}>
            Retorno de Inversión Proyectado
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#1e3a8a'
              }}>
                200%
              </div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>ROI en 18 meses</div>
            </div>
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#6ba644'
              }}>
                6 meses
              </div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Payback period</div>
            </div>
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#ef4444'
              }}>
                -25%
              </div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Costos operativos</div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Modal */}
        {showModal && selectedMetric && (
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
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 255, 254, 0.95) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `2px solid ${metricsCategories[selectedMetric].color}30`,
                borderTop: `4px solid ${metricsCategories[selectedMetric].color}`,
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '900px',
                width: '90%',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
            >
              <button
                onClick={() => setShowModal(false)}
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ color: metricsCategories[selectedMetric].color }}>
                  {metricsCategories[selectedMetric].icon}
                </div>
                <h2 style={{ color: '#1e3a8a', fontSize: '2rem', fontWeight: '700', margin: 0 }}>
                  {metricsCategories[selectedMetric].title}
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                gap: '15px',
                marginBottom: '20px',
                padding: '15px',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '10px'
              }}>
                <div style={{ color: '#1e3a8a', fontWeight: '700', fontSize: '1.1rem' }}>Métrica</div>
                <div style={{ color: '#1e3a8a', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center' }}>Baseline</div>
                <div style={{ color: '#1e3a8a', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center' }}>Meta</div>
                <div style={{ color: '#1e3a8a', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center' }}>Actual</div>
              </div>
              
              {metricsCategories[selectedMetric].metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '15px',
                    padding: '15px',
                    background: index % 2 === 0 ? 'rgba(59, 130, 246, 0.03)' : 'transparent',
                    borderRadius: '10px',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ color: '#1e293b', fontWeight: '600', fontSize: '1rem' }}>{metric.name}</div>
                  <div style={{ color: '#475569', textAlign: 'center', fontSize: '1rem' }}>{metric.baseline}</div>
                  <div style={{ 
                    color: metricsCategories[selectedMetric].color, 
                    fontWeight: '700',
                    textAlign: 'center',
                    fontSize: '1.1rem'
                  }}>
                    {metric.target}
                  </div>
                  <div style={{ 
                    color: '#6ba644',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: '500',
                    fontSize: '1rem'
                  }}>
                    {metric.current}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide7