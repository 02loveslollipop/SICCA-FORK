//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrerPage from './pages/RegistrerPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardAdmin';
import FacturaPopUp from './pages/FacturaPopUp';

function App() {
  console.log('App component is being rendered');

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            {/* LoginPage */}
            <Route path="/" element={< FacturaPopUp/>} />
            <Route path="/register" element={<RegistrerPage />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/factura" element={<FacturaPopUp />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
