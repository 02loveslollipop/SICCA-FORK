import { useState } from 'react';
import '../styles/NewRegistrarVent.css';
import MenuLateral from '../components/MenuLateral';
import ProductoForm from '../components/ProductoForm';
import BotonAcciones from '../components/BottonAcciones';
import FacturaPopUp from '../pages/FacturaPopUp';

const PageNewVenta = () => {
  const [isFacturaOpen, setIsFacturaOpen] = useState(false);
  const [productos, setProductos] = useState([]);  
  const [totalGeneral, setTotalGeneral] = useState(0);  

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
  );
};

export default PageNewVenta;
