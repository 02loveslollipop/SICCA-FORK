import React, { useState } from 'react';
import '../styles/NewRegistrarVent.css';
import MenuLateral from '../components/MenuLateral';
import ProductoForm from '../components/ProductoForm';
import BotonAcciones from '../components/BottonAcciones';
import FacturaPopUp from '../pages/FacturaPopUp';

const PageNewVenta = () => {
  const [isFacturaOpen, setIsFacturaOpen] = useState(false);

  const handleOpenFactura = () => {
    setIsFacturaOpen(true);
  };

  const handleCloseFactura = () => {
    setIsFacturaOpen(false);
  };

  return (
    <div className="dashboard-container">
      <MenuLateral />
      <div className="New_container">
        <h1 className="page-title">Nueva Venta</h1>
        <ProductoForm />
        <BotonAcciones onGenerateFactura={handleOpenFactura} />
        {isFacturaOpen && (
          <div className="modal-background" onClick={handleCloseFactura}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseFactura}>X</button>
              <FacturaPopUp onClose={handleCloseFactura} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNewVenta;
