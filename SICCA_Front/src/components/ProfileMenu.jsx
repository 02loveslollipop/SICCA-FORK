// import React from 'react';

export default function ProfileMenu() {
  // Función para cerrar sesión
  const handleLogout = async () => {
    const token = localStorage.getItem('token'); // Obtener el token desde el localStorage

    if (!token) {
      alert("No se encontró el token en el localStorage");
      return;
    }

    try {
      // Realizar la solicitud de logout
      const response = await fetch('https://sica.02loveslollipop.uk/logout', {
        method: 'POST',
        headers: {
          'X-Access-Token': token, // Enviar el token en la cabecera
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, limpiar el localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('loglevel');
        localStorage.removeItem('userName');

        // Redirigir al usuario a la página de inicio
        window.location.href = '/';
      } else {
        alert(data.message || "Error al cerrar sesión.");
      }
    } catch (error) {
      alert("Hubo un problema al cerrar sesión." + error);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-blue-900 rounded-md overflow-hidden shadow-xl z-20">
      {/* Solo el botón de cerrar sesión */}
      <button
        className="block w-full px-4 py-2 text-sm text-white hover:bg-blue-800 transition-colors duration-200 text-left"
        onClick={handleLogout} // Ejecuta handleLogout al hacer clic
      >
        Cerrar sesión
      </button>
    </div>
  );
}
