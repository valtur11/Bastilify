import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App.jsx'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faPhone);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();