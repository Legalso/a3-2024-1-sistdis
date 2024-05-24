import React from "react";
import logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Conta() {
  React.useEffect(() => {
    document.title = "HANGMO - Conta";
  }, []);

  return (
    <div className="App">
      <a href="./hangmo/hangmo">
        <img className="logo" src={logo} alt="Logo hangmo" />
      </a>

      <div className="container">
        <div className="row">
          <div
            className="col-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Informações da Conta</h2>
            <label>Nome de usuário: </label>
            <input
              className="infom"
              type="text"
              placeholder="Escreva seu nome aqui"
            />
            <label>Email: </label>
            <input
              className="infom"
              type="email"
              placeholder="xpto@example.com"
            />
            <label>Aniversário: </label>
            <input className="infom" type="date" />
            <label>Cor favorita: </label>
            <input className="infom" type="color" />
            <a href="/mudar-senha">Mudar senha</a>
            <button type="submit">Salvar</button>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Trabalho de conclusão do primeiro semestre de 2024 para as disciplinas
        </p>
      </footer>
    </div>
  );
}

export default Conta;
