import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Sales() {
  const [error, setError] = useState(null);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const token = localStorage.getItem('token'); // Obtén el token del localStorage

      if (!token) {
        setError('No se encontró el token');
        return;
      }

      try {
        const response = await fetch('https://sica.02loveslollipop.uk/sale', {
          method: 'GET',
          headers: {
            'X-Access-Token': token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSales(data); // Asume que la respuesta es un array de ventas
        } else {
          throw new Error('Error al cargar los productos');
        }
      } catch (error) {
        setError(error.message);
        Swal.fire("¡Error!", "No se pudo conectar con el servidor", "error");
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="dashboard-card">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="dashboard-card">
          <p className="text-2xl font-bold text-green-600">$30,000</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ventas diarias</h3>
        </div>
        <div className="dashboard-card">
          <p className="text-2xl font-bold text-red-600">270</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Órdenes diarias totales</h3>
        </div>
        <div className="dashboard-card">
          <p className="text-2xl font-bold text-blue-600">$1,000</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ingresos diarios</h3>
        </div>
        <div className="dashboard-card">
          <p className="text-2xl font-bold text-purple-600">100</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Clientes diarios</h3>
        </div>
      </div>

      <div className="dashboard-card mb-6">
        <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Productos Más Vendidos</h3>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <p>Gráfica Circular de Productos Más Vendidos</p>
        </div>
      </div>

      <div className="dashboard-card w-full lg:col-span-2">
        <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ventas</h3>
        <div className="overflow-x-auto w-full">
          <table className="dashboard-table w-full" style={{ color: 'black' }}>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>ID Cliente</th>
                <th>ID Vendedor</th>
                {/* <th>Productos</th> */}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {sales.length > 0 ? (
                sales.map((sale, index) => (
                  <tr key={index}>
                    <td>{sale.date}</td>
                    <td>{sale.id_client?.$oid || sale.id_client}</td>
                    <td>{sale.id_seller?.$oid || sale.id_seller}</td>
                    {/* <td>{sale.products}</td> */}
                    <td>{sale.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No se encontraron ventas</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}
