import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./hangmo/App";
import Login from "./hangmo/login";
import Cadastro from "./hangmo/cadastro";
import Hangmo from "./hangmo/hangmo";
import reportWebVitals from "./reportWebVitals";
import Esqueci from "./hangmo/esqueci";
import { Navigate } from "react-router-dom";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/hangmo/login" element={<Login />} />
        <Route path="/hangmo/app" element={<App />} />
        <Route path="/hangmo/cadastro" element={<Cadastro />} />
        <Route path="/hangmo/esqueci" element={<Esqueci />} />
        <Route path="/hangmo/hangmo" element={<Hangmo />} />
        <Route path="*" element={<Navigate to="/hangmo/login" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);