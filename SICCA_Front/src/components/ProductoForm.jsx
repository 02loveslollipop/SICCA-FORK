import { useState, useEffect } from 'react';

const ProductoForm = () => {
  const [productos, setProductos] = useState([{ nombre: '', descripcion: '', cantidad: 0, precio: 0, precioUnidad: 0 }]);
  const [opcionesProductos, setOpcionesProductos] = useState([]);
  const [clientes, setClientes] = useState([]); // Nuevo estado para los clientes
  const [clienteSeleccionado, setClienteSeleccionado] = useState(''); // Para almacenar el cliente seleccionado
  const [error, setError] = useState(null);
  const [direccion, setDireccion] = useState('');
  const [nuevoCliente, setNuevoCliente] = useState('');
  const [filtroCliente, setFiltroCliente] = useState('');

  // Obtener productos de la base de datos con fetch
  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage

    if (!token) {
      setError('No se encontró el token');
      return;
    }

    const obtenerProductos = async () => {
      try {
        const response = await fetch('https://sica.02loveslollipop.uk/product', {
          method: 'GET',
          headers: {
            'X-Access-Token': token,
          },
        });

        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        setOpcionesProductos(data); // Guarda los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setError('Error al obtener los productos');
      }
    };

    const obtenerClientes = async () => {
      try {
        const response = await fetch('https://sica.02loveslollipop.uk/provider', {
          method: 'GET',
          headers: {
            'X-Access-Token': token,
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los clientes');
        }

        const data = await response.json();
        setClientes(data); // Guarda los clientes en el estado
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
        setError('Error al obtener los clientes');
      }
    };

    obtenerProductos();
    obtenerClientes(); // Llama a obtener clientes
  }, []);

  // Agregar un nuevo producto
  const handleAgregar = () => {
    setProductos([...productos, { nombre: '', descripcion: '', cantidad: 1, precio: 0, precioUnidad: 0 }]);
  };

  // Eliminar el último producto
  const handleEliminar = () => {
    if (productos.length > 1) {
      setProductos(productos.slice(0, -1));
    }
  };

  // Manejar el cambio de selección de producto
  const handleProductoChange = (index, event) => {
    const nombreProductoSeleccionado = event.target.value;
    const productoSeleccionado = opcionesProductos.find(p => p.name === nombreProductoSeleccionado);
    
    if (productoSeleccionado) {
      const updatedProductos = productos.map((producto, i) =>
        i === index
          ? {
              ...producto,
              nombre: productoSeleccionado.name,
              descripcion: productoSeleccionado.description,
              precioUnidad: productoSeleccionado.price,
              precio: producto.cantidad * productoSeleccionado.price,
            }
          : producto
      );
      setProductos(updatedProductos);
    }
  };

  // Manejar los cambios en los campos
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProductos = productos.map((producto, i) =>
      i === index
        ? {
            ...producto,
            [name]: value,
            precio: name === 'cantidad' ? value * producto.precioUnidad : producto.precio,
          }
        : producto
    );
    setProductos(updatedProductos);
  };

  // Calcular el total de todos los productos
  const totalGeneral = productos.reduce((total, producto) => total + producto.precio, 0);

  // Filtrar clientes según lo que se escribe en el campo de búsqueda
  const clientesFiltrados = clientes.filter(cliente =>
    cliente.name.toLowerCase().includes(filtroCliente.toLowerCase())
  );

  // Manejar la selección del cliente
  const handleClienteChange = (e) => {
    const clienteId = e.target.value;
    setClienteSeleccionado(clienteId);

    if (clienteId) {
      const clienteSeleccionado = clientes.find(cliente => cliente.id === clienteId);
      setDireccion(clienteSeleccionado.address);
    } else {
      setDireccion('');
    }
  };

  // Manejar el cambio en el campo de nuevo cliente
  const handleNuevoClienteChange = (e) => {
    setNuevoCliente(e.target.value);
    setDireccion(''); // Al escribir un nuevo cliente, limpiamos la dirección
  };

  // Manejar el cambio en el filtro de clientes
  const handleFiltroClienteChange = (e) => {
    setFiltroCliente(e.target.value);
  };

  // Manejar el cambio en el campo de dirección
  const handleDireccionChange = (e) => {
    setDireccion(e.target.value); // Permitir al usuario escribir en la dirección
  };


  return (
    <div className="producto-form">
      
      {/* Sección de cliente */}
      <div className="cliente-selector">
        <label htmlFor="cliente">Cliente:</label>
        <input
          type="text"
          id="cliente"
          value={filtroCliente}
          onChange={handleFiltroClienteChange} // Actualizar filtro al escribir
          placeholder="Buscar o escribir cliente"
          className="form-input"
        />

        {/* Mostrar los clientes filtrados */}
        {filtroCliente && (
          <ul className="clientes-filtrados">
            {clientesFiltrados.map((cliente, index) => (
              <li
                key={index}
                onClick={() => {
                  setClienteSeleccionado(cliente.id);
                  setFiltroCliente(cliente.name);
                  setDireccion(cliente.address);
                }}
                className="cliente-item"
              >
                {cliente.name}
              </li>
            ))}
          </ul>
        )}

        {/* Campo de dirección */}
        <div className="direccion">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={handleDireccionChange}
            className="form-input"
          />
        </div>

      </div>

      <div className="producto-form-header">
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio Unidad</span>
        <span>Total</span>
      </div>

      {productos.map((producto, index) => (
        <div key={index} className="producto-form-row">
          <select
            name="nombre"
            value={producto.nombre}
            onChange={(e) => handleProductoChange(index, e)}
            className="form-input"
          >
            <option value="">Seleccionar producto</option>
            {opcionesProductos.map((p, i) => (
              <option key={i} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={producto.cantidad}
            onChange={(e) => handleInputChange(index, e)}
            className="form-input"
          />
          <input
            type="number"
            name="precioUnidad"
            placeholder="Precio Unidad"
            value={producto.precioUnidad}
            className="form-input"
            readOnly
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio Total"
            value={producto.precio}
            className="form-input"
            readOnly
          />
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="form-buttons">
        <button className="btn-agregar" onClick={handleAgregar}>
          + Agregar
        </button>
        <button className="btn-eliminar" onClick={handleEliminar} disabled={productos.length <= 1}>
          - Eliminar
        </button>
      </div>

      <div className="producto-form-total">
        <h3>Total General:</h3>
        <div className="total-cuadro">${totalGeneral.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductoForm;

