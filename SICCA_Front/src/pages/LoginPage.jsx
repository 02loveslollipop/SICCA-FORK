import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Illustration from '../components/Ilustration';
import Swal from 'sweetalert2';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verPassword, setShowPassword] = useState(false);
  const [errores, setErrors] = useState({});

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const visibilidadContrasena = (e) => {
    setShowPassword(e.target.checked); 
  };

  const validacion = () => {
    const error = {};
    if (!email) {
      error.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'El correo no es valido';
    }
    if (!password) {
      error.password = 'La contraseña es requerida';
    } else if (password.length < 8) {
      error.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/[A-Z]/.test(password)) {
      error.password = 'La contraseña debe tener al menos una letra mayúscula';
    } else if (!/[0-9]/.test(password)) {
      error.password = 'La contraseña debe tener al menos un número';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      error.password = 'La contraseña debe tener al menos un carácter especial';
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacionError = validacion();

    if (!email && !password) {
      Swal.fire("¡Error!", "El correo y la contraseña no pueden estar vacíos", "info");
      return;
    }
    
    if (Object.keys(validacionError).length > 0) {
      setErrors(validacionError);
      Object.values(validacionError).forEach((error) => {
        Swal.fire("¡Error!", error, "info");
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Bienvenido a SICCA"
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Acceder</h2>
        <p>Observa tu crecimiento y obtén soporte!</p>
        <FormInput 
          id="email"
          label="Correo" 
          type="email" 
          placeholder="Ingrese su correo" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput 
          id="password"
          label="Contraseña" 
          type={verPassword ? 'text' : 'password'}
          placeholder="Mínimo 8 caracteres" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox 
          label=" Mostrar"
          onChange={visibilidadContrasena}
          checked={verPassword} 
        /> 
        <Button text="Acceder" />
        <p className="register-link">
          ¿No estás registrado? <Link to="/register">Crear una nueva cuenta</Link>
        </p>
      </form>
      <Illustration />
    </div>
  );
};

export default LoginPage;
