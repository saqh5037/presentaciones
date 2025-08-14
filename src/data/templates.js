export const presentationTemplates = [
  // PLANTILLAS SOBRIAS (6)
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    category: 'sobrio',
    description: 'Plantilla profesional con tonos azules corporativos',
    colors: {
      primary: '#1e3a5f',      // Azul marino profesional
      secondary: '#4a7ba7',     // Azul medio
      accent: '#8fb4d6',        // Azul claro
      background: '#f8f9fa',    // Gris muy claro
      text: '#2c3e50',          // Gris oscuro
      textLight: '#6c757d'      // Gris medio
    },
    fonts: {
      heading: 'Montserrat, sans-serif',
      body: 'Open Sans, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'minimal-gray',
    name: 'Minimal Gray',
    category: 'sobrio',
    description: 'Diseño minimalista con escala de grises',
    colors: {
      primary: '#2d2d2d',
      secondary: '#5a5a5a',
      accent: '#878787',
      background: '#ffffff',
      text: '#1a1a1a',
      textLight: '#666666'
    },
    fonts: {
      heading: 'Helvetica Neue, sans-serif',
      body: 'Arial, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'executive-brown',
    name: 'Executive Brown',
    category: 'sobrio',
    description: 'Elegante plantilla con tonos tierra',
    colors: {
      primary: '#4a3428',
      secondary: '#7a5648',
      accent: '#a68b7c',
      background: '#faf8f5',
      text: '#2e2520',
      textLight: '#6b5d54'
    },
    fonts: {
      heading: 'Georgia, serif',
      body: 'Roboto, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'professional-green',
    name: 'Professional Green',
    category: 'sobrio',
    description: 'Plantilla profesional con verdes sutiles',
    colors: {
      primary: '#2c5530',
      secondary: '#4a7c59',
      accent: '#8fb896',
      background: '#f5f9f6',
      text: '#1e3a23',
      textLight: '#5a6c5e'
    },
    fonts: {
      heading: 'Playfair Display, serif',
      body: 'Lato, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'elegant-navy',
    name: 'Elegant Navy',
    category: 'sobrio',
    description: 'Diseño elegante con azul marino y dorado',
    colors: {
      primary: '#1a2332',
      secondary: '#2c3e50',
      accent: '#d4af37',      // Toque dorado
      background: '#f7f8fa',
      text: '#1a1f2e',
      textLight: '#576574'
    },
    fonts: {
      heading: 'Raleway, sans-serif',
      body: 'Source Sans Pro, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'clean-slate',
    name: 'Clean Slate',
    category: 'sobrio',
    description: 'Plantilla limpia con tonos pizarra',
    colors: {
      primary: '#34495e',
      secondary: '#546e7a',
      accent: '#78909c',
      background: '#fcfcfc',
      text: '#263238',
      textLight: '#607d8b'
    },
    fonts: {
      heading: 'Poppins, sans-serif',
      body: 'Inter, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },

  // PLANTILLAS VIBRANTES (4)
  {
    id: 'vibrant-sunset',
    name: 'Vibrant Sunset',
    category: 'vibrante',
    description: 'Colores cálidos inspirados en el atardecer',
    colors: {
      primary: '#ff6b6b',      // Coral
      secondary: '#feca57',     // Amarillo dorado
      accent: '#ff9ff3',        // Rosa pastel
      background: '#fff5f5',
      text: '#2e2e2e',
      textLight: '#666666'
    },
    fonts: {
      heading: 'Bebas Neue, sans-serif',
      body: 'Nunito, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'vibrante',
    description: 'Colores frescos del océano',
    colors: {
      primary: '#00b8d4',      // Cian brillante
      secondary: '#00e5ff',     // Cian claro
      accent: '#76ff03',        // Verde lima
      background: '#f0fffe',
      text: '#004d5c',
      textLight: '#00838f'
    },
    fonts: {
      heading: 'Quicksand, sans-serif',
      body: 'Rubik, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'purple-passion',
    name: 'Purple Passion',
    category: 'vibrante',
    description: 'Vibrante combinación de púrpuras y magentas',
    colors: {
      primary: '#8e44ad',      // Púrpura
      secondary: '#e91e63',     // Magenta
      accent: '#f8bbd0',        // Rosa claro
      background: '#fdf4ff',
      text: '#4a148c',
      textLight: '#7b1fa2'
    },
    fonts: {
      heading: 'Oswald, sans-serif',
      body: 'Karla, sans-serif'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  },
  {
    id: 'tropical-paradise',
    name: 'Tropical Paradise',
    category: 'vibrante',
    description: 'Colores tropicales vibrantes',
    colors: {
      primary: '#00bfa5',      // Turquesa
      secondary: '#ff5722',     // Naranja profundo
      accent: '#ffd600',        // Amarillo brillante
      background: '#f5fffa',
      text: '#1a4d45',
      textLight: '#00695c'
    },
    fonts: {
      heading: 'Fredoka One, cursive',
      body: 'Comfortaa, cursive'
    },
    layouts: ['title', 'content', 'twoColumn', 'image', 'chart', 'conclusion']
  }
];

// Layouts disponibles para cada plantilla
export const slideLayouts = {
  title: {
    name: 'Título',
    fields: ['title', 'subtitle', 'author', 'date'],
    icon: 'Layout'
  },
  content: {
    name: 'Contenido',
    fields: ['title', 'content', 'bulletPoints'],
    icon: 'FileText'
  },
  twoColumn: {
    name: 'Dos Columnas',
    fields: ['title', 'leftContent', 'rightContent'],
    icon: 'Columns'
  },
  image: {
    name: 'Imagen',
    fields: ['title', 'image', 'caption'],
    icon: 'Image'
  },
  chart: {
    name: 'Gráfico',
    fields: ['title', 'chartData', 'description'],
    icon: 'BarChart'
  },
  conclusion: {
    name: 'Conclusión',
    fields: ['title', 'keyPoints', 'callToAction'],
    icon: 'CheckCircle'
  }
};

// Función para obtener plantilla por ID
export const getTemplateById = (id) => {
  return presentationTemplates.find(template => template.id === id);
};

// Función para obtener plantillas por categoría
export const getTemplatesByCategory = (category) => {
  return presentationTemplates.filter(template => template.category === category);
};