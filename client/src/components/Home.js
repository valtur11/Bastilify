import React from 'react';
import styles from '../styles/Home.module.scss';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className={styles.title}>Bastilify</div>
                <div className={styles.subtitle}>The place where technology happens!</div>
            </div>
        )
    }
}

export default Home;