import React from 'react';
import styles from '../styles/Footer.module.scss';

class Footer extends React.Component {
    render(){
        return(
            <div className={styles.main}>
                <div className={styles.footer}> 
                    <div className={styles.text}><small>Copyright © 2021 Bastilify, Inc. All rights reserved. Terms of service</small></div>
                </div>
            </div>
        )
    }
}

export default Footer