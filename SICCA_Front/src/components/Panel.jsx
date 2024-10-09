import React from 'react'

export default function Panel() {
  const alerts = [
    { id: 1, date: '2023-05-20', quantity: 5, status: 'Pendiente' },
    { id: 2, date: '2023-05-19', quantity: 3, status: 'Resuelto' },
  ]

  const topProducts = [
    { id: 1, name: 'Producto A', category: 'Categoría 1' },
    { id: 2, name: 'Producto B', category: 'Categoría 2' },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle">Ganancias</h3>
          <p className="text-2xl font-bold text-green-600">$10,000</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle">Devoluciones</h3>
          <p className="text-2xl font-bold text-red-600">$500</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle">Compras</h3>
          <p className="text-2xl font-bold text-blue-600">$8,000</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-subtitle">Ingresos</h3>
          <p className="text-2xl font-bold text-purple-600">$18,000</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="dashboard-card mb-6">
            <h3 className="dashboard-subtitle">Gráfica de Ventas</h3>
            {/* Aquí va la gráfica esa de rectangulos*/}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p>Gráfica de Ventas</p>
            </div>
          </div>
          <div className="dashboard-card">
            <h3 className="dashboard-subtitle">Alertas de Stock</h3>
            <div className="overflow-x-auto">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Alerta ID</th>
                    <th>Fecha</th>
                    <th>Cant. Alerta</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert) => (
                    <tr key={alert.id}>
                      <td>{alert.id}</td>
                      <td>{alert.date}</td>
                      <td>{alert.quantity}</td>
                      <td>{alert.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="dashboard-card mb-6">
            <h3 className="dashboard-subtitle">Productos Más Vendidos</h3>
            {/* Aquí va la gráfica circular */}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p>Gráfica Circular de Productos Más Vendidos</p>
            </div>
          </div>
          <div className="dashboard-card">
            <h3 className="dashboard-subtitle">Productos Más Vendidos</h3>
            <div className="overflow-x-auto">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Producto ID</th>
                    <th>Producto</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product) => (
                    <tr key={product.id}>
                      
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}