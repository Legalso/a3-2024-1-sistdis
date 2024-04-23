//to run = npm start

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./login.css";

function Login() {
  return (
    <div className="App">
      <header>
        <h1 id="title">
          <span style={{ color: "black" }}>HANG</span>
          <span style={{ color: "white" }}>MO</span>
        </h1>
        <div class="buttons">
          <Link to="/app">
            <button>HOME</button>
          </Link>
          <Link to="/cadastro">
            <button>CADASTRO</button>
          </Link>
        </div>
      </header>

      <div id="loginpage">
        <h2 style={{ color: "white" }}>Login</h2>
        <input
          class="login"
          type="email"
          placeholder="Digite seu e-mail..."
        />{" "}
        <br />
        <input
          class="login"
          type="password"
          placeholder="Digite sua senha..."
        />{" "}
        <br />
        <button id="entrarButton">ENTRAR</button> <br />
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
export default Login;
