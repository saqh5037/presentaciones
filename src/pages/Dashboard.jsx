import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Plus, Search, Filter, Grid, List, Calendar, Clock, 
  Tag, Building2, User, Globe, Eye, Edit, Trash2,
  FolderOpen, Star, TrendingUp, FileText, Download
} from 'lucide-react'
import { presentations, categories, getCategoryById, getPresentationsByCategory } from '../data/presentations'
import { exportToWord } from '../utils/exportUtils'
import { exportPresentationToPDFSimple } from '../utils/exportPresentationPDF'

function Dashboard() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [filteredPresentations, setFilteredPresentations] = useState(presentations)
  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    let filtered = [...presentations]
    
    if (selectedCategory !== 'all') {
      filtered = getPresentationsByCategory(selectedCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(pres => 
        pres.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pres.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pres.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    setFilteredPresentations(filtered)
  }, [searchTerm, selectedCategory])

  const getCategoryIcon = (iconName) => {
    const icons = {
      User: User,
      Building2: Building2,
      Globe: Globe
    }
    const Icon = icons[iconName] || FolderOpen
    return Icon
  }

  const handlePresentationClick = (presentation) => {
    navigate(presentation.path)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <motion.header 
        className="dashboard-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <div className="header-left">
            <h1>Centro de Presentaciones</h1>
            <p>Administra y visualiza todas tus presentaciones interactivas</p>
          </div>
          <div className="header-right">
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/templates')}
            >
              <FolderOpen size={20} />
              Plantillas
            </motion.button>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={20} />
              Nueva Presentación
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Stats Cards */}
      <motion.div 
        className="stats-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>{presentations.length}</h3>
            <p>Total Presentaciones</p>
          </div>
        </div>
        {categories.map((category, index) => {
          const Icon = getCategoryIcon(category.icon)
          const count = getPresentationsByCategory(category.name).length
          return (
            <motion.div 
              key={category.id}
              className="stat-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              style={{ borderLeft: `4px solid ${category.color}` }}
            >
              <div className="stat-icon" style={{ color: category.color }}>
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <h3>{count}</h3>
                <p>{category.name}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Filters and Search */}
      <motion.div 
        className="filters-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar presentaciones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <div className="category-filters">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              <Filter size={16} />
              Todas
            </button>
            {categories.map(category => {
              const Icon = getCategoryIcon(category.icon)
              return (
                <button
                  key={category.id}
                  className={selectedCategory === category.name ? 'active' : ''}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{ 
                    borderColor: selectedCategory === category.name ? category.color : 'transparent',
                    color: selectedCategory === category.name ? category.color : 'inherit'
                  }}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              )
            })}
          </div>

          <div className="view-toggle">
            <button
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
            <button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Presentations Grid/List */}
      <motion.div 
        className={`presentations-container ${viewMode}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredPresentations.length > 0 ? (
            filteredPresentations.map((presentation) => {
              const category = getCategoryById(presentation.category)
              const CategoryIcon = getCategoryIcon(category?.icon)
              
              return (
                <motion.div
                  key={presentation.id}
                  className="presentation-card"
                  variants={itemVariants}
                  layout
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                  style={{ borderTop: `4px solid ${category?.color || '#667eea'}` }}
                >
                  <div className="card-header">
                    <div className="category-badge" style={{ background: category?.color }}>
                      <CategoryIcon size={14} />
                      <span>{presentation.category}</span>
                    </div>
                    <div className="card-actions">
                      <button className="action-btn" title="Ver">
                        <Eye size={16} />
                      </button>
                      <button className="action-btn" title="Editar">
                        <Edit size={16} />
                      </button>
                      <button className="action-btn delete" title="Eliminar">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div 
                    className="card-content"
                    onClick={() => handlePresentationClick(presentation)}
                  >
                    <h3>{presentation.title}</h3>
                    <p className="subtitle">{presentation.subtitle}</p>
                    <p className="description">{presentation.description}</p>
                    
                    <div className="card-meta">
                      <span>
                        <Calendar size={14} />
                        {presentation.updatedAt}
                      </span>
                      <span>
                        <Clock size={14} />
                        {presentation.duration}
                      </span>
                      <span>
                        <FolderOpen size={14} />
                        {presentation.slides} slides
                      </span>
                    </div>

                    <div className="card-tags">
                      {presentation.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {presentation.id === 'musi-kickoff' && (
                      <div style={{
                        marginTop: '15px',
                        padding: '15px',
                        background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.08) 0%, rgba(227, 30, 36, 0.03) 100%)',
                        borderRadius: '10px',
                        border: '2px solid #E31E24',
                        boxShadow: '0 2px 8px rgba(227, 30, 36, 0.15)'
                      }}>
                        <p style={{
                          fontSize: '0.9rem',
                          color: '#333',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontWeight: '600'
                        }}>
                          <Download size={16} color="#E31E24" />
                          Exportar documento para revisión:
                        </p>
                        <div style={{
                          display: 'flex',
                          gap: '12px'
                        }}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              const success = exportToWord()
                              if (success) {
                                alert('✅ Documento Word descargado exitosamente')
                              } else {
                                alert('❌ Error al descargar el documento Word')
                              }
                            }}
                            style={{
                              flex: 1,
                              padding: '10px 16px',
                              background: '#2196F3',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              boxShadow: '0 2px 6px rgba(33, 150, 243, 0.3)'
                            }}
                          >
                            <FileText size={18} />
                            Word Editable
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              exportPresentationToPDFSimple()
                            }}
                            style={{
                              flex: 1,
                              padding: '10px 16px',
                              background: '#E31E24',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              boxShadow: '0 2px 6px rgba(227, 30, 36, 0.3)'
                            }}
                          >
                            <FileText size={18} />
                            PDF Presentación
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`status-indicator ${presentation.status}`}>
                    {presentation.status === 'active' ? 'Activa' : 'Borrador'}
                  </div>
                </motion.div>
              )
            })
          ) : (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FolderOpen size={60} />
              <h3>No se encontraron presentaciones</h3>
              <p>Intenta con otros filtros o crea una nueva presentación</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Add Modal (simplified for now) */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAddModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Nueva Presentación</h2>
              <p>Funcionalidad en desarrollo...</p>
              <button onClick={() => setShowAddModal(false)}>Cerrar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dashboard