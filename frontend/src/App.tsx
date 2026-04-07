import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import WasteListingsPage from './pages/waste/WasteListingsPage'
import MachineryListingsPage from './pages/machinery/MachineryListingsPage'
import LaborListingsPage from './pages/labor/LaborListingsPage'
import WorkspaceListingsPage from './pages/workspace/WorkspaceListingsPage'
import './styles/globals.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/waste" element={<WasteListingsPage />} />
          <Route path="/machinery" element={<MachineryListingsPage />} />
          <Route path="/labor" element={<LaborListingsPage />} />
          <Route path="/workspace" element={<WorkspaceListingsPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
