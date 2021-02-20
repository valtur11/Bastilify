import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faBars, faTimes);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister();
