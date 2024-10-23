import React from 'react';
import '../styles/FacturaPopUp.css'; 

const productos = [
  { cantidad: 2, descripcion: 'pan', precio: 2000, total: 4000 },
  { cantidad: 1, descripcion: 'lechuga', precio: 500, total: 500 },
  { cantidad: 3, descripcion: 'frijol', precio: 5000, total: 15000 },
  { cantidad: 2, descripcion: 'chocolatina', precio: 2000, total: 4000 },
  { cantidad: 1, descripcion: 'atún', precio: 4000, total: 4000 },
  { cantidad: 1, descripcion: 'trapera', precio: 2000, total: 2000 },
];

const FacturaTabla = () => {
  return (
    <div className="factura-tabla">
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.cantidad}</td>
              <td>{producto.descripcion}</td>
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