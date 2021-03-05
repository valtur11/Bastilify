import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import styles from '../styles/Form.module.scss';
import img from '../assets/apple-606761_1920.jpg';
const Cookies = require('js-cookie');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            shippingAddress: '',
            city: '',
            country: ''
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            shipping_address: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                phone: this.state.tel,
                address1: this.state.shippingAddress,
                city: this.state.city,
                country: this.state.country
            },
            email: this.state.email,
            line_items: this.props.products,
            total_cost: this.props.total
        }

        await axios.request({
            method: 'POST',
            url: 'http://localhost:8081/api/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`
            },
            data: data
        })
        .then(res => {
            console.log(res.data);
            if(res.data){
                //window.location.assign("/");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        //console.log(this.props.products);
        const { firstName, lastName, email, tel, shippingAddress, city, country } = this.state;

        const products = this.props.products.map(el => {
            return (
                <div key={el._id}>
                    <hr className={styles.hr} style={{ width: '62.5%', height: 1, backgroundColor: '#282828' }} />
                    <div className={styles.cart}>
                        <img src={img} alt="Computer" className={styles.img} />
                        <div className={styles.title}>{el.content[0].title}</div>
                        <div className={styles.quantity}><b>Quantity:</b> {el.quantityCart}</div>
                        <div className={styles.total}><b>Total:</b> {`${this.props.total} ${el.price.currency}`}</div>
                    </div>
                    <hr className={styles.hr} style={{ width: '62.5%', height: 1, backgroundColor: '#282828' }} />
                </div>
            )
        })

        return (
            <div>
                <div className={styles.allincart}>{products}</div>
                <div className={styles.wrapper}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formtitle}>Bastilify</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className={styles.firstName}>
                                <label htmlFor="firstName">First Name: </label>
                                <input
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={this.handleChange}
                                    placeholder="First name"
                                    minLength="2" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.lastName}>
                                <label htmlFor="lastName">Last Name: </label>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last name"
                                    minLength="3" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.email}>
                                <label htmlFor="email">Email: </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder="Email" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.tel}>
                                <label htmlFor="tel">Phone number: </label>
                                <input
                                    name="tel"
                                    type="tel"
                                    value={tel}
                                    onChange={this.handleChange}
                                    placeholder="Phone number"
                                    minLength="7"
                                    maxLength="15" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.address}>
                                <label htmlFor="shippingAddress">Shipping address: </label>
                                <input
                                    name="shippingAddress"
                                    type="text"
                                    value={shippingAddress}
                                    onChange={this.handleChange}
                                    placeholder="Shipping address"
                                    minLength="5"
                                    required >
                                </input>            
                            </div>
                            <div className={styles.city}>
                                <label htmlFor="city">City: </label>
                                <input
                                    name="city"
                                    type="text"
                                    value={city}
                                    onChange={this.handleChange}
                                    placeholder="City"
                                    required >
                                </input>            
                            </div>
                            <div className={styles.country}>
                                <label htmlFor="country">Country: </label>
                                <input
                                    name="country"
                                    type="text"
                                    value={country}
                                    onChange={this.handleChange}
                                    placeholder="Country"
                                    required >
                                </input>            
                            </div>
                            <div className={styles.createOrder}>
                                <button type="submit" className={styles.button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.addedProducts,
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps)(Form);