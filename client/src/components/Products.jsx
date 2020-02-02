import React from 'react'
import './Products.scss'
import './responsive.css'
import axios from 'axios'

class Products extends React.Component { 

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.url = 'https://bastilify-api.herokuapp.com'
  }

  handleOrder(obj) {
    axios.post(`${this.url}/api/orders`)
    .then(response => this.setState({products: response.data}))
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get(`${this.url}/api/products`)
    .then(response => {
      if (this._isMounted) {
        this.setState({
          products: response.data
        })
      }
    })
    .catch(error => console.log(error))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {

    const defaultImg = 'https://i.pinimg.com/originals/23/6e/88/236e881c6fa2a21a2312ec9cd3415d67.png'

    /*
    if (this.state.products.map.imageLinks[0] = "NoImagePicture") {
      // eslint-disable-next-line no-unused-expressions
      <img src={defaultImg} />
    }
    */
  /*
  const Products = ({ products, history }) => {
    const handlePurchase = prod => () => {
      history.push('/checkout')
    }
  }
  */

 return this.state.products.map(prod => (
  <div className="product-positioning">
    <div className="product">
      <section>

            <h2>{prod.content[0].title}</h2>

          
            <p>{prod.content[0].shortDescription}</p>
        
          
            <h3>{prod.price.currency}</h3>

          
            <h3>{prod.price.value}</h3>
                      
        <button type="button" onClick={this.handleOrder}>
          PURCHASE
        </button>
      </section>

        <img id="img-products" src={defaultImg} />

    </div>
  </div>    
))

  /*
    return this.products.map(prod => (
      <div className="product-positioning">
        <div className="product" key={prod.id}>
          <section>
            <h2>{prod.content[0]}</h2>
            <p>{prod.desc}</p>
            <h3>{'$' + prod.price}</h3>
            <button type="button" onClick={this.handleOrder(prod)}>
              PURCHASE
            </button>
          </section>
          <img src={prod.img} alt={prod.name} />
        </div>
      </div>
    ))
    */
    }
}

export default Products