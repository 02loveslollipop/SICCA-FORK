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
    <div className="profile-page-container">
    
      {/* Contenedor de la parte izquierda*/}
      <div className="profile-info">

        {/* Contenedor del perfil del usuario*/}
        <div className="dashboard-card">
          <div className="profile-details">
            <img className="profile-image" src={PerfilImagen} alt="User avatar" />
            <div>
              <h2 className="profile-title" style={{ color: 'black' }}>Admin User</h2>
              <p className="profile-rol">Rol: Administrador</p>
              <p className="profile-id">ID: 128754</p>
              <p className="profile-status">En línea</p>
            </div>
          </div>
        </div>

        {/* Tabla del historial*/}
        <div className="dashboard-card user-history">
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Historial de Usuarios</h3>
          <table className="dashboard-table" style={{ color: 'black' }}>
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
      <div className="user-list">
        <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Listado de Usuarios</h3>
        <input
          type="text"
          placeholder="Buscar por ID"
          className="dashboard-input mb-4"
        />
        <ul className="user-list-items" style={{ color: 'black' }}>
          {users.map((user) => (
            <li key={user.id} className="flex items-center">
              <span className="user-icon">
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