import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, addQuantity, subQuantity } from '../redux/actions/cartActions.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from '../styles/Cart.module.scss';

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
                <div className={styles.cart} key={el._id}>
                    
                </div>
            )
        })
        return(
            <div>
                <div>{products}</div>
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