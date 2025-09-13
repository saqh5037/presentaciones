import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { Calendar, Database, Bot, Users, Brain, Rocket, CheckCircle, X } from 'lucide-react'

function Slide3() {
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const phases = [
    {
      id: 1,
      title: 'ETAPA 1: Fundamentos',
      months: 'Meses 1-3',
      icon: <Database size={30} />,
      color: '#1e3a8a',
      quickWin: 'Dashboard operativo visible',
      tasks: [
        { month: 1, title: 'Infraestructura Básica', items: ['Servidor cloud básico', 'PostgreSQL', 'APIs REST', 'Backup y seguridad'] },
        { month: 2, title: 'Data Lake Simplificado', items: ['ETL con Apache Airflow', 'Storage en S3', 'Conectores sistemas', 'Limpieza de datos'] },
        { month: 3, title: 'Dashboard Operativo', items: ['Metabase/Superset', 'KPIs en tiempo real', 'Reportes automáticos', 'Alertas por email'] }
      ]
    },
    {
      id: 2,
      title: 'ETAPA 2: Quick Wins',
      months: 'Meses 4-6',
      icon: <Bot size={30} />,
      color: '#6ba644',
      quickWin: '-30% llamadas, -20% kilometraje',
      tasks: [
        { month: 4, title: 'Chatbot WhatsApp', items: ['Consulta resultados', 'Horarios y sucursales', 'Precios estudios', 'FAQ automatizado'] },
        { month: 5, title: 'Sistema de Tickets', items: ['Registro automático', 'Asignación por tipo', 'SLA por cliente', 'Seguimiento y escalamiento'] },
        { month: 6, title: 'Optimización Rutas', items: ['Algoritmo OSRM', 'OpenStreetMap', 'Priorización urgencia', 'App móvil choferes'] }
      ]
    },
    {
      id: 3,
      title: 'ETAPA 3: CRM Propio',
      months: 'Meses 7-9',
      icon: <Users size={30} />,
      color: '#1e3a8a',
      quickWin: 'Vista 360° clientes, +15% conversión',
      tasks: [
        { month: 7, title: 'Base de Datos y Backend', items: ['Django/FastAPI', 'PostgreSQL + Redis', 'GraphQL API', 'JWT + OAuth2'] },
        { month: 8, title: 'Interfaces y Funcionalidades', items: ['React/Vue.js', 'Material-UI', 'Progressive Web App', 'State management'] },
        { month: 9, title: 'Integraciones e IA', items: ['Lead Scoring ML', 'Recomendación acciones', 'Alertas contratos', 'Predicción churn'] }
      ]
    },
    {
      id: 4,
      title: 'ETAPA 4: Automatización',
      months: 'Meses 10-12',
      icon: <Rocket size={30} />,
      color: '#5a9037',
      quickWin: '-50% tiempo facturación, +25% cobranza',
      tasks: [
        { month: 10, title: 'RPA Open Source', items: ['Robot Framework', 'OCR Tesseract', 'Facturación CFDI', 'Conciliación bancaria'] },
        { month: 11, title: 'Cobranza Inteligente', items: ['Segmentación morosos', 'Recordatorios escalonados', 'WhatsApp Bot negociación', 'Predicción de pago'] },
        { month: 12, title: 'Portal Autoservicio', items: ['Consulta resultados', 'Descarga facturas', 'Solicitud estudios', 'Chat integrado'] }
      ]
    },
    {
      id: 5,
      title: 'ETAPA 5: IA en Lab',
      months: 'Meses 13-15',
      icon: <Brain size={30} />,
      color: '#6ba644',
      quickWin: '60% auto-validación, -30% TAT',
      tasks: [
        { month: 13, title: 'Validación Inteligente', items: ['Detección valores críticos', 'Comparación históricos', 'Identificación anomalías', 'Correlación pruebas'] },
        { month: 14, title: 'Optimización Workflow', items: ['Priorización dinámica', 'Balanceo de carga', 'Predicción TAT', 'Alertas retrasos'] },
        { month: 15, title: 'Control Calidad Predictivo', items: ['Predicción fallas equipos', 'Detección drift', 'Análisis Westgard', 'Mantenimiento predictivo'] }
      ]
    },
    {
      id: 6,
      title: 'ETAPA 6: Consolidación',
      months: 'Meses 16-18',
      icon: <CheckCircle size={30} />,
      color: '#8bc34a',
      quickWin: 'Plataforma unificada, ROI 200%',
      tasks: [
        { month: 16, title: 'Integración Total', items: ['Plataforma unificada', 'CRM ↔ LIMS ↔ Finanzas', 'Base datos centralizada', 'Analytics y BI'] },
        { month: 17, title: 'ML Avanzado', items: ['Predicción demanda', 'Optimización inventarios', 'Forecasting financiero', 'Análisis predictivo'] },
        { month: 18, title: 'Expansión y Mejora', items: ['Nuevos módulos', 'Optimización performance', 'Capacitación avanzada', 'Documentación completa'] }
      ]
    }
  ]

  const openPhaseDetails = (phase) => {
    setSelectedPhase(phase)
    setShowModal(true)
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
          }}>Roadmap de Implementación</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', fontWeight: '500' }}>
          18 meses de transformación progresiva con resultados medibles
        </p>

        {/* Timeline Grid - 2 rows of 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              onClick={() => openPhaseDetails(phase)}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `2px solid ${phase.color}20`,
                borderTop: `3px solid ${phase.color}`,
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.08)',
                borderRadius: '15px',
                padding: '20px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px'
              }}
            >
              {/* Phase Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{ color: phase.color }}>
                  {phase.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: phase.color, 
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '3px'
                  }}>
                    {phase.title}
                  </h3>
                  <div style={{ color: '#475569', fontSize: '0.8rem', fontWeight: '500' }}>
                    {phase.months}
                  </div>
                </div>
              </div>

              {/* Quick Win */}
              <div style={{
                background: `linear-gradient(145deg, ${phase.color}08 0%, ${phase.color}05 100%)`,
                borderLeft: `3px solid ${phase.color}`,
                borderRadius: '8px',
                padding: '10px 12px',
                marginBottom: '12px'
              }}>
                <div style={{ fontSize: '0.75rem', color: phase.color, marginBottom: '3px', fontWeight: '600' }}>
                  QUICK WIN
                </div>
                <div style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: '500' }}>
                  {phase.quickWin}
                </div>
              </div>


              {/* Click indicator */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: `${phase.color}15`,
                  borderRadius: '20px',
                  padding: '4px 8px',
                  fontSize: '0.7rem',
                  color: phase.color,
                  fontWeight: '500'
                }}>
                + Info
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(107, 166, 68, 0.3)',
            borderRadius: '15px',
            boxShadow: '0 6px 25px rgba(107, 166, 68, 0.1)',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', marginBottom: '10px', fontWeight: '700' }}>
            Estrategia de Implementación
          </h3>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              color: '#6ba644',
              cursor: 'pointer'
            }}>
            6 Etapas Estratégicas
          </motion.div>
          <p style={{ color: '#1e293b', fontWeight: '600', marginTop: '10px' }}>
            Implementación modular • ROI esperado: 200% • Resultados desde el mes 1
          </p>
        </motion.div>

        {/* Modal for Phase Details */}
        {showModal && selectedPhase && (
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
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '900px',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative'
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
                <X size={20} color="#3b82f6" />
              </button>

              <h2 style={{ color: '#1e3a8a', fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px' }}>
                {selectedPhase.title}
              </h2>

              {selectedPhase.tasks.map((task, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(59, 130, 246, 0.05)',
                    border: '2px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '15px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}
                >
                  <h3 style={{ 
                    color: '#1e3a8a', 
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>
                    Mes {task.month}: {task.title}
                  </h3>
                  <ul style={{ paddingLeft: '20px' }}>
                    {task.items.map((item, i) => (
                      <li key={i} style={{ 
                        color: '#1e293b', 
                        fontWeight: '500',
                        marginBottom: '8px',
                        listStyle: 'none',
                        position: 'relative',
                        paddingLeft: '25px'
                      }}>
                        <CheckCircle 
                          size={16} 
                          color="#6ba644" 
                          style={{ 
                            position: 'absolute',
                            left: 0,
                            top: '3px'
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide3