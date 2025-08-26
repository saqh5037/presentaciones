import { motion } from 'framer-motion'
import { Package, Store, MapPin, FileText, Users, BarChart3, Calendar, AlertCircle } from 'lucide-react'

function Slide6() {
  const deliverables = [
    {
      id: 1,
      title: "Gestión de tiendas",
      icon: Store,
      description: "Administración de tiendas. Creación, eliminación y actualización de tiendas. Asignación de espacios en cada tienda. Registro de cambios en la disposición de los espacios.",
      phase1: 50,
      phase2: 100,
      color: "#2196F3"
    },
    {
      id: 2,
      title: "Gestión de espacios",
      icon: MapPin,
      description: "Visualización de espacios disponibles, dimensiones, tipo de material, asignación de proveedores.",
      phase1: 50,
      phase2: 100,
      color: "#4CAF50"
    },
    {
      id: 3,
      title: "Reserva y compra de espacios",
      icon: Package,
      description: "Registro y administración de los proveedores. Asignación de espacios disponibles a cada proveedor. Registro de la duración del contrato y costos asociados.",
      phase1: 60,
      phase1Implementation: 50,
      phase2: 100,
      color: "#FF9800"
    },
    {
      id: 4,
      title: "Facturación y reportes",
      icon: FileText,
      description: "Automatización de la facturación según contratos activos. Generación de reportes sobre ingresos, ocupación de espacios y vencimientos.",
      phase1: 10,
      phase2: 100,
      color: "#9C27B0"
    },
    {
      id: 5,
      title: "Gestión de usuarios, permisos y repositorios",
      icon: Users,
      description: "Definición de roles. Control de accesos y permisos. Almacenamiento de contratos. Registro de pagos y facturas. Acceso a documentos históricos.",
      phase1: 100,
      phase2: 100,
      color: "#F44336"
    }
  ]

  return (
    <div className="slide-fifco slide6-scope" style={{ backgroundColor: 'white' }}>
      <div className="scope-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '1.25rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
            color: 'var(--fifco-blue-dark)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: '0.25rem'
          }}>
            Funcionalidades Clave
          </h1>
          <p style={{ 
            fontSize: '0.9rem', 
            color: 'var(--fifco-dark)',
            opacity: 0.8
          }}>
            Sistema de Rollout para entrega continua
          </p>
        </motion.div>

        {/* Fases Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            gap: '1.5rem'
          }}
        >
          {/* Primera Fase */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
            padding: '1rem',
            borderRadius: '12px',
            border: '2px solid #FF9800',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}>
              <Calendar size={20} color="#FF9800" />
              <h3 style={{ 
                color: '#E65100',
                fontSize: '1rem',
                fontWeight: 'bold',
                margin: 0
              }}>
                Primera Fase
              </h3>
            </div>
            <p style={{ 
              color: '#BF360C',
              fontSize: '0.8rem',
              margin: '0.15rem 0',
              fontWeight: '600'
            }}>
              Versión Piloto - 17 Noviembre 2025
            </p>
            <p style={{ 
              color: '#795548',
              fontSize: '0.75rem',
              margin: 0
            }}>
              Versión preliminar de entrada
            </p>
          </div>

          {/* Segunda Fase */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
            padding: '1rem',
            borderRadius: '12px',
            border: '2px solid #4CAF50',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}>
              <Calendar size={20} color="#4CAF50" />
              <h3 style={{ 
                color: '#1B5E20',
                fontSize: '1rem',
                fontWeight: 'bold',
                margin: 0
              }}>
                Segunda Fase
              </h3>
            </div>
            <p style={{ 
              color: '#2E7D32',
              fontSize: '0.8rem',
              margin: '0.15rem 0',
              fontWeight: '600'
            }}>
              Versión Completa - Enero 2026
            </p>
            <p style={{ 
              color: '#558B2F',
              fontSize: '0.75rem',
              margin: 0
            }}>
              Versión entregable final
            </p>
          </div>
        </motion.div>

        {/* Entregables Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.25rem'
        }}>
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon
            return (
              <motion.div
                key={deliverable.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
                }}
                style={{
                  background: 'white',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                  border: `2px solid ${deliverable.color}20`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Número del entregable */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: deliverable.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {deliverable.id}
                </div>

                {/* Header del entregable */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${deliverable.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={22} color={deliverable.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.15rem',
                      fontWeight: 'bold',
                      color: '#333',
                      margin: '0 0 0.25rem',
                      lineHeight: '1.2'
                    }}>
                      {deliverable.title}
                    </h4>
                  </div>
                </div>

                {/* Descripción */}
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  minHeight: '70px'
                }}>
                  {deliverable.description}
                </p>

                {/* Barras de progreso */}
                <div style={{ marginTop: 'auto' }}>
                  {/* Fase 1 */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.25rem'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: '600' }}>
                        Fase 1
                      </span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: deliverable.phase1 === 100 ? '#4CAF50' : '#FF9800',
                        fontWeight: 'bold'
                      }}>
                        {deliverable.phase1}%
                        {deliverable.phase1Implementation && ` (Impl: ${deliverable.phase1Implementation}%)`}
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${deliverable.phase1}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        style={{
                          height: '100%',
                          background: deliverable.phase1 === 100 
                            ? 'linear-gradient(90deg, #4CAF50, #66BB6A)'
                            : 'linear-gradient(90deg, #FF9800, #FFB74D)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>

                  {/* Fase 2 */}
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.25rem'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: '600' }}>
                        Fase 2
                      </span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: '#4CAF50',
                        fontWeight: 'bold'
                      }}>
                        {deliverable.phase2}%
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${deliverable.phase2}%` }}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.8 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #4CAF50, #66BB6A)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Badge completado */}
                {deliverable.completed && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)'
                  }}>
                    ✓ COMPLETADO
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Nota importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
            padding: '1rem',
            borderRadius: '12px',
            border: '2px solid #FF9800',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}
        >
          <AlertCircle size={20} color="#E65100" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{
              color: '#E65100',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '0.3rem'
            }}>
              Nota Importante
            </h4>
            <p style={{
              color: '#795548',
              fontSize: '0.8rem',
              lineHeight: '1.4',
              margin: 0
            }}>
              Vamos a utilizar un sistema de <strong>Rollout para entrega continua</strong>. 
              Se ajusta el alcance tomando en cuenta el moratorio. 
              Los entregables se implementarán de forma progresiva para asegurar la calidad y adopción del sistema.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide6