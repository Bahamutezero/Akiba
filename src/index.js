import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Head.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));
