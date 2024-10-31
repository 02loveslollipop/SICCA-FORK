import React from 'react';

const Checkbox = ({ label, onChange, checked }) => (
  <div>
    <input
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
    <label>{label}</label>
  </div>
);

export default Checkbox;