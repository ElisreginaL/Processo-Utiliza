// index.jsx (React 18 com createRoot)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importando a nova versão de ReactDOM
import './index.scss'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
