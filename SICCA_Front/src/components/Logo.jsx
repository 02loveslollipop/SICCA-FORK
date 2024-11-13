import React from 'react';
import fotico from '../assets/fondo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={fotico} alt="Logo" style={{ width: '160px', height: 'auto' }} />
    </div>
  );
}

export default Logo;