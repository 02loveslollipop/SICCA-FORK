import PropTypes from 'prop-types';
import React from 'react'

export default function Header({ setCurrentPage }) {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white p-4">
      <nav>
        <div className="flex items-center justify-center mb-8">
          <span className="text-2xl font-semibold">Supermercado</span>
        </div>
        <ul>
          <li className="mb-2">
            <button
                onClick={() => setCurrentPage('users')}
                className="flex items-center w-full py-2 px-4 rounded text-white hover:bg-blue-700 transition-colors duration-200">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Usuarios
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setCurrentPage('panel')}
              className="flex items-center w-full py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Panel
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setCurrentPage('sales')}
              className="flex items-center w-full py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}


// Definición de PropTypes
Header.propTypes = {
    setCurrentPage: PropTypes.func.isRequired, 
};