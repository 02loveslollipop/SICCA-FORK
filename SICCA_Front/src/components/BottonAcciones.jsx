import React from 'react';

const BotonAcciones = ({ onGenerateFactura }) => {
  return (
    <div className="boton-acciones">
      <button className="btn-generar-factura" onClick={onGenerateFactura}>
        Generar Factura
      </button>
    </div>
  );
};

export default BotonAcciones;
