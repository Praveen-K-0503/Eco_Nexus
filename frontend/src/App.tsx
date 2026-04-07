import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<div className="min-h-screen bg-primary-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-primary-700">EcoNexus</h1></div>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
