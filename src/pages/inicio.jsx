import React from 'react';
import Header from '../components/header';
// import Nav from 'react-bootstrap/Nav';
import '../styles/inicio.scss';

const Inicio = () => {
  return (
    <>
      <Header />
      {/* <header>
        <h5>Yellow Dev</h5>
        <ul>
          <li><a href="/inicio">Inicio</a></li>
          <li><a href="http://">Nosotros</a></li>
          <li><a href="http://">Servicios</a></li>
          <li><a href="http://">Contacto</a></li>
        </ul>
      </header> */}
      <div className='splash'>
        <h1>Yellow Dev</h1>
      </div>
    </>
  );
};

export default Inicio;