// to run = npm start
// to get html requests axios

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import "./login.css";
import "./hangmo";
import logo from "./img/Logo.png";
import googlelogo from "./img/google.png";
import facebooklogo from "./img/facebook.webp";

function Login() {
  return (
    <div className="App">
      {/* <header>
      </header> */}
      {/* <h1 id="title">
        <span style={{ color: "black" }}>HANG</span>
        <span style={{ color: "orange" }}>MO</span>
      </h1> */}

      <a href="./login">
        <img id="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div id="container">
        <div id="loginpage">
          <h2>Login</h2>
          <input
            class="login"
            type="email"
            placeholder="Digite seu e-mail..."
          />{" "}
          <br />
          <h2>Senha</h2>
          <input
            class="login"
            type="password"
            placeholder="Digite sua senha..."
          />{" "}
          <br />
          <a>Esqueci minha senha</a>
          <a>Cadastrar</a>
          <br />
          <Link to="/hangmo">
            <button id="entrarButton">Login</button>
          </Link>
          <br />
          <div id = 'socialLogoImg'>
            <a href="./login">
              <img class="sociallogo" src={googlelogo} alt="Logo Google" />{" "}
            </a>
            {/* <img id = 'anchor'></img> */}
            <a href="./login">
              <img class="sociallogo" src={facebooklogo} alt="Logo Facebook" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* <div class="buttons">
        <Link to="/cadastro">
          <button>CADASTRO</button>
        </Link>
      </div> */}
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
