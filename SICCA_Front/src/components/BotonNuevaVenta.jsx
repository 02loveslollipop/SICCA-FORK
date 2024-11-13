import React from 'react';

const NuevaVentaBoton = ({ onNewventa }) => {
  return (
    <button className="nueva-venta-boton" onClick={onNewventa}>
      + Nueva Venta
    </button>
  );
};

export default NuevaVentaBoton;
