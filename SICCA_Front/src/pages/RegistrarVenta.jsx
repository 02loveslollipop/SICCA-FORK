import React from 'react';
import Header from '../components/Header';
import Buscador from '../components/Buscador';
import Filtros from '../components/Filtros';
import BotonNuevaVenta from '../components/BotonNuevaVenta';
import TablaVentas from '../components/TablaVentas';
import '../styles/RegistrarVenta.css';
import MenuLateral from '../components/MenuLateral';
import '../styles/MenuLateral.css'
import { useNavigate } from 'react-router-dom';

const VentasPage = () => {

    const navigate = useNavigate();

    const handleNerVenta = () => {
      navigate('/nuevaventa'); 
    };

    return (
      <div className="dashboard-container">
        {/* Menú lateral */}
        <MenuLateral />
  
        {/* Contenido principal */}
        <div className="ventas-container">
          <div className="ventas-header">
            <h1>Ventas</h1>
            <BotonNuevaVenta onNewventa={handleNerVenta}/>
          </div>
  
          <div className="buscador-filtros-container">
            <Buscador />
            <Filtros />
          </div>
  
          <TablaVentas />
        </div>
      </div>
    );
  };
  
  export default VentasPage;