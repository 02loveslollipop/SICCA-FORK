//import React from 'react'

{/* FALTAA !!!!*/}
export default function Sales() {
  return (
    <div className="dashboard-card">
        {/* Contenedores de la parte superior*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="dashboard-card">
        <p className="text-2xl font-bold text-green-600">$30,000</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ventas diarias</h3>
        </div>
        <div className="dashboard-card">
        <p className="text-2xl font-bold text-red-600">270</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ordenes diarias totales</h3>
        </div>
        <div className="dashboard-card">
        <p className="text-2xl font-bold text-blue-600">$1,000</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Ingresos diarios</h3>
        </div>
        <div className="dashboard-card">
        <p className="text-2xl font-bold text-purple-600">100</p>
          <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Clientes diarios</h3>
        </div>
      </div>

      {/* Grafica de productos mas vendidos*/}
      <div className="dashboard-card mb-6">
        <h3 className="dashboard-subtitle" style={{ color: 'black' }}>Productos Más Vendidos</h3>
        {/* Aquí va la gráfica circular */}
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <p>Gráfica Circular de Productos Más Vendidos</p>
        </div>
      </div>

    </div>
    
  )
}