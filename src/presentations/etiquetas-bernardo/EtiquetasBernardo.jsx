import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Printer, Download, Palette, BookOpen, Pencil, Eraser, Hash, Package, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './EtiquetasBernardo.css'

function EtiquetasBernardo() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('all')
  const [selectedTheme, setSelectedTheme] = useState('spiderman')
  const [showPrintModal, setShowPrintModal] = useState(false)

  const labelTypes = [
    { id: 'pencils', name: 'Lápices', icon: Pencil, count: 12 },
    { id: 'books', name: 'Libros', icon: BookOpen, count: 6 },
    { id: 'colors', name: 'Colores', icon: Palette, count: 24 },
    { id: 'eraser', name: 'Borradores', icon: Eraser, count: 4 },
    { id: 'sharpener', name: 'Sacapuntas', icon: Package, count: 4 },
    { id: 'others', name: 'Otros', icon: Hash, count: 8 }
  ]

  const handlePrint = () => {
    window.print()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const renderLabels = (type, count) => {
    const labels = []
    for (let i = 0; i < count; i++) {
      labels.push(
        <motion.div
          key={`${type}-${i}`}
          className={`label label-${type} theme-${selectedTheme} ${type === 'books' ? 'label-large' : ''}`}
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotate: selectedTheme === 'sonic' ? -1 : 1 }}
        >
          {/* Background pattern based on theme */}
          {selectedTheme === 'spiderman' ? (
            <div className="spider-web"></div>
          ) : (
            <div className="sonic-rings"></div>
          )}
          
          {/* Theme icon */}
          <div className="theme-icon">
            {selectedTheme === 'spiderman' ? (
              <div className="spiderman-image-container">
                <img 
                  src="/spiderman.png"
                  alt="Spiderman"
                  className="theme-image spiderman-real"
                  onError={(e) => {
                    // Si no existe la imagen local, usa un placeholder
                    console.log('⚠️ Imagen de Spiderman no encontrada. Guarda spiderman.png en la carpeta public/');
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg,#c8102e,#8b0000);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:bold;">S</div>';
                  }}
                />
              </div>
            ) : (
              <div className="sonic-image-container">
                <img 
                  src="/sonic.png"
                  alt="Sonic"
                  className="theme-image sonic-real"
                  onError={(e) => {
                    // Si no existe la imagen local, usa un placeholder
                    console.log('⚠️ Imagen de Sonic no encontrada. Guarda sonic.png en la carpeta public/');
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg,#0066ff,#003399);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:bold;">S</div>';
                  }}
                />
                <img 
                  src="/ring.png"
                  alt="Ring"
                  className="sonic-ring"
                  onError={(e) => {
                    console.log('⚠️ Imagen del anillo no encontrada. Guarda ring.png en la carpeta public/');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Label content */}
          <div className="label-content">
            <h3 className="owner-name">
              {type === 'books' ? 'Bernardo Alejandro Quiroz Lares' : 'Bernardo A. Quiroz L.'}
            </h3>
            <div className="grade-info">1° Grado - Primaria</div>
            <div className="label-type">
              {type === 'pencils' && 'Mi Lápiz'}
              {type === 'books' && 'Mi Libro'}
              {type === 'colors' && 'Mi Color'}
              {type === 'eraser' && 'Mi Borrador'}
              {type === 'sharpener' && 'Mi Sacapuntas'}
              {type === 'others' && 'Mi Material'}
            </div>
          </div>

          {/* Decorative element */}
          <div className="corner-decoration">
            {selectedTheme === 'spiderman' ? (
              <svg viewBox="0 0 30 30" width="30" height="30">
                <circle cx="15" cy="15" r="5" fill="#000"/>
                <circle cx="15" cy="15" r="3" fill="#c8102e"/>
                <path d="M15 10 L15 5 M15 20 L15 25 M10 15 L5 15 M20 15 L25 15" stroke="#000" strokeWidth="1"/>
                <path d="M11 11 L7 7 M19 11 L23 7 M11 19 L7 23 M19 19 L23 23" stroke="#000" strokeWidth="1"/>
              </svg>
            ) : (
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cellipse cx='15' cy='15' rx='12' ry='10' fill='%23ffcc00' stroke='%23ff9900' stroke-width='1.5'/%3E%3Cellipse cx='15' cy='15' rx='8' ry='6' fill='%23ffdd44'/%3E%3C/svg%3E"
                alt="Ring"
                style={{ width: '30px', height: '30px' }}
              />
            )}
          </div>
        </motion.div>
      )
    }
    return labels
  }

  return (
    <div className="app">
      <div className="etiquetas-container">
        {/* Header */}
        <div className="etiquetas-header no-print">
        <motion.button
          className="back-button"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </motion.button>

        <div className="header-title">
          <h1>Etiquetas de Bernardo Alejandro</h1>
          <p>Material Escolar - 1° Grado de Primaria {selectedTheme === 'spiderman' ? '🕷️' : '💨'}</p>
        </div>

        <div className="header-actions">
          <motion.button
            className="action-button print"
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Printer size={20} />
            Imprimir
          </motion.button>
        </div>
      </div>

      {/* Theme Selector */}
      <div className="theme-selector no-print">
        <button
          className={selectedTheme === 'spiderman' ? 'active' : ''}
          onClick={() => setSelectedTheme('spiderman')}
          style={{ background: selectedTheme === 'spiderman' ? 'linear-gradient(135deg, #c8102e, #0066cc)' : '' }}
        >
          🕷️ Spiderman
        </button>
        <button
          className={selectedTheme === 'sonic' ? 'active' : ''}
          onClick={() => setSelectedTheme('sonic')}
          style={{ background: selectedTheme === 'sonic' ? 'linear-gradient(135deg, #0066ff, #ffcc00)' : '' }}
        >
          💨 Sonic
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs no-print">
        <button
          className={selectedType === 'all' ? 'active' : ''}
          onClick={() => setSelectedType('all')}
        >
          Todas
        </button>
        {labelTypes.map(type => {
          const Icon = type.icon
          return (
            <button
              key={type.id}
              className={selectedType === type.id ? 'active' : ''}
              onClick={() => setSelectedType(type.id)}
            >
              <Icon size={16} />
              {type.name} ({type.count})
            </button>
          )
        })}
      </div>

      {/* Labels Grid */}
      <motion.div 
        className="labels-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {selectedType === 'all' ? (
          labelTypes.map(type => renderLabels(type.id, type.count))
        ) : (
          renderLabels(selectedType, labelTypes.find(t => t.id === selectedType)?.count || 0)
        )}
      </motion.div>

      {/* Print Instructions */}
      <div className="print-instructions no-print">
        <h3>📌 Instrucciones de Impresión:</h3>
        <ol>
          <li>Usa papel adhesivo tamaño carta o A4</li>
          <li>Configura la impresora en calidad alta</li>
          <li>Desactiva los márgenes en la configuración de impresión</li>
          <li>Recorta las etiquetas por las líneas punteadas</li>
          <li>Para mayor durabilidad, puedes plastificar las etiquetas de libros</li>
        </ol>
      </div>

      {/* Floating Animation */}
      <motion.div 
        className="floating-character no-print"
        animate={{ 
          y: [0, -20, 0],
          rotate: selectedTheme === 'sonic' ? [0, 360] : [0, 10, -10, 0]
        }}
        transition={{ 
          duration: selectedTheme === 'sonic' ? 2 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {selectedTheme === 'spiderman' ? (
          <svg viewBox="0 0 50 50" width="50" height="50">
            <circle cx="25" cy="25" r="8" fill="#000"/>
            <circle cx="25" cy="25" r="5" fill="#c8102e"/>
            <path d="M25 17 L25 10 M25 33 L25 40 M17 25 L10 25 M33 25 L40 25" stroke="#000" strokeWidth="2"/>
            <path d="M19 19 L13 13 M31 19 L37 13 M19 31 L13 37 M31 31 L37 37" stroke="#000" strokeWidth="2"/>
            <circle cx="22" cy="23" r="1" fill="#fff"/>
            <circle cx="28" cy="23" r="1" fill="#fff"/>
          </svg>
        ) : (
          <Zap size={50} color="#0066ff" />
        )}
      </motion.div>
      </div>
    </div>
  )
}

export default EtiquetasBernardo