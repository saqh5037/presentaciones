/**
 * Vista de impresión para presentación Musi/FIFCO
 * Muestra todas las slides en una sola página para exportar a PDF
 * Mantiene el diseño original de cada slide
 */

import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Printer } from 'lucide-react'
import './MusiKickoff.css'

// Importar todos los componentes de slides
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Slide9 from './Slide9'
import Slide10 from './Slide10'

/**
 * Componente de vista de impresión
 * Renderiza todas las 10 slides de la presentación en formato imprimible
 */
function MusiPrintView() {
  const navigate = useNavigate()
  
  // Configuración de las slides a mostrar
  const slides = [
    { component: Slide1, title: 'Bienvenida' },
    { component: Slide2, title: 'Agenda' },
    { component: Slide3, title: 'Sobre el Proyecto' },
    { component: Slide4, title: 'Objetivos' },
    { component: Slide5, title: 'Alcance' },
    { component: Slide6, title: 'Funcionalidades Clave' },
    { component: Slide7, title: 'Cronograma' },
    { component: Slide8, title: 'Equipo de Trabajo' },
    { component: Slide9, title: 'Próximos Pasos' },
    { component: Slide10, title: 'Q&A' }
  ]

  /**
   * Abre el diálogo de impresión del navegador
   */
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Controles - No se imprimen */}
      <div className="print-controls no-print" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        zIndex: 1000
      }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowLeft size={20} />
          Volver al Dashboard
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: '#E31E24', fontSize: '20px' }}>Vista de Impresión</h2>
          <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Musi/FIFCO Kickoff Meeting</p>
        </div>
        
        <button 
          onClick={handlePrint}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: '#E31E24',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
        >
          <Printer size={20} />
          Imprimir / Guardar PDF
        </button>
      </div>

      {/* Contenedor de todas las slides */}
      <div className="print-container" style={{
        paddingTop: '90px',
        background: '#f5f5f5'
      }}>
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          return (
            <div 
              key={index}
              className="print-slide-wrapper"
              style={{
                width: '100%',
                minHeight: '100vh',
                pageBreakAfter: 'always',
                pageBreakInside: 'avoid',
                marginBottom: '20px',
                position: 'relative',
                background: 'white',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}
            >
              {/* Número de slide */}
              <div className="no-print" style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#E31E24',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                zIndex: 10
              }}>
                Slide {index + 1} / {slides.length}
              </div>
              
              {/* Contenido de la slide */}
              <div style={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <SlideComponent />
              </div>
            </div>
          )
        })}
      </div>

      {/* Estilos específicos para impresión */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .print-container {
            padding-top: 0 !important;
            background: white !important;
          }
          
          .print-slide-wrapper {
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            box-shadow: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
          }
          
          .print-slide-wrapper:last-child {
            page-break-after: auto !important;
          }
          
          .musi-slide {
            width: 100% !important;
            height: 100vh !important;
            padding: 40px !important;
            box-sizing: border-box !important;
          }
          
          /* Asegurar que los colores se impriman */
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Ajustar tamaños de fuente para impresión */
          .musi-slide h1 {
            font-size: 2.5rem !important;
          }
          
          .musi-slide h2 {
            font-size: 1.8rem !important;
          }
          
          .musi-slide h3 {
            font-size: 1.4rem !important;
          }
          
          .musi-slide p {
            font-size: 1rem !important;
          }
          
          /* Ocultar elementos de navegación */
          .menu,
          .menu-toggle,
          .navigation-arrows,
          .slide-counter,
          .progress-bar,
          .home-button,
          .export-button {
            display: none !important;
          }
        }
        
        @page {
          size: A4 landscape;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default MusiPrintView