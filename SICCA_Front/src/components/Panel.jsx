import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


export default function Panel() {

  const [topProducts, setTopProducts] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('Available');

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


  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token'); // Obtén el token del localStorage

    if (!token) {
      setError('No se encontró el token');
      return;
    }

    // Validación de campos
    if (!category || !description || !name || !price || !quantity) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    // Preparar el objeto que se va a enviar
    const productData = {
      category,
      description,
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
      status,
    };

    try {
      // Configuración de la solicitud
      const response = await fetch('https://sica.02loveslollipop.uk/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': token, 
        },
        body: JSON.stringify(productData),
      });

      // Verificar la respuesta
      if (response.ok) {
        const responseData = await response.json();
        console.log('Producto añadido:', responseData);
        window.location.reload();
        // Aquí puedes hacer algo con la respuesta, como limpiar el formulario o mostrar un mensaje de éxito
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Ocurrió un error al añadir el producto.');
      }
    } catch (err) {
      setError('Error de red: ' + err.message);
    }
  };
  

  return (
    <div>
      {/* Contenedores de la parte superior
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
      </div> */}
  
      {/* Contenedor GENERAL para los productos y formulario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
        {/* Listado de productos */}
        <div className="dashboard-card ml-4 mb-6">
          <h3 className="dashboard-subtitle mb-4">Listado de productos</h3>
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="dashboard-input mb-4"
          />
          <ul className="space-y-2">
            {topProducts.length > 0 ? (
              topProducts.map((product) => (
                <li key={product.id} className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    {product.name[0]}
                  </span>
                  {product.name}
                </li>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No se encontraron productos</td>
              </tr>
            )}
          </ul>
        </div>
  
        {/* Formulario para añadir producto */}
        <div className="dashboard-card ml-4 mb-6">
          <h3 className="dashboard-subtitle mb-4">Añadir Producto</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
              <input
                type="text"
                id="category"
                name="category"
                className="dashboard-input"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoria del producto"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                id="description"
                name="description"
                className="dashboard-input"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción del producto"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="dashboard-input"
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del producto"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                className="dashboard-input"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio del producto"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Cantidad</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="dashboard-input"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Cantidad del producto"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
              <select
                id="status"
                name="status"
                className="dashboard-input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Available">Disponible</option>
                <option value="Unavailable">No Disponible</option>
              </select>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-primary">Añadir Producto</button>
          </form>
        </div>
  
      </div>
  
      {/* TABLA PRODUCTOS */}
      <div className="dashboard-card w-full lg:col-span-2 mt-6">
        <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Productos</h3>
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
                  <td colSpan="6" className="text-center">No se encontraron productos</td>
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