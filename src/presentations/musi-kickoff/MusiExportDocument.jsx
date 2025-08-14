/**
 * Documento exportable HTML de la presentación Musi/FIFCO
 * Vista de documento tradicional para revisión y edición de contenido
 * Puede ser impreso o guardado como PDF desde el navegador
 */

import { useRef } from 'react'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './MusiExportDocument.css'

/**
 * Componente de documento exportable
 * Presenta el contenido de la presentación en formato de documento tradicional
 */
function MusiExportDocument() {
  const navigate = useNavigate()
  const contentRef = useRef(null)

  /**
   * Abre el diálogo de impresión del navegador
   */
  const handlePrint = () => {
    window.print()
  }

  /**
   * Navega de vuelta a la presentación
   */
  const handleBack = () => {
    navigate('/presentation/musi-kickoff')
  }

  return (
    <div className="export-container">
      {/* Header con controles */}
      <div className="export-controls no-print">
        <button onClick={handleBack} className="control-btn">
          <ArrowLeft size={20} />
          Volver a Presentación
        </button>
        <div className="control-group">
          <button onClick={handlePrint} className="control-btn primary">
            <Download size={20} />
            Exportar a PDF
          </button>
        </div>
      </div>

      {/* Documento principal */}
      <div className="document-container" ref={contentRef}>
        <div className="document-content">
          
          {/* Portada - Slide 1 */}
          <div className="document-page">
            <div className="page-header">
              <img src="/musi/Desktop - 49.svg" alt="Musi" className="logo-doc" />
              <img src="/wbi-logo.png" alt="WBI" className="logo-doc" />
            </div>
            <h1 className="doc-title main-title">Sistema de Gestión de Espacios Comerciales</h1>
            <h2 className="doc-subtitle">Kickoff Meeting - RFP-IMS-2025</h2>
            <div className="doc-info">
              <p><strong>Cliente:</strong> Musi / Mussmanni (FIFCO)</p>
              <p><strong>Proveedor:</strong> WBI Innovations</p>
              <p><strong>Fecha:</strong> Agosto 2025</p>
            </div>
            <div className="page-number">Página 1</div>
          </div>

          {/* Agenda - Slide 2 */}
          <div className="document-page">
            <h2 className="doc-title">Agenda de la Reunión</h2>
            <div className="agenda-list-doc">
              <div className="agenda-item-doc">
                <span className="agenda-num">1</span>
                <div>
                  <h3>Introducción y Bienvenida</h3>
                  <p>Presentación de equipos y objetivos de la reunión</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">2</span>
                <div>
                  <h3>Visión General del Proyecto</h3>
                  <p>Contexto, necesidades y oportunidades</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">3</span>
                <div>
                  <h3>Objetivos y Alcance</h3>
                  <p>Metas específicas y límites del proyecto</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">4</span>
                <div>
                  <h3>Funcionalidades Clave</h3>
                  <p>Demostración de capacidades principales</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">5</span>
                <div>
                  <h3>Cronograma y Fases</h3>
                  <p>Timeline detallado de implementación</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">6</span>
                <div>
                  <h3>Equipo de Trabajo</h3>
                  <p>Roles y responsabilidades</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">7</span>
                <div>
                  <h3>Próximos Pasos</h3>
                  <p>Acciones inmediatas y compromisos</p>
                </div>
              </div>
              <div className="agenda-item-doc">
                <span className="agenda-num">8</span>
                <div>
                  <h3>Sesión de Preguntas</h3>
                  <p>Espacio para dudas y aclaraciones</p>
                </div>
              </div>
            </div>
            <div className="page-number">Página 2</div>
          </div>

          {/* Sobre el Proyecto - Slide 3 */}
          <div className="document-page">
            <h2 className="doc-title">Sobre el Proyecto</h2>
            <h3 className="doc-section-title">Transformación Digital del Retail</h3>
            
            <div className="doc-section">
              <h4>El Desafío</h4>
              <p>En el competitivo mercado retail actual, la gestión eficiente de espacios comerciales 
              es crucial para maximizar ventas y mejorar la experiencia del cliente. Musi y Mussmanni 
              necesitan una solución tecnológica que les permita optimizar la distribución de productos 
              en sus múltiples puntos de venta.</p>
            </div>

            <div className="doc-section">
              <h4>La Solución</h4>
              <p>Un sistema integral de gestión de espacios comerciales que permite:</p>
              <ul>
                <li>Diseño visual e intuitivo de layouts de tienda</li>
                <li>Análisis de rendimiento por ubicación</li>
                <li>Gestión centralizada de múltiples tiendas</li>
                <li>Reportes y analytics en tiempo real</li>
              </ul>
            </div>

            <div className="doc-section">
              <h4>Beneficios Esperados</h4>
              <ul>
                <li><strong>30% de reducción</strong> en tiempo de planificación</li>
                <li><strong>25% de mejora</strong> en aprovechamiento del espacio</li>
                <li><strong>Centralización total</strong> de la información</li>
                <li><strong>Decisiones basadas en datos</strong> reales</li>
              </ul>
            </div>
            <div className="page-number">Página 3</div>
          </div>

          {/* Objetivos - Slide 4 */}
          <div className="document-page">
            <h2 className="doc-title">Objetivos del Proyecto</h2>
            
            <div className="objective-box">
              <h3>🎯 Objetivo Principal</h3>
              <p>Desarrollar e implementar un <strong>sistema integral de gestión</strong> de espacios 
              comerciales que permita a Musi y Mussmanni <strong>optimizar la distribución</strong> de 
              sus productos y mejorar la <strong>eficiencia operativa</strong> en todas sus tiendas.</p>
            </div>

            <div className="objectives-grid">
              <div className="objective-item">
                <h4>Optimizar la gestión de espacios</h4>
                <p>Maximizar el aprovechamiento del espacio disponible en cada tienda mediante 
                herramientas digitales avanzadas</p>
              </div>
              
              <div className="objective-item">
                <h4>Mejorar la experiencia del cliente</h4>
                <p>Facilitar la navegación y compra mediante una distribución estratégica de productos</p>
              </div>
              
              <div className="objective-item">
                <h4>Agilizar procesos operativos</h4>
                <p>Reducir tiempos de planificación y ejecución de cambios en layouts de tienda</p>
              </div>
              
              <div className="objective-item">
                <h4>Centralizar la información</h4>
                <p>Unificar la gestión de todas las tiendas en una plataforma única y accesible</p>
              </div>
            </div>

            <div className="value-box">
              <p><strong>Valor Estimado del Proyecto: $24,640.00</strong></p>
            </div>
            <div className="page-number">Página 4</div>
          </div>

          {/* Alcance - Slide 5 */}
          <div className="document-page">
            <h2 className="doc-title">Alcance del Proyecto</h2>
            
            <div className="scope-section">
              <h3>✅ Incluido en el Alcance</h3>
              <ul>
                <li>Editor visual drag-and-drop para diseño de espacios</li>
                <li>Biblioteca de elementos predefinidos (góndolas, exhibidores, etc.)</li>
                <li>Gestión multi-tienda desde plataforma centralizada</li>
                <li>Sistema de usuarios y permisos por rol</li>
                <li>Dashboard con métricas clave de rendimiento</li>
                <li>Reportes exportables en múltiples formatos</li>
                <li>Integración con sistemas actuales de inventario</li>
                <li>Capacitación completa al personal</li>
              </ul>
            </div>

            <div className="scope-section">
              <h3>❌ Fuera del Alcance</h3>
              <ul>
                <li>Modificación de sistemas POS existentes</li>
                <li>Hardware adicional (tablets, equipos)</li>
                <li>Rediseño físico de tiendas</li>
                <li>Gestión de inventario en tiempo real</li>
              </ul>
            </div>

            <div className="scope-section">
              <h3>📋 Supuestos del Proyecto</h3>
              <ul>
                <li>Disponibilidad del equipo de FIFCO para sesiones de trabajo</li>
                <li>Acceso a información actual de layouts de tienda</li>
                <li>Infraestructura de red adecuada en todas las ubicaciones</li>
                <li>Aprobaciones oportunas en cada fase del proyecto</li>
              </ul>
            </div>
            <div className="page-number">Página 5</div>
          </div>

          {/* Funcionalidades - Slide 6 */}
          <div className="document-page">
            <h2 className="doc-title">Funcionalidades Clave del Sistema</h2>
            
            <div className="features-list">
              <div className="feature-doc">
                <h3>🎨 Editor Visual Intuitivo</h3>
                <p>Diseño de espacios mediante drag & drop con vista previa en tiempo real y 
                biblioteca de elementos comerciales</p>
              </div>

              <div className="feature-doc">
                <h3>📊 Analytics Avanzado</h3>
                <p>Análisis de rendimiento por zona, heatmaps de tráfico y optimización 
                basada en datos históricos</p>
              </div>

              <div className="feature-doc">
                <h3>🏪 Gestión Multi-tienda</h3>
                <p>Control centralizado de todas las ubicaciones con templates 
                reutilizables y comparativas entre tiendas</p>
              </div>

              <div className="feature-doc">
                <h3>👥 Sistema de Colaboración</h3>
                <p>Flujos de aprobación integrados, comentarios en tiempo real y 
                historial de cambios detallado</p>
              </div>

              <div className="feature-doc">
                <h3>📱 Acceso Móvil</h3>
                <p>Aplicación responsive para tablets, consulta desde cualquier dispositivo y 
                actualizaciones en tiempo real</p>
              </div>

              <div className="feature-doc">
                <h3>🔄 Integraciones</h3>
                <p>Conexión con sistemas de inventario, exportación a formatos estándar y 
                API para futuras expansiones</p>
              </div>
            </div>
            <div className="page-number">Página 6</div>
          </div>

          {/* Cronograma - Slide 7 */}
          <div className="document-page">
            <h2 className="doc-title">Cronograma del Proyecto</h2>
            <h3 className="doc-subtitle">5 Fases | Agosto - Diciembre 2025</h3>
            
            <div className="timeline-doc">
              <div className="phase-doc">
                <div className="phase-header" style={{borderColor: '#4CAF50'}}>
                  <h4>Agosto - Análisis y Diseño</h4>
                  <span className="phase-weeks">Semanas 1-4</span>
                </div>
                <ul>
                  <li>Levantamiento de requerimientos</li>
                  <li>Diseño de arquitectura</li>
                  <li>Creación de mockups</li>
                </ul>
              </div>

              <div className="phase-doc">
                <div className="phase-header" style={{borderColor: '#2196F3'}}>
                  <h4>Septiembre - Desarrollo Backend</h4>
                  <span className="phase-weeks">Semanas 5-8</span>
                </div>
                <ul>
                  <li>Base de datos</li>
                  <li>APIs REST</li>
                  <li>Lógica de negocio</li>
                </ul>
              </div>

              <div className="phase-doc">
                <div className="phase-header" style={{borderColor: '#FF9800'}}>
                  <h4>Octubre - Desarrollo Frontend</h4>
                  <span className="phase-weeks">Semanas 9-12</span>
                </div>
                <ul>
                  <li>Interfaz de usuario</li>
                  <li>Editor visual</li>
                  <li>Dashboard</li>
                </ul>
              </div>

              <div className="phase-doc">
                <div className="phase-header" style={{borderColor: '#9C27B0'}}>
                  <h4>Noviembre - Testing y QA</h4>
                  <span className="phase-weeks">Semanas 13-16</span>
                </div>
                <ul>
                  <li>Pruebas unitarias</li>
                  <li>Pruebas de integración</li>
                  <li>Corrección de bugs</li>
                </ul>
              </div>

              <div className="phase-doc">
                <div className="phase-header" style={{borderColor: '#E31E24'}}>
                  <h4>Diciembre - Implementación</h4>
                  <span className="phase-weeks">Semanas 17-20</span>
                </div>
                <ul>
                  <li>Despliegue</li>
                  <li>Capacitación</li>
                  <li>Go-live</li>
                </ul>
              </div>
            </div>

            <div className="timeline-summary">
              <div className="summary-item">
                <h3>20</h3>
                <p>Semanas totales</p>
              </div>
              <div className="summary-item">
                <h3>5</h3>
                <p>Fases del proyecto</p>
              </div>
              <div className="summary-item">
                <h3>🚀</h3>
                <p>¡Iniciamos Agosto!</p>
              </div>
            </div>
            <div className="page-number">Página 7</div>
          </div>

          {/* Equipo - Slide 8 */}
          <div className="document-page">
            <h2 className="doc-title">Equipo de Trabajo</h2>
            <h3 className="doc-subtitle">Colaboración WBI Innovations & FIFCO</h3>
            
            <div className="team-grid-doc">
              <div className="team-member-doc">
                <h4>Francisco Gaivis</h4>
                <p className="role">Project Lead - WBI Innovations</p>
                <p className="email">fgaivis@wbinnova.com</p>
              </div>

              <div className="team-member-doc">
                <h4>Samuel Quiroz</h4>
                <p className="role">Tech Lead - WBI Innovations</p>
                <p className="email">squiroz@wbinnova.com</p>
              </div>

              <div className="team-member-doc">
                <h4>Krisia Díaz</h4>
                <p className="role">Project Manager - FIFCO</p>
                <p className="email">krisia.diaz@fifco.com</p>
              </div>

              <div className="team-member-doc">
                <h4>Vanessa Núñez</h4>
                <p className="role">Project Manager T&T - FIFCO</p>
                <p className="email">uidext2553@fifco.com</p>
              </div>

              <div className="team-member-doc">
                <h4>Ariana González</h4>
                <p className="role">Procurement - FIFCO</p>
                <p className="email">ariana.gonzalez@fifco.com</p>
              </div>

              <div className="team-member-doc">
                <h4>Hilary Quesada</h4>
                <p className="role">Legal & Contracts - FIFCO</p>
                <p className="email">hilary.quesada@fifco.com</p>
              </div>
            </div>

            <div className="methodology-doc">
              <h3>Metodología de Trabajo</h3>
              <div className="method-grid">
                <div>
                  <h4>Comunicación</h4>
                  <ul>
                    <li>Reuniones semanales de seguimiento</li>
                    <li>Canal dedicado en Teams</li>
                    <li>Reportes de avance quincenal</li>
                  </ul>
                </div>
                <div>
                  <h4>Desarrollo</h4>
                  <ul>
                    <li>Metodología Agile/Scrum</li>
                    <li>Sprints de 2 semanas</li>
                    <li>Demos al final de cada sprint</li>
                  </ul>
                </div>
                <div>
                  <h4>Colaboración</h4>
                  <ul>
                    <li>GitHub para control de versiones</li>
                    <li>Jira para gestión de tareas</li>
                    <li>Confluence para documentación</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="page-number">Página 8</div>
          </div>

          {/* Próximos Pasos - Slide 9 */}
          <div className="document-page">
            <h2 className="doc-title">Próximos Pasos</h2>
            <h3 className="doc-subtitle">Acciones inmediatas para iniciar el proyecto</h3>
            
            <div className="next-steps-doc">
              <div className="step-doc urgent">
                <h4>📄 Firma de Contrato</h4>
                <p>Formalización legal del proyecto</p>
                <span className="step-date">Esta semana</span>
              </div>

              <div className="step-doc upcoming">
                <h4>👥 Reunión de Requerimientos</h4>
                <p>Sesión detallada con usuarios clave</p>
                <span className="step-date">Próxima semana</span>
              </div>

              <div className="step-doc upcoming">
                <h4>📅 Cronograma Detallado</h4>
                <p>Definición de milestones y entregables</p>
                <span className="step-date">Próxima semana</span>
              </div>

              <div className="step-doc planned">
                <h4>💻 Inicio de Desarrollo</h4>
                <p>Configuración de ambiente y primeros módulos</p>
                <span className="step-date">Semana 3</span>
              </div>

              <div className="step-doc planned">
                <h4>✅ Primera Demo</h4>
                <p>Presentación de avances iniciales</p>
                <span className="step-date">Fin de Agosto</span>
              </div>
            </div>

            <div className="commitment-box">
              <h3>🎯 Compromiso de Éxito</h3>
              <p>En <strong>WBI Innovations</strong> estamos comprometidos con el éxito de este proyecto. 
              Trabajaremos de la mano con el equipo de <strong>FIFCO</strong> para asegurar la entrega 
              de una solución que <strong>supere las expectativas</strong>.</p>
              <p className="cta-text">¡Comencemos este viaje juntos! 🚀</p>
            </div>
            <div className="page-number">Página 9</div>
          </div>

          {/* Q&A - Slide 10 */}
          <div className="document-page">
            <h2 className="doc-title">Sesión de Preguntas y Respuestas</h2>
            
            <div className="qa-section">
              <h3>¿Preguntas?</h3>
              <p>Este es el momento para aclarar cualquier duda sobre el proyecto, 
              su alcance, implementación o cualquier otro aspecto relevante.</p>
            </div>

            <div className="contact-section">
              <h3>Información de Contacto</h3>
              
              <div className="contact-grid">
                <div className="contact-card">
                  <h4>WBI Innovations</h4>
                  <p><strong>Francisco Gaivis</strong></p>
                  <p>Project Lead</p>
                  <p>📧 fgaivis@wbinnova.com</p>
                  <p>📱 (+506) 8888-8888</p>
                </div>

                <div className="contact-card">
                  <h4>FIFCO - Musi/Mussmanni</h4>
                  <p><strong>Krisia Díaz</strong></p>
                  <p>Project Manager</p>
                  <p>📧 krisia.diaz@fifco.com</p>
                  <p>📱 (+506) 7777-7777</p>
                </div>
              </div>
            </div>

            <div className="thank-you">
              <h2>¡Gracias por su tiempo!</h2>
              <p>Esperamos con entusiasmo trabajar juntos en este proyecto</p>
            </div>
            <div className="page-number">Página 10</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MusiExportDocument