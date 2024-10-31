import React from 'react';


const FormInput = ({ id, label, type, placeholder, value, onChange, error }) => (
  <div className="form-input">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}  
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="error-text">{error}</p>}
  </div>
);

export default FormInput;