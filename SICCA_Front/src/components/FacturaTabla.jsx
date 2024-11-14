import React from 'react';
import '../styles/FacturaPopUp.css'; 

const productos = [
  { producto: 'leche', cantidad: 5, descripcion: '1L leche', precio: 3000, total: 15000 },
  { producto: 'queso', cantidad: 2, descripcion: '500g queso', precio: 4000, total: 8000 },
  { producto: 'carne', cantidad: 4, descripcion: '1kg carne', precio: 10000, total: 40000 },
  { producto: 'jugo', cantidad: 3, descripcion: '750ml jugo', precio: 2500, total: 7500 },
];

const FacturaTabla = () => {
  return (
    <div className="factura-tabla">
      <table>
        <thead>
          <tr>
            <th>producto</th>
            <th>descripcion</th>
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
