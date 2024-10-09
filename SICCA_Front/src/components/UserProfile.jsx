//import React from 'react'
import PerfilImagen from '../assets/Perfil.jpeg'

export default function UserProfile() {

  {/* Usuarios para poner en las tablas VISUAL*/}
  const users = [
    { id: 1, name: 'Valentina Soto', lastActivity: '2023-05-20', status: 'Activo' },
    { id: 2, name: 'Carlos', lastActivity: '2023-05-19', status: 'Inactivo' },
    { id: 2, name: 'Maryangela', lastActivity: '2023-05-19', status: 'Inactivo' },
    { id: 2, name: 'Ema', lastActivity: '2023-05-19', status: 'Activo' },
    { id: 2, name: 'Mateo', lastActivity: '2023-05-19', status: 'Inactivo' },
]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    
      {/* Contenedor de la parte izquierda*/}
      <div className="md:col-span-3">

        {/* Contenedor del perfil del usuario*/}
        <div className="dashboard-card mb-6">
          <div className="flex items-center">
            <img className="h-32 w-32 rounded-full mr-6" src={PerfilImagen} alt="User avatar" />
            <div>
              <h2 className="dashboard-title" style={{ color: 'black' }}>Admin User</h2>
              <p className="dashboard-text">Rol: Administrador</p>
              <p className="dashboard-text">ID: 128754</p>
              <p className="text-green-500 font-semibold">En línea</p>
            </div>
          </div>
        </div>

        {/* Tabla del historial*/}
        <div className="dashboard-card overflow-x-auto">
          <h3 className="dashboard-subtitle mb-4" style={{ color: 'black' }}>Historial de Usuarios</h3>
          <table className="dashboard-table w-full" style={{ color: 'black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Última Actividad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastActivity}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    {/* Contenedor de los filtros*/}
      </div>
      <div className="dashboard-card ml-4">
        <h3 className="dashboard-subtitle mb-4" style={{ color: 'black' }}>Listado de Usuarios</h3>
        <input
          type="text"
          placeholder="Buscar por ID"
          className="dashboard-input mb-4"
        />
        <ul className="space-y-2" style={{ color: 'black' }}>
          {users.map((user) => (
            <li key={user.id} className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                {user.name[0]}
              </span>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}