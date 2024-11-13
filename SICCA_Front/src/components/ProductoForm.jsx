import React, { useState } from 'react';

const ProductoForm = () => {

  const [productos, setProductos] = useState([{ nombre: '', descripcion: '', cantidad: '', precio: '' }]);

  const handleAgregar = () => {
    setProductos([...productos, { nombre: '', descripcion: '', cantidad: '', precio: '' }]);
  };


  const handleEliminar = () => {
    if (productos.length > 1) {
      setProductos(productos.slice(0, -1));
    }
  };


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
            name="nombre"
            placeholder="Producto"
            value={producto.nombre}
            onChange={(e) => handleInputChange(index, e)}
            className="form-input"
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            value={producto.descripcion}
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