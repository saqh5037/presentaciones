import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { Users, FileText, DollarSign, Globe, Database, Code, Zap, CheckCircle } from 'lucide-react'

function Slide5() {
  const [activeTab, setActiveTab] = useState('crm')
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const systems = {
    crm: {
      title: 'CRM Propio a la Medida',
      months: 'Meses 7-9',
      icon: <Users size={35} />,
      color: '#1e3a8a',
      investment: 'Inversión modular',
      modules: [
        { name: 'Gestión de Clientes', desc: 'B2B y B2C unificado', icon: <Users size={20} /> },
        { name: 'Pipeline de Ventas', desc: 'Seguimiento completo', icon: <Zap size={20} /> },
        { name: 'Contratos IMSS/ISSSTE', desc: 'Gestión especializada', icon: <FileText size={20} /> },
        { name: 'Intermediarios', desc: 'CENTRUM, FALCON, etc', icon: <Globe size={20} /> },
        { name: 'Historial de Órdenes', desc: 'Trazabilidad completa', icon: <Database size={20} /> },
        { name: 'IA Predictiva', desc: 'Lead scoring y churn', icon: <Code size={20} /> }
      ],
      timeline: {
        'Mes 7': ['Django/FastAPI Backend', 'PostgreSQL + Redis', 'GraphQL API', 'JWT + OAuth2'],
        'Mes 8': ['React/Vue.js Frontend', 'Material-UI', 'Progressive Web App', 'State Management'],
        'Mes 9': ['Lead Scoring ML', 'Recomendaciones IA', 'Alertas Contratos', 'Predicción Churn']
      }
    },
    automation: {
      title: 'Automatización Administrativa',
      months: 'Meses 10-12',
      icon: <Zap size={35} />,
      color: '#6ba644',
      investment: 'Inversión escalable',
      modules: [
        { name: 'RPA Facturación', desc: 'CFDI automático', icon: <FileText size={20} /> },
        { name: 'Conciliación Bancaria', desc: 'Match automático', icon: <DollarSign size={20} /> },
        { name: 'Cobranza Inteligente', desc: 'WhatsApp Bot', icon: <Users size={20} /> },
        { name: 'Portal Autoservicio', desc: 'Clientes/Médicos', icon: <Globe size={20} /> },
        { name: 'OCR Documentos', desc: 'Tesseract', icon: <Database size={20} /> },
        { name: 'Workflow Engine', desc: 'Apache Airflow', icon: <Code size={20} /> }
      ],
      timeline: {
        'Mes 10': ['Robot Framework/TagUI', 'OCR Tesseract', 'Facturación CFDI', 'Conciliación Bancaria'],
        'Mes 11': ['Segmentación Morosos', 'Recordatorios Escalonados', 'WhatsApp Negociación', 'Predicción Pago'],
        'Mes 12': ['Portal Resultados', 'Descarga Facturas', 'Solicitud Estudios', 'Chat Integrado']
      }
    }
  }

  const currentSystem = systems[activeTab]

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
          }}>CRM y Automatización</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', fontWeight: '500' }}>
          Sistemas propios adaptados a las necesidades del laboratorio
        </p>

        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '25px'
        }}>
          {Object.entries(systems).map(([key, system]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              style={{
                background: activeTab === key 
                  ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: activeTab === key 
                  ? '2px solid rgba(59, 130, 246, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.5)',
                borderTop: activeTab === key ? `3px solid ${system.color}` : 'none',
                boxShadow: activeTab === key ? '0 8px 32px rgba(59, 130, 246, 0.12)' : '0 4px 16px rgba(59, 130, 246, 0.08)',
                borderRadius: '15px',
                padding: '15px 25px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ color: system.color }}>
                {system.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ 
                  color: activeTab === key ? '#1e3a8a' : '#475569',
                  fontSize: '1rem',
                  fontWeight: '700'
                }}>
                  {system.title}
                </div>
                <div style={{ 
                  color: '#475569', 
                  fontSize: '0.85rem',
                  marginTop: '5px'
                }}>
                  {system.months} • {system.investment}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* System Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Modules Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
            marginBottom: '25px'
          }}>
            {currentSystem.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: hoveredFeature === index
                    ? `2px solid ${currentSystem.color}30`
                    : `1px solid ${currentSystem.color}20`,
                  borderTop: `4px solid ${currentSystem.color}`,
                  boxShadow: hoveredFeature === index 
                    ? '0 8px 32px rgba(59, 130, 246, 0.12)' 
                    : '0 4px 16px rgba(59, 130, 246, 0.08)',
                  borderRadius: '15px',
                  padding: '20px',
                  minHeight: '140px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px'
                }}>
                  <div style={{ 
                    color: currentSystem.color,
                    background: `${currentSystem.color}15`,
                    padding: '10px',
                    borderRadius: '10px',
                    border: `1px solid ${currentSystem.color}30`
                  }}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      color: '#1e3a8a', 
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '5px'
                    }}>
                      {module.name}
                    </h3>
                    <p style={{ 
                      color: '#1e293b', 
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      {module.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)',
              padding: '30px'
            }}
          >
            <h3 style={{ 
              color: '#1e3a8a', 
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Plan de Implementación
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px'
            }}>
              {Object.entries(currentSystem.timeline).map(([month, tasks]) => (
                <div key={month} style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: `1px solid ${currentSystem.color}20`,
                  borderTop: `3px solid ${currentSystem.color}`,
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.08)',
                  borderRadius: '15px',
                  padding: '20px'
                }}>
                  <div style={{
                    background: `${currentSystem.color}20`,
                    color: currentSystem.color,
                    border: `1px solid ${currentSystem.color}30`,
                    padding: '6px 14px',
                    borderRadius: '10px',
                    display: 'inline-block',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    {month}
                  </div>
                  
                  {tasks.map((task, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px'
                    }}>
                      <CheckCircle size={16} color="#10b981" />
                      <span style={{ 
                        color: '#1e293b', 
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expected Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: '25px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Resultados Esperados
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold',
                  color: activeTab === 'crm' ? '#1e3a8a' : '#6ba644'
                }}>
                  {activeTab === 'crm' ? '+15%' : '-50%'}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                  {activeTab === 'crm' ? 'Conversión' : 'Tiempo proceso'}
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold',
                  color: activeTab === 'crm' ? '#1e3a8a' : '#6ba644'
                }}>
                  {activeTab === 'crm' ? '360°' : '+25%'}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                  {activeTab === 'crm' ? 'Vista cliente' : 'Recuperación'}
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold',
                  color: activeTab === 'crm' ? '#1e3a8a' : '#6ba644'
                }}>
                  {activeTab === 'crm' ? '100%' : '-40%'}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                  {activeTab === 'crm' ? 'Trazabilidad' : 'Consultas'}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide5