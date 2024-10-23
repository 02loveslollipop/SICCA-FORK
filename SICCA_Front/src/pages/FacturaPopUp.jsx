import React from 'react';
import '../styles/FacturaPopUp.css'; 
import Illustration from '../components/Ilustration';

const FacturaPopUp = () => {
  return (
    <div className="PopUp-container">
        <Illustration />
      <div className="Factura">
        <h2>Factura</h2>
        <p>Facturilla</p>
      </div>
        
    </div>
  );
};

export default FacturaPopUp;