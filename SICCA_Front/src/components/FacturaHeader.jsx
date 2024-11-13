import React, { useState, useEffect } from 'react';
import '../styles/FacturaPopUp.css';
import Logo from '../components/Logo';

const FacturaHeader = () => {
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setFecha(formattedDate);
  }, []);

  return (
    <div className="factura-header">
      <div className="factura-logo">
        <Logo /> 
      </div>
      <div className="factura-info">
        <h1>SICA</h1>
        <p>Te queremos mucho, gracias por comprar en nuestra bella tienda, vuelve pronto...</p>
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
        <input type="text" value={fecha} readOnly />
      </div>
    </div>
  );
};

export default FacturaHeader;
