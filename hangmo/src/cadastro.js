//to run = npm start

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./cadastro.css";

function Cadastro() {
  return (
    <div className="App">
      <header>
        <h1 id="title">
          <span style={{ color: "black" }}>HANG</span>
          <span style={{ color: "white" }}>MO</span>
        </h1>
        <div class="buttons">
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </div>
      </header>

      <div id="cadastropage">
        <h2 style={{ color: "white" }}>Cadastro</h2>
        <input
          class="cadastro"
          type="email"
          placeholder="Digite seu e-mail..."
        />{" "}
        <br />
        <input
          class="cadastro"
          type="password"
          placeholder="Digite sua senha..."
        />{" "}
        <br />
        <Link to="/hangmo">
          <button id="entrarButton">ENTRAR</button>
        </Link> 
        <br />
        {/* <a>Esqueci minha senha</a> */}
        <button>G</button>
        <button>F</button>
      </div>
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
export default Cadastro;
