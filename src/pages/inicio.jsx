import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/header';
// import Nav from 'react-bootstrap/Nav';
import img1 from '../img/dev-img2.png';
import styles from '../styles/Inicio.module.scss';
import { FaRegLightbulb } from 'react-icons/fa';

const Inicio = () => {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <Row>    
            <Col sm={12} md={7} lg={6} className={styles.hero__container__left}>
              <h1>Agencia Digital de Desarrollo</h1>
              <p>Llevamos a cabo tus ideas  <FaRegLightbulb/></p>
              <button className={styles.hero__container__left__btn1}>
                <a href='#'>Echa un vistazo</a>
              </button>
              <button className={styles.hero__container__left__btn2}>Comienza un proyecto</button>
            </Col>
            <Col className={styles.hero__container__right}>
              <img 
                src={img1} 
                alt="team of developers"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Inicio;