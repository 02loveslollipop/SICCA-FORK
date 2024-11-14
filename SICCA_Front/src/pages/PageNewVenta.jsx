import { useState } from 'react';
import '../styles/NewRegistrarVent.css';
import MenuLateral from '../components/MenuLateral';
import ProductoForm from '../components/ProductoForm';
import BotonAcciones from '../components/BottonAcciones';
import FacturaPopUp from '../pages/FacturaPopUp';
import ProfileMenu from '../components/ProfileMenu';

const PageNewVenta = () => {
  const [isFacturaOpen, setIsFacturaOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleOpenFactura = () => {
    setIsFacturaOpen(true);
  };

  const handleCloseFactura = () => {
    setIsFacturaOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="dashboard-container flex flex-col h-screen bg-gray-100">
      {/* Header fijo en la parte superior */}
      <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Nueva venta</h1>
          <div className="relative">
            <button onClick={toggleProfileMenu} className="flex items-center focus:outline-none">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="/placeholder.svg"
                alt="Profile"
              />
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
        <div className="New_container flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
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
    </div>
  );
};

export default PageNewVenta;
