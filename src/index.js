import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scene from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Scene />
  </React.StrictMode>
);
reportWebVitals();