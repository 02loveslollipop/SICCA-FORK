import React from 'react';
import '../styles/NewRegistrarVent.css';
import MenuLateral from '../components/MenuLateral';
import ProductoForm from '../components/ProductoForm'; 
import BotonAcciones from '../components/BottonAcciones'; 
import { useNavigate } from 'react-router-dom';

const PageNewVenta = () => {
  const navigate = useNavigate();

  const handleFactura = () => {
    navigate('/factura'); 
  };

  return (
    <div className="dashboard-container">
      <MenuLateral />
      <div className="New_container">
        <h1 className="page-title">Nueva Venta</h1>
        <ProductoForm />
        <BotonAcciones onGenerateFactura={handleFactura} />
      </div>
    </div>
  );
};

export default PageNewVenta;