// import React from 'react';
import FacturaHeader from '../components/FacturaHeader';
import FacturaDatos from '../components/FacturaDatos';
import FacturaTabla from '../components/FacturaTabla';
import FacturaObservaciones from '../components/FacturaObservaciones';
import FacturaTotal from '../components/FacturaTotal';
import '../styles/FacturaPopUp.css';

const FacturaPopUp = ({ onClose }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <FacturaHeader />
        <FacturaDatos />
        <FacturaTabla />
        <FacturaTotal />
        <FacturaObservaciones />
      </div>
    </div>
  );
};

export default FacturaPopUp;