// components/MenuLateral.jsx
import React from 'react';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';

const MenuLateral = ({ setCurrentPage }) => {
  return (
    <aside className="menu-lateral">
      <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentPage('Panel')}>
              <FaTachometerAlt className="icon" />
              Panel
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('Productos')}>
              <FaBoxOpen className="icon" />
              Productos
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('Ventas')}>
              <FaShoppingCart className="icon" />
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MenuLateral;
