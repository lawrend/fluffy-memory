import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import BrowserHistory from 'history/createBrowserHistory';
import App from './App';
import 'semantic-ui-css/semantic.css';
import './index.css';
// commenting out for activeadmin
// import * as serviceWorker from './serviceWorker';

const history = BrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
