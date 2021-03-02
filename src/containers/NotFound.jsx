import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Pagina no encontrada</h1>
      <p>Por favor regresa al Home</p>
      <Link to='/'>Llevame al Home</Link>
    </>
  );
};

export default NotFound;
