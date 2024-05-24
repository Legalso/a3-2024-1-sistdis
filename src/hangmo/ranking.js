// to run = npm start
// to get html requests axios

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import "./login.css";
import "./hangmo";
import logo from "../img/Logo.png";

function Ranking() {
  React.useEffect(() => {
    document.title = "HANGMO - Ranking";
  }, []);
  return (
    <div className="App">
      <a href="./hangmo/hangmo">
        <img class="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container">
        <div id="loginpage">


        </div>
      </div>
      <footer>
        <p>
          Trabalho de conclusão do primeiro semestre de 2024 para as disciplinas
          de Sistemas Distribuídos e Mobile, Usabilidade, desenvolvimento web,
          mobile e jogos - Universidade São Judas Tadeu (01/24)
        </p>
      </footer>
    </div>
  );
}
export default Ranking;
