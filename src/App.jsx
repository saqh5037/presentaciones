import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LabsisExpertPresentation from './presentations/labsis-expert/LabsisExpertPresentation'
import EtiquetasBernardo from './presentations/etiquetas-bernardo/EtiquetasBernardo'
import MusiKickoffPresentation from './presentations/musi-kickoff/MusiKickoffPresentation'
import MusiExportDocument from './presentations/musi-kickoff/MusiExportDocument'
import MusiPrintView from './presentations/musi-kickoff/MusiPrintView'
import './App.css'
import './pages/Dashboard.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation/labsis-expert" element={<LabsisExpertPresentation />} />
        <Route path="/presentation/etiquetas-bernardo" element={<EtiquetasBernardo />} />
        <Route path="/presentation/musi-kickoff" element={<MusiKickoffPresentation />} />
        <Route path="/presentation/musi-kickoff/export" element={<MusiExportDocument />} />
        <Route path="/presentation/musi-kickoff/print" element={<MusiPrintView />} />
      </Routes>
    </Router>
  )
}

export default App
