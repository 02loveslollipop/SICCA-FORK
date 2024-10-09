//import React from 'react';

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}

export default FormInput;