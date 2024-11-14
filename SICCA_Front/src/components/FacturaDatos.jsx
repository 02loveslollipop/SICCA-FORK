import { useEffect, useState } from 'react';
import '../styles/FacturaPopUp.css'; 

const FacturaDatos = () => {
  const [vendedor, setVendedor] = useState(null);  // Debe ser vendedor, no setVendedor
  const [loading, setLoading] = useState(true);

  const vendedorId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const fetchVendedor = async () => {
      if (!vendedorId) return;  // Evita hacer la solicitud si el vendedorId es nulo o indefinido
      
      try {
        const response = await fetch(`https://sica.02loveslollipop.uk/user/${vendedorId}`, {
          method: 'GET',
          headers: {
            'X-Access-Token': token,
          },
        });
  
        if (!response.ok) {
          throw new Error('Error al obtener los datos del vendedor');
        }
  
        const data = await response.json();
        setVendedor(data);  // Aquí es donde guardas la respuesta de la API
        setLoading(false);  // Cambia el estado a false cuando los datos estén listos
      } catch (error) {
        console.error('Error fetching vendedor data:', error);
        setLoading(false);  // Asegúrate de cambiar el estado de loading en caso de error
      }
    };
  
    fetchVendedor();
  }, [vendedorId, token]);  // Asegúrate de incluir `token` y `vendedorId` como dependencias

  // Si los datos aún están cargando, muestra un mensaje de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="factura-datos">
      <div className="factura-vendedor">
        <label>Vendedor:</label>
        {/* Asegúrate de que vendedor esté disponible antes de renderizar */}
        <input type="text" value={vendedor ? vendedor.name : 'Sin nombre'} readOnly />
      </div>
      <div className="factura-telefono">
        <label>Teléfono:</label>
        {/* Asumiendo que el teléfono también es parte del objeto vendedor */}
        <input type="text" value='3156874355' readOnly />
      </div>
      <div className="factura-codigo">
        <label>CodigoVenta:</label>
        {/* Aquí puedes reemplazar con el código de venta real */}
        <input type="text" value="6644535324" readOnly />
      </div>
    </div>
  );
};

export default FacturaDatos;
