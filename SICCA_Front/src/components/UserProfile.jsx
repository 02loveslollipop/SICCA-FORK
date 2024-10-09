//import React from 'react'

export default function UserProfile() {
  const users = [
    { id: 1, name: 'Valentina Soto', lastActivity: '2023-05-20', status: 'Activo' },
    { id: 2, name: 'Carlos Sanabria', lastActivity: '2023-05-19', status: 'Inactivo' },
    // Añade más usuarios aquí
  ]

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <img className="h-20 w-20 rounded-full mr-4" src="/placeholder.svg" alt="User avatar" />
            <div>
              <h2 className="text-xl font-bold">Admin User</h2>
              <p className="text-gray-600">Rol: Administrador</p>
              <p className="text-green-500">En línea</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Historial de Usuarios</h3>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Última Actividad
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastActivity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Listado de Usuarios</h3>
        <input
          type="text"
          placeholder="Buscar por ID"
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="mb-2">{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}