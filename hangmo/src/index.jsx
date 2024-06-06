import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import Cadastro from './cadastro';
import Hangmo from './hangmo';
import reportWebVitals from './reportWebVitals';
import Conta from './conta';
import Ranking from './ranking';
import PrivateRoute from './privateRoute'; // Importe o PrivateRoute

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/cadastro" element={<Cadastro />} />
        <PrivateRoute path="/hangmo" element={<Hangmo />} />
        <PrivateRoute path="/conta" element={<Conta />} />
        <PrivateRoute path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);