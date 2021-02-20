import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction.js';
import { addToCart } from '../redux/actions/cartActions.js';
import { bindActionCreators } from 'redux';
import styles from '../styles/Products.module.scss';
import img from '../assets/apple-606761_1920.jpg';

class Products extends React.Component { 
  componentDidMount() {
    this.props.fetchProducts();
  };

  handleClick = (_id) => {
    this.props.addToCart(_id);
  }
  render() {
    const products = this.props.products.map(el => {
      return (
        <div className={styles.product} key={el._id}>
          <img src={img} alt="Computer" className={styles.img} />
          <div className={styles.titledesc}>
            <div className={styles.title}>{el.content[0].title}</div>
            <div className={styles.desc}>{el.content[0].shortDescription}</div>
          </div>
          <hr style={{ width: '40%', height: 1, backgroundColor: '#282828' }} />
          <div className={styles.price}><b>Price:</b> {`${el.price.value} ${el.price.currency}`}</div>
          <div className={styles.instock}><b>In stock:</b> {`${el.isAvailable}`}</div>
          <button className={styles.button} onClick={() => { this.handleClick(el._id) }}>Add to cart</button>
        </div>
      )
    })
    return(
      <div>
        <div className={styles.allproducts}>{products}</div>
      </div>
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: bindActionCreators(fetchProducts, dispatch),
    addToCart: (_id) => { dispatch(addToCart(_id)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);