import React from 'react';

const Checkbox = ({ label }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="show-password" />
      <label htmlFor="show-password">{label}</label>
    </div>
  );
}

export default Checkbox;