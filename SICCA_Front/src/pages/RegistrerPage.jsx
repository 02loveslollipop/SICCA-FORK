import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Illustration from '../components/Ilustration';
import '../styles/RegistrerPage.css'; 

const RegistrerPage = () => {
  return (
    <div className="login-container2">
      <Illustration />
      <div className="login-form2">
        <h2>Registrarse</h2>
        <h3>Gestiona tus inventarios de manera eficiente</h3>
        <p>Vamos a configurar los datos para que puedas verificar tu cuenta personal y comenzar a configurar tu perfil de trabajo</p>
        <div className="filasName-container2">
          <FormInput label="Nombre" type="text" placeholder="Ingresa tu nombre" />
          <FormInput label="Apellido" type="text" placeholder="Ingresa tu apellido" />
        </div>
        <div className='filasData-container2'>
          <FormInput label="Correo" type="email" placeholder="Ingresa tu correo" />
          <FormInput label="Teléfono" type="number" placeholder="Ingresa tu teléfono" />
        </div>  
        <FormInput label="Contraseña" type="password" placeholder="Ingresa tu contraseña" />
        <div className="checkbox-container">
          <Checkbox label=" Estoy de acuerdo con los términos, la política de privacidad y honorarios" />
        </div>
        <Button text="Registrarse" />
        <p className="register-link2">
          ¿Ya tienes una cuenta? <Link to="/">Acceder</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrerPage;

