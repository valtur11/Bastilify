import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.js';
import Products from './components/Products.js';
import Navbar from './components/Navbar.js'

const App = () => {
    return (
      <div>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/products" component={Products} />
            </Switch>
        </Router>
      </div>
    )
  }
  
  export default App;