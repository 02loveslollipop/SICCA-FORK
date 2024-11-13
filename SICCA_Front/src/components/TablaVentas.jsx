import React from 'react';

const ventas = [
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
  { id: '#7676', fecha: '17/02/24', vendedor: 'Ann Lee' },
];

const TablaVentas = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Fecha</th>
          <th>Vendedor</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta, index) => (
          <tr key={index}>
            <td></td>
            <td>{venta.id}</td>
            <td>{venta.fecha}</td>
            <td>{venta.vendedor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaVentas;
