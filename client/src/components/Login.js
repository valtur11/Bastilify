import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        await axios.request({
            method: 'POST',
            url: 'http://localhost:8081/api/auth/signin',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(res => {
            console.log(res.data);
            if(res.data) {
                window.location.assign("/")
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {

        const { email, password } = this.state;
        return(
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formtitle}>Bastilify Login</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className={styles.email}>
                                <label htmlFor="email">Email: </label>
                                <input
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    value={email}
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
                                    value={password}
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