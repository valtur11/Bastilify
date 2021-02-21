import React from 'react';
import axios from 'axios';
import styles from '../styles/SignUp.module.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value })
    };

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        await axios.request({
            method: 'POST',
            url: 'https://bastilify-api.herokuapp.com/api/auth/signup',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data);
            if(res.data) {
                window.location.assign("/login");
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        const { username, email, password } = this.state;
        return(
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formtitle}>Bastilify Sign Up</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className={styles.username}>
                                <label htmlFor="username">Username: </label>
                                <input
                                    name="username"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={username}
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
                                <button type="submit" className={styles.button}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;