//To be used as parent injection point for React Testing Purposes
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#container'));