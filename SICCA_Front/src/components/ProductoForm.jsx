import React, { useState } from 'react';

const ProductoForm = () => {
  // Estado para manejar las filas de productos
  const [productos, setProductos] = useState([{ id: '', nombre: '', cantidad: '', precio: '' }]);

  // Función para agregar una nueva fila
  const handleAgregar = () => {
    setProductos([...productos, { id: '', nombre: '', cantidad: '', precio: '' }]);
  };

  // Función para eliminar la última fila (solo si hay más de una fila)
  const handleEliminar = () => {
    if (productos.length > 1) {
      setProductos(productos.slice(0, -1));
    }
  };

  // Función para manejar cambios en los campos de cada producto
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProductos = productos.map((producto, i) =>
      i === index ? { ...producto, [name]: value } : producto
    );
    setProductos(updatedProductos);
  };

  return (
    <div className="producto-form">
      {productos.map((producto, index) => (
        <div key={index} className="producto-form-row">
          <input
            type="text"
            name="id"
            placeholder="ID Producto"
            value={producto.id}
            onChange={(e) => handleInputChange(index, e)}
            className="form-input"
          />
          <input
            type="text"
            name="nombre"
            placeholder="Producto"
            value={producto.nombre}
            onChange={(e) => handleInputChange(index, e)}
            className="form-input"
          />
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
            name="precio"
            placeholder="Precio"
            value={producto.precio}
            onChange={(e) => handleInputChange(index, e)}
            className="form-input"
          />
        </div>
      ))}
      <div className="form-buttons">
        <button className="btn-agregar" onClick={handleAgregar}>
          + Agregar
        </button>
        <button className="btn-eliminar" onClick={handleEliminar} disabled={productos.length <= 1}>
          - Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductoForm;