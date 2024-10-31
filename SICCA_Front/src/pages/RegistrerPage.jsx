import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Illustration from '../components/Ilustration';
import Swal from 'sweetalert2';
import '../styles/RegistrerPage.css';

const RegistrerPage = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [terminos, setTerminos] = useState(false);


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


  const validacion = () => {
    const error = {};
    if (!nombre) error.nombre = 'El nombre es requerido';
    if (!apellido) error.apellido = 'El apellido es requerido';

    if (!correo) {
      error.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      error.correo = 'El correo no es válido';
    }

    if (!telefono) {
      error.telefono = 'El teléfono es requerido';
    } else if (telefono.length < 7) {
      error.telefono = 'El teléfono debe tener al menos 7 números';
    }
    
    if (!contrasena) {
      error.contrasena = 'La contraseña es requerida';
    } else if (contrasena.length < 8) {
      error.contrasena = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/[A-Z]/.test(contrasena)) {
      error.contrasena = 'La contraseña debe tener al menos una letra mayúscula';
    } else if (!/[0-9]/.test(contrasena)) {
      error.contrasena = 'La contraseña debe tener al menos un número';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
      error.contrasena = 'La contraseña debe tener al menos un carácter especial';
    }

    if (!terminos) error.terminos = 'Debes aceptar los términos y condiciones';

    return error;
    
  };

  const aceptarTerminos = (e) => {
    setTerminos(e.target.checked);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const validaciondeerrores = validacion();
      if (!nombre && !apellido && !correo && !telefono && !contrasena) {
        Swal.fire("¡Error!", "los campos no pueden estar vacíos", "info");
        return;
      }
      if (Object.keys(validaciondeerrores).length > 0) {
        setErrores(validaciondeerrores);
        Object.values(validaciondeerrores).forEach((error) => {
          Swal.fire("¡Error!", error, "info");
        });
      } else {
        Toast.fire({
          icon: "success",
          title: "Usuario Registrado Correctamente"
        });
      }
    };

  return (
    <div className="login-container2">
      <Illustration />
      <div className="login-form2">
        <h2>Registrarse</h2>
        <h3>Gestiona tus inventarios de manera eficiente</h3>
        <p>Vamos a configurar los datos para que puedas verificar tu cuenta personal y comenzar a configurar tu perfil de trabajo</p>
        <form onSubmit={handleSubmit}>
          <div className="filasName-container2">
            <FormInput
              id="nombre"
              label="Nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <FormInput
              id="apellido"
              label="Apellido"
              type="text"
              placeholder="Ingresa tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className='filasData-container2'>
            <FormInput
              id="correo"
              label="Correo"
              type="email"
              placeholder="Ingresa tu correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <FormInput
              id="telefono"
              label="Teléfono"
              type="number"
              placeholder="Ingresa tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <FormInput
            id="contrasena"
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <div className="checkbox-container">
            <Checkbox
              label=" Estoy de acuerdo con los términos, la política de privacidad y honorarios"
              onChange={aceptarTerminos}
              checked={terminos}
            />
          </div>
          <Button text="Registrarse"/>
        </form>
        <p className="register-link2">
          ¿Ya tienes una cuenta? <Link to="/">Acceder</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrerPage;
