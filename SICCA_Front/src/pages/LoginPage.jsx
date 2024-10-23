//import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Illustration from '../components/Ilustration';
import '../styles/LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Acceder</h2>
        <p>Observa tu crecimiento y obtén soporte!</p>
        <FormInput label="Correo" type="email" placeholder="Ingrese su correo" />
        <FormInput label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" />
        <Checkbox label="Mostrar" />
        <Button text="Acceder" />
        <p className="register-link">
          ¿No estás registrado? <Link to="/register">Crear una nueva cuenta</Link>
        </p>
      </div>
      <Illustration />
    </div>
  );
};

export default LoginPage;
