//import React from 'react'
import PropTypes from 'prop-types';

export default function Header({ setCurrentPage }) {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <button
              onClick={() => setCurrentPage('users')}
              className="block py-2 px-4 rounded hover:bg-gray-700 w-full text-left"
            >
              Usuarios
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setCurrentPage('panel')}
              className="block py-2 px-4 rounded hover:bg-gray-700 w-full text-left"
            >
              Panel
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setCurrentPage('sales')}
              className="block py-2 px-4 rounded hover:bg-gray-700 w-full text-left"
            >
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

// Definición de PropTypes
Header.propTypes = {
  setCurrentPage: PropTypes.func.isRequired, // Asegúrate de que sea una función requerida
};
