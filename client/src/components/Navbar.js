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
        if(window.innerWidth < 660){
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
                <Link className={styles.alogo} href="/"><div className={styles.logo}>Bastilify</div></Link>
                <div className={styles.navlinks} id="nav">
                    <FontAwesomeIcon onClick={closeNav} className={styles.times} icon="times" />
                    <Link className={styles.a} href="/"><div className={styles.links}>Home</div></Link>
                    <Link className={styles.a} href="/products"><div className={styles.links}>Products</div></Link>
                    <Link className={styles.a} href="/test"><div className={styles.links}>Test</div></Link>
                    <Link className={styles.a} href="/test"><div className={styles.links}>Test</div></Link>
                </div>
                <FontAwesomeIcon onClick={navSlide} className={styles.burger} icon="bars" />
              </div>
            </div>
        )
    }
}

export default Navbar