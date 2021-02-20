import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import MainPage from './components/MainPage.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import Form from './components/Form.js';
import PageNotFound from './components/PageNotFound.js';

const App = () => {
    return (
      <div>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
      </div>
    )
  }
  
  export default App;