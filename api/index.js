import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contacto, setContacto] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/contacto')
      .then(response => {
        setContacto(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Información de Contacto</h1>
      <p>Nombre: {contacto.nombre}</p>
      <p>Email: {contacto.email}</p>
      <p>Mensaje: {contacto.mensaje}</p>
    </div>
  );
}

export default App;