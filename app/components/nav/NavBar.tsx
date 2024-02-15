import React from 'react';
import Image from 'next/image';
import logo from '/public/logo.jpg';
import searchuser from '/public/searchuser.png';
import styles from './navbar.module.css';
import burger from '/public/burger.png';

const NavBar: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.NavBar}>
      <div className={styles['logo-container']}>
          <Image src={logo} width= {135} height={135} alt='logo'/>
      </div>


      <div className={styles['search-bar']}>
          <Image src={searchuser} width= {306} height={50} alt='search-bar'/>
      </div>
    </nav>

    <div className={styles['burger-menu']} >
          <Image src={burger} width={50} height={50} alt='burger-menu' />
        </div>

   

    </div>

  );
};

export default NavBar