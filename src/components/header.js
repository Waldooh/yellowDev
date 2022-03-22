import React, { useState } from 'react';
import styles from '../styles/_header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h4 className={styles.header__content__logo}>{'<Yellow Dev>'}</h4>

        <nav className={`${styles.header__content__nav} ${menuOpen ? styles.isMenu : ""}`}>
          <ul>
            <li><a href='#'>Servicios</a></li>
            <li><a href='#'>Portafolio</a></li>
            <li><a href='#'>Planes</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </nav>
        
        <div className={styles.header__content__toggle}>
          {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler} style={{color: 'white'}} />}
        </div>
      </div>
    </header>
  );
};

export default Header;