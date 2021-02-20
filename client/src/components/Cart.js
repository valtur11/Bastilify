import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, addQuantity, subQuantity } from '../redux/actions/cartActions.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Cart.module.scss';
import img from '../assets/apple-606761_1920.jpg';

class Cart extends React.Component {
    handleRemove = (_id) => {
        this.props.removeProduct(_id);
    };

    handleAddQuantity = (_id) => {
        this.props.addQuantity(_id);
    };

    handleSubQuantity = (_id) => {
        this.props.subQuantity(_id);
    };

    render() {
        const products = this.props.products.map(el => {
            return (
                <div key={el._id}>
                    <hr style={{ width: '85%', height: 1, backgroundColor: '#282828' }} />
                    <div className={styles.cart}>
                        <img src={img} alt="Computer" className={styles.img} />
                        <div className={styles.title}>{el.content[0].title}</div>
                        <div className={styles.toggle}>
                            <FontAwesomeIcon className={styles.icon} onClick={() => { this.handleSubQuantity(el._id) }} icon="chevron-down" />
                            <div className={styles.quantity}><b>Quantity:</b> {el.quantityCart}</div>
                            <FontAwesomeIcon className={styles.icon} onClick={() => { this.handleAddQuantity(el._id) }} icon="chevron-up" />
                        </div>
                        <div className={styles.total}><b>Total:</b> {`${this.props.total} ${el.price.currency}`}</div>
                        <Link to="/form"><button className={styles.button}>Proceed</button></Link>
                    </div>
                    <hr style={{ width: '85%', height: 1, backgroundColor: '#282828' }} />
                </div>
            )
        })
        return(
            <div>               
                <div className={styles.allincart}>{products}</div>
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
        removeProduct: (_id) => { dispatch(removeProduct(_id)) },
        addQuantity: (_id) => { dispatch(addQuantity(_id)) },
        subQuantity: (_id) => { dispatch(subQuantity(_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);