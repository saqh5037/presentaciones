import { motion } from 'framer-motion'
import { useState } from 'react'
import { Brain, FileText, Code, ListTodo, Sparkles, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

function Slide10() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [showProblem, setShowProblem] = useState(true)
  const [showSolution, setShowSolution] = useState(false)
  const [showWorkflow, setShowWorkflow] = useState(false)

  const components = [
    {
      id: 'prd',
      name: 'PRD',
      fullName: 'Project Requirements Document',
      icon: FileText,
      color: '#9333ea',
      description: 'La visión y requisitos del proyecto',
      details: [
        'Hoja de ruta completa',
        'Objetivos y especificaciones',
        'Fuente de verdad principal',
        'Base para otros archivos'
      ]
    },
    {
      id: 'claude',
      name: 'claude.md',
      fullName: 'Manual de Operaciones IA',
      icon: Brain,
      color: '#ffd89b',
      description: 'Las reglas de trabajo para Claude',
      details: [
        'Lee planning.md al inicio',
        'Verifica tasks.md siempre',
        'Marca tareas completadas',
        'Añade tareas nuevas'
      ]
    },
    {
      id: 'planning',
      name: 'planning.md',
      fullName: 'Plano Arquitectónico',
      icon: Code,
      color: '#60a5fa',
      description: 'Arquitectura y stack tecnológico',
      details: [
        'Arquitectura del software',
        'Stack tecnológico (React, Node)',
        'Herramientas y librerías',
        'Decisiones técnicas'
      ]
    },
    {
      id: 'tasks',
      name: 'tasks.md',
      fullName: 'Mapa de Ruta Dinámico',
      icon: ListTodo,
      color: '#4ade80',
      description: 'Estado y progreso del proyecto',
      details: [
        'Lista granular de tareas',
        'Seguimiento de progreso',
        'Fechas de completado',
        'Tareas descubiertas'
      ]
    }
  ]

  const problems = [
    { text: 'Recreación de archivos existentes', icon: '🔄' },
    { text: 'Duplicación de tareas', icon: '👥' },
    { text: 'Olvido de tareas importantes', icon: '❌' },
    { text: 'Pérdida de contexto entre sesiones', icon: '🧠' }
  ]

  return (
    <div className="claude-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1400px' }}
      >
        {/* Background Particles Effect */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '12px'
              }}
            >
              <Brain size={22} color="#ffd89b" />
            </motion.div>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Dale Supermemoria a Claude Code</h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          Marco Metodológico de 4 Componentes
        </motion.p>

        {/* Problem Section */}
        {showProblem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '20px' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%)',
              border: '3px solid #ef4444',
              borderRadius: '20px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <AlertCircle size={24} color="#ef4444" />
                <h3 style={{ fontSize: '1.4rem', color: '#ef4444', margin: 0 }}>
                  El Problema: Claude olvida todo entre sesiones
                </h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '10px'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{problem.icon}</span>
                    <span style={{ color: '#e0e0e0', fontSize: '0.95rem' }}>{problem.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowProblem(false)
                  setShowSolution(true)
                }}
                style={{
                  marginTop: '15px',
                  background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '10px 25px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1a1a2e'
                }}
              >
                Ver la Solución <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Solution Section - 4 Components */}
        {showSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '15px',
              marginBottom: '20px'
            }}>
              {components.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveComponent(component.id)}
                  style={{
                    background: activeComponent === component.id
                      ? `linear-gradient(135deg, ${component.color}30 0%, ${component.color}15 100%)`
                      : 'linear-gradient(135deg, rgba(255, 216, 155, 0.08) 0%, rgba(255, 179, 71, 0.03) 100%)',
                    border: `2px solid ${activeComponent === component.id ? component.color : 'rgba(255, 216, 155, 0.3)'}`,
                    borderRadius: '15px',
                    padding: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <motion.div
                      animate={activeComponent === component.id ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 1 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `linear-gradient(135deg, ${component.color}20 0%, ${component.color}10 100%)`,
                        border: `2px solid ${component.color}`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px'
                      }}
                    >
                      <component.icon size={24} color={component.color} />
                    </motion.div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      color: component.color,
                      marginBottom: '5px',
                      fontWeight: '700'
                    }}>
                      {component.name}
                    </h4>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#b0b0b0',
                      marginBottom: '8px'
                    }}>
                      {component.fullName}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#e0e0e0'
                    }}>
                      {component.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Component Details */}
            {activeComponent && (
              <motion.div
                key={activeComponent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                  border: '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '15px',
                  padding: '15px',
                  marginBottom: '20px'
                }}
              >
                <h3 style={{ color: '#ffd89b', marginBottom: '10px', fontSize: '1.2rem' }}>
                  {components.find(c => c.id === activeComponent)?.name} - Funciones Clave:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {components.find(c => c.id === activeComponent)?.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <CheckCircle size={16} color="#4ade80" />
                      <span style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {!showWorkflow && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowWorkflow(true)}
                style={{
                  background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '10px 25px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1a1a2e',
                  margin: '0 auto'
                }}
              >
                Ver Workflow <ArrowRight size={18} />
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Workflow Section */}
        {showWorkflow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%)',
              border: '3px solid #4ade80',
              borderRadius: '20px',
              padding: '20px',
              marginTop: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <Sparkles size={24} color="#4ade80" />
              <h3 style={{ fontSize: '1.4rem', color: '#4ade80', margin: 0 }}>
                Workflow en Acción
              </h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
              <div>
                <h4 style={{ color: '#ffd89b', marginBottom: '10px' }}>🚀 Inicio del Proyecto:</h4>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                  padding: '10px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#4ade80'
                }}>
                  "Por favor, lee planning.md, claude.md y tasks.md para entender el proyecto. Luego, completa la primera tarea."
                </div>
              </div>
              
              <div>
                <h4 style={{ color: '#ffd89b', marginBottom: '10px' }}>🔄 Continuar Trabajo:</h4>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                  padding: '10px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#4ade80'
                }}>
                  "Verifica claude.md, planning.md y tasks.md. Luego, continúa desde donde lo dejamos."
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                marginTop: '15px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '15px',
                padding: '15px',
                textAlign: 'center'
              }}
            >
              <p style={{
                fontSize: '1.2rem',
                color: '#ffd89b',
                fontWeight: '700',
                marginBottom: '5px'
              }}>
                💡 Pro Tip: Guarda resúmenes de sesión
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: '#e0e0e0'
              }}>
                Al final de cada sesión, pide a Claude que añada un resumen a claude.md para preservar el contexto
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide10Memory