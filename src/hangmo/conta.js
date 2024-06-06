import React, { useState, useEffect } from "react";
import logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
const { faker } = require("@faker-js/faker/locale/pt_BR");

function Conta() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");

  useEffect(() => {
    document.title = "HANGMO - Conta";
    setUsername(faker.internet.userName());
    setEmail(faker.internet.email());
    setCell(faker.phone.phoneFormats);
  }, []);

  return (
    <div className="App">
      <a href="./hangmogame">
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
              value={username}
            />
            <label>Email: </label>
            <input
              className="infom"
              type="email"
              placeholder="xpto@example.com"
              value={email}
            />
            <label>Celular: </label>
            <input
              className="infom"
              type="tel"
              placeholder="Insira seu número de celular"
              value={cell}
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
    </div>
  );
}

export default Conta;
