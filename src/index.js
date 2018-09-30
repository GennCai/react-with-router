import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import history from './utils/history';

import App from './pages/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

const MainApp = (
  <HashRouter history={history}>
    <App />
  </HashRouter>
)

ReactDOM.render(MainApp, document.getElementById('root'));

registerServiceWorker();
