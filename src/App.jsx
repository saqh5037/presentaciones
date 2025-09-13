import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import LabsisExpertPresentation from './presentations/labsis-expert/LabsisExpertPresentation'
import EtiquetasBernardo from './presentations/etiquetas-bernardo/EtiquetasBernardo'
import MusiKickoffPresentation from './presentations/musi-kickoff/MusiKickoffPresentation'
import MusiExportDocument from './presentations/musi-kickoff/MusiExportDocument'
import MusiPrintView from './presentations/musi-kickoff/MusiPrintView'
import MusiKickoffPresentationV2 from './presentations/musi-kickoffV2/MusiKickoffPresentationV2'
import MusiExportDocumentV2 from './presentations/musi-kickoffV2/MusiExportDocumentV2'
import MusiPrintViewV2 from './presentations/musi-kickoffV2/MusiPrintViewV2'
import DynamtekPresentation from './presentations/dynamtek/DynamtekPresentation'
import ClaudeCodeWBIPresentation from './presentations/claude-code-wbi/ClaudeCodeWBIPresentation'
import ClaudeCodeWBIEquipoPresentation from './presentations/claude-code-wbi-equipo/ClaudeCodeWBIEquipoPresentation'
import ClaudeCodeDynamtekEquipoPresentation from './presentations/claude-code-dynamtek-equipo/ClaudeCodeDynamtekEquipoPresentation'
import PlanImplementacionIAMicrotecPresentation from './presentations/plan-implementacion-ia-microtec'
import SharedPresentation from './pages/SharedPresentation'
import './App.css'
import './pages/Dashboard.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública de login */}
          <Route path="/login" element={<Login />} />
          
          {/* Rutas compartidas públicas */}
          <Route path="/share/:token" element={<SharedPresentation />} />
          
          {/* Dashboard protegido */}
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Panel de administración - solo admin */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminPanel />
            </ProtectedRoute>
          } />
          
          {/* Presentaciones protegidas con verificación de acceso */}
          <Route path="/presentation/labsis-expert" element={
            <ProtectedRoute presentationId="labsis-expert">
              <LabsisExpertPresentation />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/etiquetas-bernardo" element={
            <ProtectedRoute presentationId="etiquetas-bernardo">
              <EtiquetasBernardo />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoff" element={
            <ProtectedRoute presentationId="musi-kickoff">
              <MusiKickoffPresentation />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoff/export" element={
            <ProtectedRoute presentationId="musi-kickoff">
              <MusiExportDocument />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoff/print" element={
            <ProtectedRoute presentationId="musi-kickoff">
              <MusiPrintView />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoffV2" element={
            <ProtectedRoute presentationId="musi-kickoffV2">
              <MusiKickoffPresentationV2 />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoffV2/export" element={
            <ProtectedRoute presentationId="musi-kickoffV2">
              <MusiExportDocumentV2 />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/musi-kickoffV2/print" element={
            <ProtectedRoute presentationId="musi-kickoffV2">
              <MusiPrintViewV2 />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/dynamtek-centro-mando" element={
            <ProtectedRoute presentationId="dynamtek-centro-mando">
              <DynamtekPresentation />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/claude-code-wbi" element={
            <ProtectedRoute presentationId="claude-code-wbi">
              <ClaudeCodeWBIPresentation />
            </ProtectedRoute>
          } />
          
          <Route path="/presentation/claude-code-wbi-equipo" element={
            <ProtectedRoute presentationId="claude-code-wbi-equipo">
              <ClaudeCodeWBIEquipoPresentation />
            </ProtectedRoute>
          } />
          
          {/* Presentación Claude Code Dynamtek Equipo */}
          <Route path="/presentation/claude-code-dynamtek-equipo" element={
            <ProtectedRoute presentationId="claude-code-dynamtek-equipo">
              <ClaudeCodeDynamtekEquipoPresentation />
            </ProtectedRoute>
          } />
          
          {/* Presentación Plan de Implementación IA Microtec */}
          <Route path="/presentation/plan-implementacion-ia-microtec" element={
            <ProtectedRoute presentationId="plan-implementacion-ia-microtec">
              <PlanImplementacionIAMicrotecPresentation />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
