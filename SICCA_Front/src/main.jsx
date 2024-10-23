import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Dashboard from './pages/DashboardAdmin.jsx'
//import './index.css'
//import DashboardAdmin from './pages/DashboardAdmin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
