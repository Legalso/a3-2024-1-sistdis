import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();