import { motion } from 'framer-motion'
import MicrotecLogo from './MicrotecLogo'
import { useState } from 'react'
import { Brain, Activity, AlertTriangle, TrendingUp, Shield, Clock } from 'lucide-react'

function Slide6() {
  const [selectedSystem, setSelectedSystem] = useState(null)

  const aiSystems = [
    {
      id: 'validation',
      title: 'Validación Inteligente',
      icon: <Shield size={35} />,
      month: 'Mes 13',
      color: '#1e3a8a',
      metric: '60%',
      metricLabel: 'Auto-validación',
      features: [
        'Detección de valores críticos',
        'Comparación con históricos',
        'Identificación de anomalías',
        'Correlación entre pruebas',
        'Flags automáticos para revisión'
      ],
      tech: ['Scikit-learn', 'TensorFlow', 'Motor de reglas', 'HL7 Integration'],
      benefits: [
        { label: 'Reducción errores', value: '-45%' },
        { label: 'Velocidad validación', value: '+3x' },
        { label: 'Alertas críticas', value: '100%' }
      ]
    },
    {
      id: 'workflow',
      title: 'Optimización de Workflow',
      icon: <Activity size={35} />,
      month: 'Mes 14',
      color: '#6ba644',
      metric: '-30%',
      metricLabel: 'TAT reducido',
      features: [
        'Priorización dinámica',
        'Balanceo de carga entre equipos',
        'Predicción de TAT',
        'Alertas de retrasos',
        'Optimización de lotes'
      ],
      tech: ['Python OR-Tools', 'Apache Airflow', 'Redis Queue', 'Real-time Analytics'],
      benefits: [
        { label: 'Utilización equipos', value: '+25%' },
        { label: 'Muestras urgentes', value: '<2hrs' },
        { label: 'Satisfacción cliente', value: '+30%' }
      ]
    },
    {
      id: 'quality',
      title: 'Control Calidad Predictivo',
      icon: <AlertTriangle size={35} />,
      month: 'Mes 15',
      color: '#ef4444',
      metric: '-20%',
      metricLabel: 'Fallas equipos',
      features: [
        'Predicción de fallas en equipos',
        'Detección drift calibración',
        'Análisis tendencias Westgard',
        'Mantenimiento predictivo',
        'Optimización consumibles'
      ],
      tech: ['Time Series ML', 'Anomaly Detection', 'Westgard Rules', 'IoT Sensors'],
      benefits: [
        { label: 'Downtime equipos', value: '-50%' },
        { label: 'Costos mantenimiento', value: '-35%' },
        { label: 'Vida útil equipos', value: '+20%' }
      ]
    }
  ]

  const processFlow = [
    { step: 'Recepción', ai: 'Priorización automática' },
    { step: 'Procesamiento', ai: 'Balanceo de carga IA' },
    { step: 'Validación', ai: 'Auto-validación 60%' },
    { step: 'Liberación', ai: 'QC predictivo' },
    { step: 'Entrega', ai: 'Predicción TAT' }
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
          }}>Inteligencia Artificial en Laboratorio</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', fontWeight: '500' }}>
          IA aplicada a procesos core del laboratorio (Meses 13-15)
        </p>

        {/* AI Systems Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {aiSystems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedSystem(system)}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${system.color}20`,
                borderTop: `4px solid ${system.color}`,
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
                borderRadius: '20px',
                padding: '20px',
                minHeight: '320px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  color: system.color,
                  background: `${system.color}15`,
                  padding: '12px',
                  borderRadius: '12px',
                  border: `1px solid ${system.color}30`
                }}>
                  {system.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: '#1e3a8a', 
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '5px'
                  }}>
                    {system.title}
                  </h3>
                  <div style={{ color: '#475569', fontSize: '0.9rem' }}>
                    {system.month}
                  </div>
                </div>
              </div>

              {/* Main Metric */}
              <div style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
                border: `1px solid ${system.color}30`,
                borderRadius: '15px',
                padding: '15px',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold',
                  color: system.color
                }}>
                  {system.metric}
                </div>
                <div style={{ color: '#475569', fontSize: '0.9rem' }}>
                  {system.metricLabel}
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '15px' }}>
                {system.features.slice(0, 3).map((feature, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: system.color,
                      borderRadius: '50%'
                    }} />
                    <span style={{ color: '#1e293b', fontWeight: '500', fontSize: '0.9rem' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* View Details */}
              <div style={{
                color: '#1e3a8a',
                fontSize: '0.85rem',
                textAlign: 'center',
                marginTop: '10px'
              }}>
                Click para ver detalles →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow with AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf8 100%)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)',
            padding: '30px',
            marginBottom: '40px'
          }}
        >
          <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
            Flujo de Trabajo con IA Integrada
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {processFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                style={{
                  flex: '1',
                  minWidth: '150px',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '15px',
                  padding: '15px'
                }}>
                  <div style={{ 
                    color: '#1e3a8a', 
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '8px'
                  }}>
                    {item.step}
                  </div>
                  <div style={{ 
                    color: '#6ba644', 
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    <Brain size={16} style={{ marginBottom: '-3px', marginRight: '5px' }} />
                    {item.ai}
                  </div>
                </div>
                
                {index < processFlow.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#3b82f6',
                    fontSize: '1.5rem'
                  }}>
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combined Impact */}
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
          <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>
            Impacto Combinado de IA en Laboratorio
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <Clock size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e3a8a' }}>
                -30%
              </div>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>TAT</div>
            </div>
            <div>
              <Shield size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#6ba644' }}>
                60%
              </div>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>Auto-validación</div>
            </div>
            <div>
              <AlertTriangle size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ef4444' }}>
                -45%
              </div>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>Errores</div>
            </div>
            <div>
              <TrendingUp size={30} color="#1e3a8a" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#6ba644' }}>
                +25%
              </div>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>Productividad</div>
            </div>
          </div>
        </motion.div>

        {/* Details Modal */}
        {selectedSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedSystem(null)}
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
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '700px',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}
            >
              <h2 style={{ color: '#1e3a8a', fontSize: '2rem', fontWeight: '700', marginBottom: '25px' }}>
                {selectedSystem.title}
              </h2>
              
              {/* Tech Stack */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>
                  Stack Tecnológico
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedSystem.tech.map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(30, 58, 138, 0.2)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      color: '#1e293b',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>
                  Beneficios Esperados
                </h3>
                {selectedSystem.benefits.map((benefit, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                    borderRadius: '8px'
                  }}>
                    <span style={{ color: '#1e293b', fontWeight: '500' }}>{benefit.label}</span>
                    <span style={{ color: '#1e3a8a', fontWeight: 'bold' }}>
                      {benefit.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide6