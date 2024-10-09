import React from 'react'

export default function ProfileMenu() {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
        Ver perfil
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
        Configuración
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200">
        Cerrar sesión
      </a>
    </div>
  )
}