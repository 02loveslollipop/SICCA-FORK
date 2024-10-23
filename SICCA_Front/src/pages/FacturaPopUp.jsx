import React from 'react';
import FacturaHeader from '../components/FacturaHeader';
import FacturaDatos from '../components/FacturaDatos';
import FacturaTabla from '../components/FacturaTabla';
import FacturaObservaciones from '../components/FacturaObservaciones';
import FacturaTotal from '../components/FacturaTotal';
import '../styles/FacturaPopUp.css'; 

const FacturaPopUp = () => {
  return (
    <div className="factura-popup">
      <FacturaHeader />
      <FacturaDatos />
      <FacturaTabla />
      <FacturaObservaciones />
      <FacturaTotal />
    </div>
  );
};

export default FacturaPopUp;
