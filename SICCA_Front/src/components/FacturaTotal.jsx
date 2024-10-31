import React from 'react';
import '../styles/FacturaPopUp.css'; 

const FacturaTotal = () => {
  return (
    <div className="factura-total">
      <div className="factura-total-valor">
        <label>Total:</label>
        <input type="text" value="33.500" readOnly />
      </div>
      <div className="factura-firma">
        <label>Firma:</label>
        <div className="firma-linea"></div>
      </div>
    </div>
  );
};

export default FacturaTotal;
