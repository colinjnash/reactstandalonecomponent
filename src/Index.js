//To be used as parent injection point for React Testing Purposes
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/style.css';

ReactDOM.render(<App />, document.querySelector('#container'));