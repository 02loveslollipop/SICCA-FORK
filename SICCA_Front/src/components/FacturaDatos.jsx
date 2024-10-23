import React from 'react';
import '../styles/FacturaPopUp.css'; 

const FacturaDatos = () => {
  return (
    <div className="factura-datos">
      <div className="factura-vendedor">
        <label>Vendedor:</label>
        <input type="text" value="caliche vendiendo" readOnly />
      </div>
      <div className="factura-telefono">
        <label>Teléfono:</label>
        <input type="text" value="33.500" readOnly />
      </div>
      <div className="factura-codigo">
        <label>CodigoVenta:</label>
        <input type="text" value="3412" readOnly />
      </div>
    </div>
  );
};

export default FacturaDatos;
