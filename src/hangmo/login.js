// to run = npm start
// to get html requests axios

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import "./login.css";
import "./hangmo";
import logo from "../img/Logo.png";
import googlelogo from "../img/google.png";
import facebooklogo from "../img/facebook.webp";

function Login() {
  React.useEffect(() => {
    document.title = "HANGMO - Login";
  }, []);
  return (
    <div className="App">
      <a href="./login">
        <img id="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container">
        <div id="loginpage">
          <h2>E-mail</h2>
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
          <button id="entrarButton">Entrar</button>
        </Link>
        <div id="forgetPassAndCreate">
          <a href="./hangmo/esqueci">Esqueci minha senha</a>
          <a href="./hangmo/cadastro">Cadastrar</a>
        </div>
        <br />
        <div id="socialLogoImg">
          <a href="./hangmo/login"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Logar com o Facebook ainda está em desenvolvimento");
                      }}>
            <img className="sociallogo" src={googlelogo} alt="Logo Google" />{" "}
          </a>
          <a
            href="./login"
            onClick={(e) => {
              e.preventDefault();
              alert("Logar com o Facebook ainda está em desenvolvimento");
            }}
          >
            <img
              className="sociallogo"
              src={facebooklogo}
              alt="Logo Facebook"
            />
          </a>
        </div>
        <br />
      </div>
      <footer>
        <p>
          Trabalho de conclusão do primeiro semestre de 2024 para as disciplinas
          de Sistemas Usabilidade, desenvolvimento web, mobile e jogos -
          Universidade São Judas Tadeu (01/24)
        </p>
      </footer>
    </div>
  );
}
export default Login;
