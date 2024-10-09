import React from 'react'

export default function ProfileMenu() {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-blue-900 rounded-md overflow-hidden shadow-xl z-20">
      <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-800 transition-colors duration-200">
        Ver perfil
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-800 transition-colors duration-200">
        OTRA COSA EDITAR?
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-800 transition-colors duration-200">
        Cerrar sesión
      </a>
    </div>
  )
}