import { useState } from 'react';
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
  const [setErrores] = useState({});
  const [terminos, setTerminos] = useState(false);
  const [ setError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Obtén el token del localStorage

      if (!token) {
        setError('No se encontró el token');
        return;
      }

    const validaciondeerrores = validacion();
    if (Object.keys(validaciondeerrores).length > 0) {
      setErrores(validaciondeerrores);
      Object.values(validaciondeerrores).forEach((error) => {
        Swal.fire("¡Error!", error, "info");
      });
      return;
    }

    // Si no hay errores, hacemos la solicitud a la API
    const datosUsuario = {
      name: nombre,
      lastname: apellido,
      email: correo,
      cellphone: telefono,
      password: contrasena,
      role: 'user',  // Rol asignado por defecto
    };

    try {
      const response = await fetch('https://sica.02loveslollipop.uk/user', {
        method: 'POST',
        headers: {
          'X-Access-Token': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa
        Toast.fire({
          icon: "success",
          title: "Usuario Registrado Correctamente"
        });
        window.location.reload();
      } else {
        // Si hubo algún error en la respuesta de la API
        Swal.fire("¡Error!", data.message || "Error al registrar el usuario", "error");
      }
    } catch (error) {
      // Manejo de errores si la solicitud falla
      Swal.fire("¡Error!", "Hubo un problema al registrar el usuario", error);
    }
  };

  return (
    <div className="login-container2">
      <Illustration />
      <div className="login-form2" >
        <h2 style={{fontSize:30}}>Ingresar Usuario</h2>
        {/* <h3 style={{paddingTop:30, fontSize:18}}>Gestiona tus inventarios de manera eficiente</h3> */}
        <p style={{paddingTop:30}}>Vamos a configurar los datos para que puedas verificar tu cuenta personal y comenzar a configurar tu perfil de trabajo</p>
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
          <Button text="Crear"/>
        </form>

      </div>
    </div>
  );
};

export default RegistrerPage;
