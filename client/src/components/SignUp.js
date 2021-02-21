import React from 'react';
import styles from '../styles/SignUp.module.scss';

class SignUp extends React.Component {

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formtitle}>Bastilify Sign Up</div>
                        <form>
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