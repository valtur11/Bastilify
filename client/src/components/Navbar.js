/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {
    render(){
      const navSlide = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '250px';
        const main = document.getElementsByTagName('body')[0];
        main.style.marginRight = '250px';
        if(window.innerWidth < 1000){
            main.style.marginRight = '0';
        }
      };
      const closeNav = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '0';
        const main = document.getElementsByTagName('body')[0];
        main.style.marginRight = '0';
      };
        return(
            <div>
              <div className={styles.navbar}>
                <Link to="/" className={styles.alogo}><div className={styles.logo}>Bastilify</div></Link>
                <div className={styles.navlinks} id="nav">
                    <FontAwesomeIcon onClick={closeNav} className={styles.times} icon="times" />
                    <Link to="/" className={styles.a} ><div className={styles.links}>Home</div></Link>
                    <Link to="/products" className={styles.a} ><div className={styles.links}>Products</div></Link>
                    <Link to="/test" className={styles.a} ><div className={styles.links}>Test</div></Link>
                    <a href="https://bastilify-admin.herokuapp.com/" target="_blank" className={styles.a}><div className={styles.links}>Admin panel</div></a>
                </div>
                <div className={styles.righticons}>
                  <FontAwesomeIcon className={styles.cart} icon="shopping-cart" />
                  <FontAwesomeIcon onClick={navSlide} className={styles.burger} icon="bars" />
                </div>
              </div>
            </div>
        )
    }
}

export default Navbar