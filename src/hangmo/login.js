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

  // Comentando o código relacionado aos endpoints de login
  // const handleLogin = async () => {
  //   try {
  //     // Fazer solicitação POST para endpoint de login
  //     // await axios.post('url_do_endpoint', { email, password });
  //     // Redirecionar o usuário após o login
  //   } catch (error) {
  //     console.error("Erro ao fazer login:", error);
  //   }
  // };

  // const handleGetLogin = async () => {
  //   try {
  //     // Fazer solicitação GET para verificar o login do usuário
  //     // await axios.get('url_do_endpoint');
  //     // Se o login for válido, redirecionar o usuário
  //     // Caso contrário, exibir uma mensagem de erro
  //   } catch (error) {
  //     console.error("Erro ao verificar login:", error);
  //   }
  // };

  return (
    <div className="App">
      <a href="./login">
        <img className="logo" src={logo} alt="Logo hangmo" />{" "}
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
        {/* <button id="entrarButton" onClick={handleLogin}>Entrar</button> */}
        <Link to="/hangmogame">
          <button id="entrarButton">Entrar</button>
        </Link>
        <div id="forgetPassAndCreate">
          <a href="./esqueci">Esqueci minha senha</a>
          <a href="./cadastro">Cadastrar</a>
        </div>
        <br />
        <div id="socialLogoImg">
          <a
            href="./hangmo/hangmo"
            onClick={(e) => {
              e.preventDefault();
              alert("Logar com o Google ainda está em desenvolvimento");
            }}
          >
            <img className="sociallogo" src={googlelogo} alt="Logo Google" />{" "}
          </a>
          <a
            href="./hangmo/login"
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
          de Sistemas Distribuídos e Mobile, Usabilidade, desenvolvimento web,
          mobile e jogos - Universidade São Judas Tadeu (01/24)
        </p>
      </footer>
    </div>
  );
}
export default Login;
