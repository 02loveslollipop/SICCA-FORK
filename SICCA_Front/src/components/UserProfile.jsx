import { useEffect, useState } from 'react';
// import PerfilImagen from '../assets/Perfil.jpeg';
import Swal from 'sweetalert2';

export default function UserProfile() {
  const [ user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Obtener los datos del usuario desde localStorage
    const userRole = localStorage.getItem('role');

    if (userRole) {
      setUser({
        role: userRole
      });
    } else {
      console.log("No se encontraron datos del usuario en localStorage");
    }

    const fetchUsers = async () => {
      try {
        // Obtiene el token de localStorage
        const accessToken = localStorage.getItem('token');  // Asegúrate de que el token está en el localStorage

        // Verifica si el token existe antes de hacer la solicitud
        if (!accessToken) {
          throw new Error('No se encontró un token de acceso');
        }

        const response = await fetch('https://sica.02loveslollipop.uk/user', {
          method: 'GET',
          headers: {
            'X-Access-Token': accessToken,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }

        const data = await response.json();
        setUsers(data);  // Asumiendo que la respuesta es un arreglo de usuarios
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);   // Solo se ejecuta una vez, cuando el componente se monta

  const handleDelete = (userId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const accessToken = localStorage.getItem('token');
          
          // Extraer el valor de $oid del objeto userId
          const userObjectId = userId.$oid || userId; // Esto es importante si userId es un objeto o un string
          
          // Usar el valor del $oid en la URL de la solicitud
          const response = await fetch(`https://sica.02loveslollipop.uk/user/${userObjectId}`, {
            method: 'DELETE',
            headers: {
              'X-Access-Token': accessToken,
              'Content-Type': 'application/json',
            },
          });
          
          if (!response.ok) {
            throw new Error('Error al eliminar el usuario');
          }
  
          window.location.reload();
          Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
        } catch (err) {
          Swal.fire('Error', 'No se pudo eliminar al usuario', err.message);
        }
      }
    });
  };
  

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3">
        <div className="dashboard-card mb-6">
          <div className="flex items-center">
            {/* <img className="h-32 w-32 rounded-full mr-6" src={PerfilImagen} alt="User avatar" /> */}
            <div>
              <h2 className="dashboard-title"> User</h2>
              <p className="dashboard-text">Rol: {user.role}</p>
              <p className="text-green-500 font-semibold">En línea</p>
            </div>
          </div>
        </div>
        <div className="dashboard-card overflow-x-auto">
          <h3 className="dashboard-subtitle mb-4">Historial de Usuarios</h3>
          <table className="dashboard-table w-full">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="ml-4 text-red-500" style={{padding:15}}
                  >
                    Eliminar
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="dashboard-card ml-4">
        <h3 className="dashboard-subtitle mb-4">Listado de Usuarios</h3>
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="dashboard-input mb-4"
        />
        <ul className="space-y-2">
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
  );
}
