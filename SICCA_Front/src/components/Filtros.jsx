import React from 'react';

const Filtros = () => {
  return (
    <div className="filtros">
      <input type="date" />
      <select>
        <option>Fecha</option>
      </select>
      <select>
        <option>Vendedor</option>
      </select>
    </div>
  );
};

export default Filtros;
