//to run = npm start

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Pagina1() {
  return (
    <div className="App">
      <header>
        <h1 id = "title">HANGMO</h1>
        <div class="buttons">
          <Link to="/App">
            <button>Home</button>
          </Link>
          <Link to="/pagina1">
            <button>Página 1</button>
          </Link>
          <Link to="/pagina2">
            <button>Página 2</button>
          </Link>
        </div>
      </header>
      <div id="container">
        <div id="black-square" />
        <p id="initial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          orci elit, lobortis dignissim tincidunt volutpat, aliquam at arcu.
          Quisque finibus nisl at orci volutpat condimentum. Phasellus ut
          bibendum lacus. Vivamus hendrerit sodales ante, sit amet vestibulum
          velit sodales a. Nullam tincidunt arcu nunc, a suscipit mi facilisis
          sit amet. Nulla facilisi. Nullam a accumsan tellus. Praesent efficitur
          elit quis velit pharetra tincidunt. Cras tempor eleifend libero ut
          rutrum. Ut vel lacus in purus consequat auctor. Maecenas in metus
          iaculis, dictum erat eu, blandit quam. Morbi egestas neque in neque
          mollis, dignissim tincidunt justo tempus. Aenean bibendum lorem
          lectus, vitae euismod tellus convallis vel. Nullam rutrum sapien
          tellus, vitae suscipit felis volutpat nec. Nunc eu efficitur est, a
          bibendum ex. Sed iaculis erat eu lorem consequat feugiat.
        </p>
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
export default Pagina1;
