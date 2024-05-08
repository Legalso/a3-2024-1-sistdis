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
      <a href="./login">
        <img id="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div id="container">
        <div id="loginpage">
          <h2>Login</h2>
          <div>
            <input
              className="login"
              type="email"
              placeholder="Digite seu e-mail..."
            />
          </div>
          <h2>Senha</h2>
          <div>
            <input
              className="login"
              type="password"
              placeholder="Digite sua senha..."
            />
          </div>
        </div>
        <Link to="/hangmo">
          <button id="entrarButton">Login</button>
        </Link>
        <div id="forgetPassAndCreate">
          <a href="./login">Esqueci minha senha</a>
          <a href="./login">Cadastrar</a>
        </div>
        <br />
        <div id="socialLogoImg">
          <a href="./login">
            <img className="sociallogo" src={googlelogo} alt="Logo Google" />{" "}
          </a>
          <a href="./login">
            <img
              className="sociallogo"
              src={facebooklogo}
              alt="Logo Facebook"
            />{" "}
          </a>
        </div>
        <br />
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
