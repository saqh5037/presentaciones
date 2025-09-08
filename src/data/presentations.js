export const presentations = [
  {
    id: 'labsis-expert',
    title: 'Labsis Expert',
    subtitle: 'El Futuro del Laboratorio Clínico',
    description: 'Presentación interactiva sobre la solución de IA para laboratorios clínicos',
    category: 'Dynantek',
    thumbnail: '/thumbnails/labsis-expert.png',
    createdAt: '2025-01-13',
    updatedAt: '2025-01-13',
    slides: 15,
    duration: '15 min',
    tags: ['IA', 'Laboratorio', 'Salud', 'Tecnología'],
    status: 'active',
    path: '/presentation/labsis-expert'
  },
  {
    id: 'etiquetas-bernardo',
    title: 'Etiquetas Escolares - Bernardo',
    subtitle: 'Material Escolar Personalizado',
    description: 'Etiquetas personalizadas con temática de Spiderman para lápices, libros, colores, borradores y sacapuntas',
    category: 'Personal',
    thumbnail: '/thumbnails/etiquetas-bernardo.png',
    createdAt: '2025-01-13',
    updatedAt: '2025-01-13',
    slides: 58,
    duration: 'Imprimible',
    tags: ['Etiquetas', 'Escolar', 'Spiderman', 'Niños', 'Personalizado'],
    status: 'active',
    path: '/presentation/etiquetas-bernardo'
  },
  {
    id: 'musi-kickoff',
    title: 'Musi - Kickoff Meeting',
    subtitle: 'Proyecto Catálogo de Espacios',
    description: 'Presentación de inicio del proyecto de gestión de espacios comerciales para tiendas Musi y Mussmanni',
    category: 'WBI',
    thumbnail: '/musi/Desktop - 29.png',
    createdAt: '2025-08-14',
    updatedAt: '2025-08-14',
    slides: 10,
    duration: '60 min',
    tags: ['FIFCO', 'Musi', 'Retail', 'Gestión', 'Costa Rica'],
    status: 'active',
    path: '/presentation/musi-kickoff'
  },
  {
    id: 'musi-kickoffV2',
    title: 'Musi - Kickoff Meeting V2',
    subtitle: 'Proyecto Catálogo de Espacios (Versión 2)',
    description: 'Versión actualizada de la presentación de inicio del proyecto de gestión de espacios comerciales para Musi y Mussmanni',
    category: 'WBI',
    thumbnail: '/musi/Desktop - 29.png',
    createdAt: '2025-08-19',
    updatedAt: '2025-08-19',
    slides: 10,
    duration: '60 min',
    tags: ['FIFCO', 'Musi', 'Retail', 'Gestión', 'Costa Rica', 'V2'],
    status: 'active',
    path: '/presentation/musi-kickoffV2'
  },
  {
    id: 'dynamtek-centro-mando',
    title: 'Centro de Mando para Laboratorios',
    subtitle: 'El Laboratorio del Futuro, Hoy',
    description: 'Presentación ejecutiva sobre transformación digital y centro de mando integral para laboratorios clínicos',
    category: 'Dynantek',
    thumbnail: '/thumbnails/dynamtek-centro-mando.png',
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15',
    slides: 11,
    duration: '30 min',
    tags: ['Centro de Mando', 'IA', 'Transformación Digital', 'Laboratorio', 'Dashboard', 'KPIs'],
    status: 'active',
    path: '/presentation/dynamtek-centro-mando'
  },
  {
    id: 'claude-code-wbi',
    title: 'Claude Code para WBI',
    subtitle: 'Tu Año de Desarrollo Reimaginado',
    description: 'Presentación interactiva estilo Spotify Wrapped sobre cómo Claude Code multiplica 10x la productividad del equipo de desarrollo',
    category: 'WBI',
    thumbnail: '/thumbnails/claude-code.png',
    createdAt: '2025-09-08',
    updatedAt: '2025-09-08',
    slides: 12,
    duration: '30 min',
    tags: ['IA', 'Productividad', 'Claude Code', 'Desarrollo', 'ROI', 'DevTools'],
    status: 'active',
    path: '/presentation/claude-code-wbi'
  }
]

export const categories = [
  {
    id: 'personal',
    name: 'Personal',
    color: '#667eea',
    icon: 'User',
    description: 'Presentaciones personales y proyectos individuales'
  },
  {
    id: 'dynantek',
    name: 'Dynantek',
    color: '#ffd89b',
    icon: 'Building2',
    description: 'Presentaciones corporativas de Dynantek'
  },
  {
    id: 'wbi',
    name: 'WBI',
    color: '#4ecdc4',
    icon: 'Globe',
    description: 'Presentaciones de WBI (World Business Intelligence)'
  }
]

export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id.toLowerCase() === categoryId.toLowerCase())
}

export const getPresentationsByCategory = (categoryName) => {
  return presentations.filter(pres => 
    pres.category.toLowerCase() === categoryName.toLowerCase()
  )
}

export const addPresentation = (presentation) => {
  const newPresentation = {
    ...presentation,
    id: presentation.id || `pres-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
    status: presentation.status || 'draft'
  }
  presentations.push(newPresentation)
  return newPresentation
}

export const updatePresentation = (id, updates) => {
  const index = presentations.findIndex(p => p.id === id)
  if (index !== -1) {
    presentations[index] = {
      ...presentations[index],
      ...updates,
      updatedAt: new Date().toISOString().split('T')[0]
    }
    return presentations[index]
  }
  return null
}

export const deletePresentation = (id) => {
  const index = presentations.findIndex(p => p.id === id)
  if (index !== -1) {
    presentations.splice(index, 1)
    return true
  }
  return false
}