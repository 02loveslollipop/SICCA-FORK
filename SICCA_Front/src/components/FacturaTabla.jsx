// import React from 'react';
import '../styles/FacturaPopUp.css'; 

const FacturaTabla = () => {
  // Datos estáticos (quemados)
  const productos = [
    {
      producto: "Pera",
      descripcion: "Unidad",
      cantidad: 2,
      precio: 100,
      total: 100,
    },
    {
      producto: "Garbanzo",
      descripcion: "1kg",
      cantidad: 1,
      precio: 8000,
      total: 8000,
    },
    {
      producto: "tomate",
      descripcion: "Unidad",
      cantidad: 2,
      precio: 2000,
      total: 2000,
    },
  ];

  if (!Array.isArray(productos) || productos.length === 0) {
    return <div>No hay productos para mostrar.</div>;
  }

  return (
    <div className="factura-tabla">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.producto}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>{producto.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacturaTabla;

