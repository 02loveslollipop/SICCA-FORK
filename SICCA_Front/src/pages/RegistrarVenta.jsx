import React, { useState } from 'react';
import ProfileMenu from '../components/ProfileMenu';
import Buscador from '../components/Buscador';
import Filtros from '../components/Filtros';
import BotonNuevaVenta from '../components/BotonNuevaVenta';
import TablaVentas from '../components/TablaVentas';
import '../styles/RegistrarVenta.css';
import MenuLateral from '../components/MenuLateral';
import '../styles/MenuLateral.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const VentasPage = () => {

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNerVenta = () => {
      navigate('/nuevaventa'); 
    };

    const toggleProfileMenu = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    };


    return (
      <div className="dashboard-container flex flex-col h-screen bg-gray-100">
        {/* Header fijo en la parte superior */}
        <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Registrar venta</h1>
            <div className="relative">
            <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center focus:outline-none"
          >
            <span className="text-gray-500 font-medium">Perfil</span>
            <svg className="h-4 w-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
              {isProfileMenuOpen && <ProfileMenu />}
            </div>
          </div>
        </div>

        {/* Contenido principal con margen superior para evitar que el header lo cubra */}
        <div className="flex flex-1 mt-16">
          <MenuLateral />
          <div className="ventas-container flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <div className="ventas-header">
              <h1>Ventas</h1>
              <BotonNuevaVenta onNewventa={handleNerVenta} />
            </div>
            <div className="buscador-filtros-container">
            </div>
            <TablaVentas />
          </div>
        </div>
      </div>
    );
};

export default VentasPage;
