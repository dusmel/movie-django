import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/App.scss';
import Routes from './routes/routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
