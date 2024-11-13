import React from 'react';
import fotico from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={fotico} alt="Logo" style={{ width: '130px', height: 'auto' }} />
    </div>
  );
}

export default Logo;