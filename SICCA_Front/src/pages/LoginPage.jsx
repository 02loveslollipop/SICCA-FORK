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

  const handleSubmit = async (e) => {
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
      try {
        const response = await fetch('https://sica.02loveslollipop.uk/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        if (response.status === 200) {
          const data = await response.json();
          const token = data.token;
          //add token to local storage
          localStorage.setItem('token', token);
          //get the user requesting to /role endpoint giving the token in the header as X-Access-Token
          let url = `https://sica.02loveslollipop.uk/role/${email}`;
          console.log(url);
          const response2 = await fetch(url, {headers: {'X-Access-Token': token}, method: 'GET'});
          const dataRole = await response2.json();
          console.log(dataRole);
          const role = await dataRole.role;
          //add role to local storage
          localStorage.setItem('role', role);
          Toast.fire({
            icon: "success",
            title: "Bienvenido a SICCA"
          });
          // Save the token or perform any other actions needed
          // Redirect to the dashboard if role is admin, else redirect to the user registrar venta page
          console.log(role);
          if (role === 'admin') {
            //http redirect to dashboard.02loveslollipop.uk
            window.location.href = 'https://dashboard.02loveslollipop.uk';
          }
          else {
            //else send to /register relative path
            window.location.href = '/registrarventa';
            
          }
        } else if (response.status === 401) {
          Swal.fire("¡Error!", "Credenciales incorrectas", "info");
        } else {
          Swal.fire("¡Error!", "Ocurrió un error inesperado", "info");
        }
      } catch (error) {
        Swal.fire("¡Error!", "No se pudo conectar con el servidor", "info");
      }
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
