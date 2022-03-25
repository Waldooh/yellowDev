import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/header';
// import Nav from 'react-bootstrap/Nav';
import img1 from '../img/dev-img1.png';
// import img2 from '../img/dev-img2.png';
import img3 from '../img/web-banner.png';
import styles from '../styles/Inicio.module.scss';

// iconos
import { FaRegLightbulb } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';
import { BiCodeAlt } from 'react-icons/bi';
import { IoMegaphoneOutline } from 'react-icons/io5';
// import { BiVideoRecording } from 'react-icons/bi';

const Inicio = () => {
  return (
    <>
      <Header />

      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <Row>    
            <Col sm={12} md={7} lg={6} className={styles.hero__container__left}>
              <h1>Agencia Digital de Desarrollo</h1>
              <p>Realizamos tus ideas  <FaRegLightbulb/></p>
              <button className={styles.hero__container__left__btn1}>
                <a href='#'>Echa un vistazo</a>
              </button>
              <button className={styles.hero__container__left__btn2}>Comienza un proyecto</button>
            </Col>
            <Col className={styles.hero__container__right}>
              <img 
                src={img1} 
                alt="developers team"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.advertising}>
        <Row className={styles.advertising__content}>
          <Col sm={12} md={6} lg={6} className={styles.advertising__content__left}>
            <img 
              src={img3} 
              alt="developers work"
            />
            <div className={styles.advertising__content__left__poligon}></div>
          </Col>
          <Col className={styles.advertising__content__right}>
            <h2>Aprovecha la oportunidad de tener presencia digital</h2><br />
            <p>Se parte de la nueva economía digitalizando tu negocio a través de una págica web o aplicación.</p>
          </Col>
        </Row>
      </div>

      <div className={styles.services}>
        <h2 className={styles.services__title}>Lo que hacemos</h2>
        <Container>
          <Row className={styles.services__content}>
            <Col sm={12} md={3} lg={3} className={styles.services__content__item}>
              <div className={styles.services__content__item__titleText}>
                {/* <BiVideoRecording className={styles.services__content__item__box__icon}/> */}
                <h3>Hacemos tus ideas realidad</h3>
                <br /><br />
                <p>Somos el aliado que necesitas para digitalizar tu negocio.</p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3} className={styles.services__content__item}>
              <div className={styles.services__content__item__box}>
                <RiDashboardLine className={styles.services__content__item__box__icon}/>
                <h3>Aplicaciones Móviles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3} className={styles.services__content__item}>
              <div className={styles.services__content__item__box}>
                <BiCodeAlt className={styles.services__content__item__box__icon}/>
                <h3>Desarrollo Web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3} className={styles.services__content__item}>
              <div className={styles.services__content__item__box}>
                <IoMegaphoneOutline className={styles.services__content__item__box__icon}/>
                <h3>Marketing Digital</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Inicio;