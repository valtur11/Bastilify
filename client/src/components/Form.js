import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/cartActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Form.module.scss';
import img from '../assets/apple-606761_1920.jpg';

class Form extends React.Component {
    handleRemove = (_id) => {
        this.props.removeProduct(_id);
    };

    render() {
        const products = this.props.products.map(el => {
            return (
                <div key={el._id}>
                    <hr className={styles.hr} style={{ width: '62.5%', height: 1, backgroundColor: '#282828' }} />
                    <div className={styles.cart}>
                        <img src={img} alt="Computer" className={styles.img} />
                        <div className={styles.title}>{el.content[0].title}</div>
                        <div className={styles.quantity}><b>Quantity:</b> {el.quantityCart}</div>
                        <div className={styles.total}><b>Total:</b> {`${this.props.total} ${el.price.currency}`}</div>
                        <FontAwesomeIcon className={styles.icon} onClick={() => { this.handleRemove(el._id) }} icon="times" />
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
                        <form>
                            <div className={styles.firstName}>
                                <label htmlFor="firstName">First Name: </label>
                                <input
                                    name="text"
                                    type="text"
                                    placeholder="First name"
                                    minLength="2" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.lastName}>
                                <label htmlFor="lastName">Last Name: </label>
                                <input
                                    name="text"
                                    type="text"
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
                                    placeholder="Email" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.tel}>
                                <label htmlFor="tel">Phone number: </label>
                                <input
                                    name="tel"
                                    type="tel"
                                    placeholder="Phone number"
                                    minLength="7"
                                    maxLength="15" 
                                    required >
                                </input>            
                            </div>
                            <div className={styles.address}>
                                <label htmlFor="address">Shipping address: </label>
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Shipping address"
                                    minLength="5"
                                    required >
                                </input>            
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (_id) => { dispatch(removeProduct(_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);