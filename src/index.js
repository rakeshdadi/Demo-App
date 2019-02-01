import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.__myapp_container = document.getElementById('app');

ReactDOM.render(<App />, window.__myapp_container);
