import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.js';

const App = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    )
  }
  
  export default App;