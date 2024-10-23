//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrerPage from './pages/RegistrerPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardAdmin';

function App() {
  console.log('App component is being rendered');

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrerPage />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
