import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./hangmo/login";
import Cadastro from "./hangmo/cadastro";
import Hangmo from "./hangmo/hangmo";
import reportWebVitals from "./reportWebVitals";
import Esqueci from "./hangmo/esqueci";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/hangmo/login" element={<Login />} />
        <Route path="/hangmo/cadastro" element={<Cadastro />} />
        <Route path="/hangmo/hangmo" element={<Hangmo />} />
        <Route path="/hangmo/esqueci" element={<Esqueci />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);

reportWebVitals();