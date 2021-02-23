import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faShoppingCart, faChevronUp, faChevronDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faBars, faTimes, faShoppingCart, faChevronUp, faChevronDown, faUserCircle);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();