import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Panel() {

  const [topProducts, setTopProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token'); // Obtén el token del localStorage

      if (!token) {
        setError('No se encontró el token');
        return;
      }

      try {
        const response = await fetch('https://sica.02loveslollipop.uk/product', {
          method: 'GET',
          headers: {
            'X-Access-Token': token
          }
        });

        if (response.ok) {
          const productsData = await response.json();
          setTopProducts(productsData); // Asume que productsData es un array de productos
        } else {
          throw new Error('Error al cargar los productos');
        }
      } catch (error) {
        setError(error.message);
        Swal.fire("¡Error!", "No se pudo conectar con el servidor", "error");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>

      {/* Contenedores de la parte superior*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ganancia</h3>
          <p className="text-2xl font-bold text-green-600">$30,000</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Devolución de ventas</h3>
          <p className="text-2xl font-bold text-red-600">$30,000</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Compra</h3>
          <p className="text-2xl font-bold text-blue-600">$30,000</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ingreso</h3>
          <p className="text-2xl font-bold text-purple-600">$30,000</p>
        </div>
      </div>

      {/* Contenedor GENERAL*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Contenedor para la grafica de rectanculos*/}
        <div>
          <div className="dashboard-card mb-6">
            <h3 className="dashboard-subtitle" style={{ color: 'black' }}>GRAFICA DE QUE?</h3>
            {/* Aquí va la gráfica esa de rectangulos*/}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p>Gráfica de Ventas</p>
            </div>
        </div>

      
        </div>

          {/* TABLA PRODUCTOS*/}
          <div className="dashboard-card w-full lg:col-span-2">
            <h3 className="dashboard-subtitle " style={{ color: 'black' }}>Productos</h3>
            <div className="overflow-x-auto w-full">
              <table className="dashboard-table w-full" style={{ color: 'black' }}>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.length > 0 ? (
                    topProducts.map((product) => (
                      <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">No se encontraron productos</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
      </div>
    </div>
  )
}