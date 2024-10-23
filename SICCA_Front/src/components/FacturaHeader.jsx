import React from 'react';
import '../styles/FacturaPopUp.css'; 
import Illustration from '../components/Ilustration';

const FacturaHeader = () => {
  return (
    <div className="factura-header">
      <div className="factura-logo">
        <Illustration />
      </div>
      <div className="factura-info">
        <h1>SICA</h1>
        <p>Te queremos mucho, gracias por comprar en nuestra bella tienda...</p>
        <p>Correo: mitienda@hotmail.co</p>
        <p>Web: www.holasitioincreible.com</p>
        <p>Teléfono: 3102883679</p>
        <p>Dirección: upb_laureles</p>
      </div>
      <div className="factura-fecha">
        <label>Fecha:</label>
        <input type="text" placeholder="DD/MM/AAAA" />
      </div>
    </div>
  );
};

export default FacturaHeader;
