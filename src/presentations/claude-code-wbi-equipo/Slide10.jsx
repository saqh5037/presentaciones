import { motion } from 'framer-motion'
import { useState } from 'react'
import { Brain, FileText, Code, ListTodo, Sparkles, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

function Slide10() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [showProblem, setShowProblem] = useState(true)
  const [showSolution, setShowSolution] = useState(false)
  const [showWorkflow, setShowWorkflow] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const detailExamples = {
    'Hoja de ruta completa': {
      title: 'PRD - Hoja de Ruta Completa',
      content: `# PROJECT REQUIREMENTS DOCUMENT

## 🎯 Objetivo Principal
Crear un dashboard analytics para FIFCO

## 📊 Features Requeridas
1. Visualización de ventas en tiempo real
2. Análisis predictivo de demanda
3. Sistema de alertas automáticas
4. Reportes personalizables

## 🗓️ Timeline
- Sprint 1: Setup y arquitectura base
- Sprint 2: Implementación de gráficos
- Sprint 3: Integración con APIs
- Sprint 4: Testing y deployment

## 🎨 UI/UX Requirements
- Diseño responsive
- Dark mode obligatorio
- Accesibilidad WCAG 2.1 AA`,
      color: '#9333ea'
    },
    'Objetivos y especificaciones': {
      title: 'PRD - Objetivos y Especificaciones',
      content: `## Especificaciones Técnicas

### Performance
- Tiempo de carga < 3 segundos
- FCP (First Contentful Paint) < 1.8s
- TTI (Time to Interactive) < 3.5s

### Compatibilidad
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

### Métricas de Éxito
✅ Reducción 40% tiempo análisis
✅ Aumento 25% en decisiones data-driven
✅ 90% satisfacción usuarios

### Integraciones
- API REST de FIFCO
- Google Analytics 4
- Slack para notificaciones
- Export a Excel/PDF`,
      color: '#9333ea'
    },
    'Lee planning.md al inicio': {
      title: 'Claude.md - Instrucciones de Inicio',
      content: `## 🚀 INICIO DE SESIÓN - SIEMPRE HACER ESTO

### Paso 1: Leer el contexto
\`\`\`bash
# Lo primero que debes hacer SIEMPRE
cat planning.md
cat tasks.md
\`\`\`

### Paso 2: Verificar el estado actual
\`\`\`bash
git status
git log --oneline -5
npm test
\`\`\`

### Paso 3: Identificar siguiente tarea
- Buscar tareas marcadas como "TODO"
- Verificar dependencias
- Estimar tiempo necesario

### Ejemplo real:
"Claude, por favor lee planning.md y tasks.md, luego continúa con la siguiente tarea pendiente"`,
      color: '#ffd89b'
    },
    'Verifica tasks.md siempre': {
      title: 'Claude.md - Verificación de Tareas',
      content: `## ✅ GESTIÓN DE TAREAS

### Antes de cada tarea:
\`\`\`markdown
# tasks.md
- [x] Setup inicial del proyecto
- [x] Configurar ESLint y Prettier
- [ ] Implementar autenticación <-- PRÓXIMA
- [ ] Crear componente Dashboard
\`\`\`

### Durante el desarrollo:
1. Marcar tarea como "IN PROGRESS"
2. Crear branch específico
3. Hacer commits frecuentes

### Al completar:
\`\`\`markdown
- [x] Implementar autenticación
  - Completado: 2024-01-15
  - Branch: feat/auth
  - Tests: 15/15 passing
  - Notas: Usando JWT + refresh tokens
\`\`\``,
      color: '#ffd89b'
    },
    'Arquitectura del software': {
      title: 'Planning.md - Arquitectura del Software',
      content: `## 🏗️ ARQUITECTURA DEL PROYECTO

### Frontend (React + Vite)
\`\`\`
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   └── Dashboard.test.js
│   ├── Charts/
│   └── shared/
├── hooks/
│   ├── useAuth.js
│   └── useData.js
├── services/
│   └── api.js
└── utils/
\`\`\`

### Backend (Node + Express)
\`\`\`
server/
├── controllers/
├── models/
├── routes/
├── middleware/
└── config/
\`\`\`

### Patrones utilizados:
- 🎯 Repository Pattern para data
- 🔄 Redux para state management
- 🛡️ HOC para autenticación`,
      color: '#60a5fa'
    },
    'Stack tecnológico (React, Node)': {
      title: 'Planning.md - Stack Tecnológico',
      content: `## 💻 STACK TECNOLÓGICO COMPLETO

### Frontend
\`\`\`json
{
  "react": "^18.2.0",
  "vite": "^5.0.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.0",
  "recharts": "^2.10.0",
  "framer-motion": "^10.16.0",
  "tailwindcss": "^3.3.0"
}
\`\`\`

### Backend
\`\`\`json
{
  "express": "^4.18.0",
  "prisma": "^5.7.0",
  "jsonwebtoken": "^9.0.0",
  "bcrypt": "^5.1.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.0"
}
\`\`\`

### DevOps
- 🐳 Docker para contenedores
- 🚀 GitHub Actions para CI/CD
- ☁️ AWS para hosting
- 📊 Datadog para monitoring`,
      color: '#60a5fa'
    },
    'Lista granular de tareas': {
      title: 'Tasks.md - Lista Granular',
      content: `## 📋 TAREAS DETALLADAS

### Sprint Actual (Semana 3)

#### ✅ Completadas
- [x] Setup proyecto base (2h)
- [x] Configurar Prisma + SQLite (1h)
- [x] Crear modelos de datos (3h)
- [x] API endpoints básicos (4h)

#### 🚧 En Progreso
- [ ] Sistema de autenticación (6h)
  - [x] Login endpoint
  - [x] JWT implementation
  - [ ] Refresh token logic
  - [ ] Middleware de auth

#### 📅 Próximas
- [ ] Dashboard principal (8h)
- [ ] Gráficos de ventas (4h)
- [ ] Sistema de filtros (3h)
- [ ] Export a PDF (2h)

### Tareas Descubiertas
⚠️ NUEVO: Necesitamos rate limiting
⚠️ NUEVO: Agregar logs con Winston
⚠️ NUEVO: Implementar caché Redis`,
      color: '#4ade80'
    },
    'Seguimiento de progreso': {
      title: 'Tasks.md - Tracking de Progreso',
      content: `## 📈 PROGRESO DEL PROYECTO

### Burndown Chart
\`\`\`
Semana 1: ████████████████ 100%
Semana 2: ████████████░░░░ 75%
Semana 3: ████████░░░░░░░░ 50% <- ACTUAL
Semana 4: ░░░░░░░░░░░░░░░░ 0% (meta)
\`\`\`

### Velocidad del Equipo
- Sprint 1: 21 puntos completados
- Sprint 2: 28 puntos completados
- Sprint 3: 24 puntos (proyección)

### Métricas Clave
- ✅ 42/60 tareas completadas (70%)
- ⏱️ 89 horas invertidas
- 🐛 12 bugs resueltos
- 🎯 89% tests passing

### Bloqueadores Actuales
1. ❌ Esperando diseños finales de UX
2. ❌ API de terceros con latencia
3. ⚠️ Revisar performance en mobile`,
      color: '#4ade80'
    },
    'Fuente de verdad principal': {
      title: 'PRD - La Fuente de Verdad Principal',
      content: `## 🎯 ¿QUÉ ES LA FUENTE DE VERDAD?

Es EL DOCUMENTO que define TODO el proyecto. Si hay dudas, el PRD tiene la respuesta.

### ¿Por qué es importante?

Imagina que estás construyendo una casa:
- 🏠 El PRD es el plano arquitectónico
- 🔨 Sin él, cada trabajador haría algo diferente
- ✅ Con él, todos siguen el mismo diseño

### Regla de Oro:
"Si no está en el PRD, no existe en el proyecto"

### Ejemplo Real:
Cliente: "¿Por qué no tiene modo oscuro?"
Tú: "Revisemos el PRD... No está en los requerimientos"
Cliente: "Ah, entonces agreguémoslo para v2"

### Lo que SIEMPRE debe tener:
1. QUÉ estamos construyendo
2. PARA QUIÉN lo construimos  
3. POR QUÉ lo necesitan
4. CUÁNDO debe estar listo
5. CÓMO medimos el éxito

### Pro Tip para Claude:
"Claude, antes de implementar cualquier feature, verifica que esté en el PRD"`,
      color: '#9333ea'
    },
    'Base para otros archivos': {
      title: 'PRD - Base para Otros Archivos',
      content: `## 🌳 EL PRD ES LA RAÍZ DEL ÁRBOL

Todo documento nace del PRD:

### La Cascada de Documentos:

\`\`\`
PRD (La Raíz)
    ↓
planning.md (Cómo lo haremos)
    ↓
tasks.md (Qué hacer paso a paso)
    ↓
claude.md (Instrucciones para IA)
\`\`\`

### Ejemplo Práctico:

**En el PRD dice:**
"Necesitamos autenticación con Google"

**Entonces en planning.md:**
"Usaremos OAuth 2.0 con Passport.js"

**En tasks.md aparece:**
"- [ ] Configurar Google OAuth
 - [ ] Implementar Passport strategy
 - [ ] Crear botón de login"

**Y en claude.md:**
"Al implementar auth, usa el client ID guardado en .env"

### Regla Simple:
Si cambias algo en el PRD → Actualiza los demás archivos

### Truco Mental:
PRD = El "qué" y "por qué"
Planning = El "cómo"
Tasks = El "cuándo"
Claude = El "recuerda esto"`,
      color: '#9333ea'
    },
    'Marca tareas completadas': {
      title: 'Claude.md - Marcar Tareas Completadas',
      content: `## ✅ CÓMO MARCAR TAREAS - SÚPER SIMPLE

### La Regla de los 3 Estados:

\`\`\`markdown
[ ] = Por hacer (TODO)
[~] = En progreso (DOING)  
[x] = Completado (DONE)
\`\`\`

### Flujo Correcto:

**1. Antes de empezar:**
\`\`\`markdown
- [ ] Implementar login con Google
\`\`\`

**2. Mientras trabajas:**
\`\`\`markdown
- [~] Implementar login con Google (trabajando...)
\`\`\`

**3. Al terminar:**
\`\`\`markdown
- [x] Implementar login con Google ✅ 2024-01-15
\`\`\`

### El Formato Completo:

\`\`\`markdown
- [x] Nombre de la tarea
  - Completado: fecha
  - Tiempo: 2 horas
  - Branch: feat/google-login
  - Notas: Funciona en Chrome, Safari, Firefox
\`\`\`

### ⚠️ IMPORTANTE:
NUNCA marques como completado si:
- Los tests fallan
- Hay errores en consola
- No funciona en todos los navegadores
- Falta documentación

### Pro Tip:
Al final del día, haz un commit con mensaje:
"✅ Completadas 3 tareas del sprint"`,
      color: '#ffd89b'
    },
    'Añade tareas nuevas': {
      title: 'Claude.md - Añadir Tareas Nuevas',
      content: `## ➕ CÓMO DESCUBRIR Y AÑADIR TAREAS

### Cuándo Aparecen Tareas Nuevas:

Durante el desarrollo SIEMPRE descubres cosas:
- 🐛 Bugs que no esperabas
- 🔧 Refactoring necesario
- 📦 Dependencias faltantes
- 🎨 Mejoras de UX

### Formato para Tareas Nuevas:

\`\`\`markdown
## 🆕 Tareas Descubiertas (Sprint 3)

### Alta Prioridad 🔴
- [ ] Fix: Login falla en Safari
  - Descubierto: 2024-01-15
  - Reportado por: QA Team
  - Estimación: 2 horas

### Media Prioridad 🟡  
- [ ] Mejorar performance de carga
  - Descubierto: Durante testing
  - Métrica actual: 4.5s
  - Métrica objetivo: < 3s

### Baja Prioridad 🟢
- [ ] Añadir animaciones a botones
  - Nice to have
  - Puede esperar a v2
\`\`\`

### La Regla de Oro:
"Si tardas más de 5 minutos pensando si algo es necesario, 
añádelo como tarea y decide después"

### Ejemplo Real de Claude:
"He encontrado que el login tarda 3 segundos. 
Añadiendo tarea: '[ ] Optimizar tiempo de login' a tasks.md"`,
      color: '#ffd89b'
    },
    'Herramientas y librerías': {
      title: 'Planning.md - Herramientas y Librerías',
      content: `## 🧰 TU CAJA DE HERRAMIENTAS

### ¿Qué va aquí?
TODO lo que instalas con npm, yarn o pnpm:

### Formato Estándar:

\`\`\`markdown
## 📦 Dependencias Principales

### UI Framework
- **React 18** - Porque necesitamos hooks
- **Tailwind CSS** - Para estilos rápidos
- **Framer Motion** - Para animaciones pro

### Backend
- **Express** - API REST simple
- **Prisma** - ORM moderno
- **JWT** - Para tokens seguros

### Herramientas de Desarrollo
- **Vite** - Build ultrarrápido
- **ESLint** - Código limpio
- **Prettier** - Formato consistente
\`\`\`

### La Regla de las 3 Preguntas:

Antes de añadir una librería:
1. ¿Realmente la necesito?
2. ¿Está mantenida activamente?
3. ¿Tiene buena documentación?

### Ejemplo de Decisión:

❌ MAL:
"Instalé 5 librerías para hacer un modal"

✅ BIEN:
"Usé Radix UI porque:
- Es accesible por defecto
- Pesa poco
- La usa Vercel"

### Pro Tip:
Siempre documenta el POR QUÉ de cada librería`,
      color: '#60a5fa'
    },
    'Decisiones técnicas': {
      title: 'Planning.md - Decisiones Técnicas',
      content: `## 🤔 DECISIONES TÉCNICAS DOCUMENTADAS

### ¿Qué son?
Las elecciones importantes que haces y POR QUÉ las haces.

### Formato de Documentación:

\`\`\`markdown
## 📋 Decisiones Técnicas

### 1. Base de Datos: PostgreSQL vs MongoDB
**Decisión:** PostgreSQL
**Razón:** 
- Datos relacionales (usuarios → pedidos)
- Necesitamos transacciones ACID
- El equipo ya lo conoce

### 2. Autenticación: JWT vs Sessions
**Decisión:** JWT
**Razón:**
- API stateless
- Múltiples clientes (web, mobile)
- Fácil de escalar

### 3. Hosting: Vercel vs AWS
**Decisión:** Vercel
**Razón:**
- Deploy automático con GitHub
- Preview por PR
- Gratis para empezar
\`\`\`

### Las 5 Decisiones Más Comunes:

1. **Framework:** React vs Vue vs Angular
2. **CSS:** Tailwind vs Styled Components
3. **State:** Redux vs Context vs Zustand
4. **API:** REST vs GraphQL
5. **Testing:** Jest vs Vitest

### Regla de Oro:
"No hay decisiones malas, solo decisiones no documentadas"

### Para Claude:
"Cuando tomes una decisión técnica, añádela a planning.md con tu razonamiento"`,
      color: '#60a5fa'
    },
    'Fechas de completado': {
      title: 'Tasks.md - Registro de Fechas',
      content: `## 📅 TRACKING DE FECHAS - SÚPER IMPORTANTE

### ¿Por qué registrar fechas?

Para saber:
- ⏱️ Cuánto tardamos realmente
- 📊 Si mejoramos nuestra velocidad
- 🎯 Si cumplimos deadlines

### Formato Perfecto:

\`\`\`markdown
- [x] Implementar dashboard
  - Iniciado: 2024-01-10 9:00 AM
  - Completado: 2024-01-12 3:30 PM
  - Tiempo real: 2.5 días
  - Estimado: 3 días ✅ (bajo presupuesto!)
\`\`\`

### Sistema de Colores por Tiempo:

\`\`\`markdown
🟢 Antes de tiempo = "Completado -1 día early"
🟡 A tiempo = "Completado on time"
🔴 Tarde = "Completado +2 días late"
\`\`\`

### Ejemplo de Sprint Completo:

\`\`\`markdown
## Sprint 3 (Ene 8-19, 2024)

### Velocidad:
- Planeado: 40 puntos
- Completado: 38 puntos
- Eficiencia: 95% 🎉

### Tareas:
- [x] Login (Ene 8-9) ✅ 2 días
- [x] Dashboard (Ene 10-12) ✅ 3 días
- [x] API Users (Ene 13) ✅ 1 día
- [~] Reportes (Ene 14-?) ⏳ en progreso
\`\`\`

### Pro Tip para el Equipo:
"Si una tarea tarda más del doble de lo estimado,
párala y divide en tareas más pequeñas"`,
      color: '#4ade80'
    },
    'Tareas descubiertas': {
      title: 'Tasks.md - Tareas Descubiertas',
      content: `## 💡 TAREAS DESCUBIERTAS - LAS SORPRESAS

### ¿Qué son?
Cosas que NO sabías que necesitabas hasta que empezaste a programar.

### Los 3 Tipos de Descubrimientos:

**1. 🐛 Bugs Inesperados:**
\`\`\`markdown
⚠️ DESCUBIERTO: El login falla en iPhone
- Encontrado: Durante testing de usuario
- Severidad: Alta
- Acción: Fix inmediato
\`\`\`

**2. 🔧 Deuda Técnica:**
\`\`\`markdown
⚠️ DESCUBIERTO: Código duplicado en 5 componentes
- Encontrado: Durante code review
- Impacto: Mantenimiento difícil
- Acción: Refactorizar en sprint 4
\`\`\`

**3. 🚀 Mejoras No Planeadas:**
\`\`\`markdown
⚠️ DESCUBIERTO: Podemos cachear las imágenes
- Beneficio: 50% más rápido
- Esfuerzo: 2 horas
- Decisión: Hacerlo ahora
\`\`\`

### Template para Documentar:

\`\`\`markdown
## 🆕 Tareas Descubiertas - Sprint 3

### Críticas (hacer YA):
- [ ] Fix: Memory leak en Dashboard
- [ ] Security: Validar inputs del usuario

### Importantes (este sprint):
- [ ] Performance: Lazy load de imágenes
- [ ] UX: Añadir loading states

### Nice to Have (próximo sprint):
- [ ] Feature: Dark mode
- [ ] Polish: Micro-animaciones
\`\`\`

### La Regla 80/20:
"80% tareas planeadas, 20% descubiertas es normal"`,
      color: '#4ade80'
    }
  }

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
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => {
                        if (detailExamples[detail]) {
                          setModalContent(detailExamples[detail])
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: detailExamples[detail] ? 'pointer' : 'default',
                        padding: '4px',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <CheckCircle size={16} color="#4ade80" />
                      <span style={{ 
                        color: '#e0e0e0', 
                        fontSize: '0.9rem',
                        textDecoration: detailExamples[detail] ? 'underline' : 'none'
                      }}>{detail}</span>
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

        {/* Modal for Examples */}
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalContent(null)}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                border: `3px solid ${modalContent.color}`,
                borderRadius: '20px',
                padding: '30px',
                maxWidth: '800px',
                maxHeight: '80vh',
                overflow: 'auto',
                position: 'relative'
              }}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setModalContent(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: '#e0e0e0'
                }}
              >
                ×
              </motion.button>

              {/* Modal Title */}
              <h2 style={{
                fontSize: '1.8rem',
                color: modalContent.color,
                marginBottom: '20px',
                fontWeight: '700'
              }}>
                {modalContent.title}
              </h2>

              {/* Modal Content */}
              <div style={{
                color: '#e0e0e0',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                fontFamily: 'monospace',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                fontSize: '0.9rem'
              }}>
                {modalContent.content}
              </div>

              {/* Footer hint */}
              <p style={{
                marginTop: '20px',
                fontSize: '0.85rem',
                color: '#b0b0b0',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                💡 Este es un ejemplo real de cómo estructurar tu proyecto con Claude Code
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Slide10