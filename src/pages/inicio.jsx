import React from 'react';
import Header from '../components/header';
// import Nav from 'react-bootstrap/Nav';
import '../styles/inicio.scss';

const Inicio = () => {
  return (
    <>
      <Header />
      <div className='splash'>
        <h1>Yellow Dev</h1>
      </div>
    </>
  );
};

export default Inicio;