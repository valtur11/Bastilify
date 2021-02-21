import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.scss';

class Login extends React.Component {

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formtitle}>Bastilify Login</div>
                        <form>
                            <div className={styles.username}>
                                <label htmlFor="username">Username: </label>
                                <input
                                    name="username"
                                    type="text"
                                    onChange={this.handleChange}
                                    placeholder="Username"
                                    minLength="3" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.email}>
                                <label htmlFor="email">Email: </label>
                                <input
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    minLength="3" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.password}>
                                <label htmlFor="password">Password: </label>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    placeholder="Password" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.createOrder}>
                                <button type="submit" className={styles.button}>Log In</button>
                            </div>
                            <div className={styles.lines}>
                              <div className={styles.line}></div>
                              <div className={styles.or}>or</div>
                              <div className={styles.line}></div>
                            </div>
                            <Link to="/signup" className={styles.a}><div className={styles.signup}>Sign Up</div></Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;