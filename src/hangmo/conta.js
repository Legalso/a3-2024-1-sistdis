import React from 'react';
import logo from '../img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Conta() {
  React.useEffect(() => {
    document.title = 'HANGMO - Conta';
  }, []);

  return (
    <div className="App">
      <a href="./hangmo/hangmo">
        <img className="logo" src={logo} alt="Logo hangmo" />
      </a>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2>Informações da Conta</h2>
            <p>Nome: </p>
            <p>Email: </p>
            <p>Data de Criação: </p>
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