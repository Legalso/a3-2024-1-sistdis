//to run = npm start

import React from "react";
//import { Link } from "react-router-dom";
import "./App.css";

function Hangmo() {
  return (
    <div className="App">
      <header>
        <h1 id="title">
          <span style={{ color: "black" }}>HANG</span>
          <span style={{ color: "white" }}>MO</span>
        </h1>
        <div class="buttons"></div>
      </header>

      <footer>
        <p>
          A3 do primeiro semestre de 2024 para as disciplinas de Sistemas
          distribuídos e mobile e de Usabilidade, desenvolvimento web, mobile e
          jogos - Universidade São Judas Tadeu
        </p>
      </footer>
    </div>
  );
}
export default Hangmo;
