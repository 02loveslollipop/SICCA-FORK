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
        <p>Te queremos mucho, gracias por comprar en nuestra bella tienda, vuelve pronto... </p>
        <div className="factura-contact">
          <div className="factura-left">
            <p>Correo: sicca@hot.com</p>
            <p>Web: www.sicca.com</p>
          </div>
          <div className="factura-right">
            <p>Teléfono: 3102883679</p>
            <p>Dirección: UPB</p>
          </div>
        </div>
      </div>
      <div className="factura-fecha">
        <label>Fecha:</label>
        <input type="date" placeholder="DD/MM/AAAA" />
      </div>
    </div>
  );
};

export default FacturaHeader;
