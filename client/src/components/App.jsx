import React, { useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Products from './Products.jsx'
import Checkout from './Checkout.jsx'
import { products } from '../products'
import Navbar from '../Navbar'
import ContainerTop from '../ContainerTop'
import Footer from '../Footer'

const history = createBrowserHistory()

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div>
    <ContainerTop />
    <React.Fragment>
      <Navbar brand="Bastilify" />
    </React.Fragment>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Products
              products={products}
              selectProduct={setSelectedProduct}
              history={history}
            />
          )}
        />
        <Route
          path="/checkout"
          render={() => (
            <Checkout selectedProduct={selectedProduct} history={history} />
          )}
        />
      </Switch>
    </Router>
    <Footer />
    </div>
  )
}

export default App