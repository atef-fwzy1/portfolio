import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ChangeMode from './context/contextMode';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChangeMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChangeMode>
  </BrowserRouter>
);


