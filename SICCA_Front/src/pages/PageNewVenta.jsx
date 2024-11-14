import { useState } from 'react';
import '../styles/NewRegistrarVent.css';
import MenuLateral from '../components/MenuLateral';
import ProductoForm from '../components/ProductoForm';
import BotonAcciones from '../components/BottonAcciones';
import FacturaPopUp from '../pages/FacturaPopUp';
import ProfileMenu from '../components/ProfileMenu';

const PageNewVenta = () => {
  const [isFacturaOpen, setIsFacturaOpen] = useState(false);
  const [productos, setProductos] = useState([]);  
  const [totalGeneral, setTotalGeneral] = useState(0);  
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleOpenFactura = async () => {
    // Crear el objeto venta con los datos de productos, cantidad y total
    const venta = {
      products: productos.map((producto) => ({
        idProducto: producto.id, // El id del producto
        quantity: producto.cantidad, // La cantidad del producto
      })),
      total: totalGeneral, // El total de la venta
    };
  
    try {
      // Llamar a la función para guardar la venta
      const resultadoVenta = await guardarVenta(venta);
      console.log("Resultado de guardar venta: " + resultadoVenta)
      // Si la venta se guarda correctamente, abre el modal de la factura
      setIsFacturaOpen(true);
    } catch (error) {
      console.error('Error al generar la factura:', error);
    }
  };
  
  // Función para cerrar la factura
  const handleCloseFactura = () => {
    setIsFacturaOpen(false);
  };
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const guardarVenta = async (venta) => {
    // Obtener los valores desde localStorage
    const token = localStorage.getItem('token'); // Token de acceso
    const idClient = localStorage.getItem('clienteId'); // ID del cliente
    const idSeller = localStorage.getItem('userId'); // ID del vendedor (deberías haberlo guardado previamente)
  
    if (!token || !idClient || !idSeller) {
      console.error('Faltan datos en el localStorage');
      return;
    }
  
    try {
      const response = await fetch('https://sica.02loveslollipop.uk/sale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': token, // Token de acceso
        },
        body: JSON.stringify({
          date: new Date().toUTCString(), // Fecha de la venta
          id_client: idClient, // ID del cliente
          id_seller: idSeller, // ID del vendedor
          products: venta.products, // Productos en la venta
          total: venta.total, // Total de la venta
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar la venta');
      }
  
      const data = await response.json();
      console.log('Venta guardada:', data);
      return data;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error;
    }
  };
  

  return (
    <div className="dashboard-container">
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

      <div className="flex flex-1 mt-16">
        <MenuLateral />
        <div className="New_container">
          <h1 className="page-title">Nueva Venta</h1>
          <ProductoForm 
            productos={productos} 
            setProductos={setProductos} 
            totalGeneral={totalGeneral} 
            setTotalGeneral={setTotalGeneral} 
          />
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
