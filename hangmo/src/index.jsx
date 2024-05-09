import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import Cadastro from './cadastro';
import Hangmo from './hangmo';
import reportWebVitals from './reportWebVitals';
import Esqueci from './esqueci';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci" element={<Esqueci />} />
        <Route path="/hangmo" element={<Hangmo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);