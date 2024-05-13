//to run = npm start
//https://youtu.be/82-Gnw-rBiQ?t=917


import React, { useState } from 'react';
import step0 from '../img/0.jpg';
import step1 from '../img/1.jpg';
import step2 from '../img/2.jpg';
import step3 from '../img/3.jpg';
import step4 from '../img/4.jpg';
import step5 from '../img/5.jpg';
import step6 from '../img/6.jpg';
import { randomWord } from '../hangmo/Words'; // Certifique-se de que o caminho para o arquivo randomWord.js está correto

const images = [step0, step1, step2, step3, step4, step5, step6];

function Hangmo() {
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomWord());

  return (
    <div className="App">
      <header>
        <h1 id="title">
          <span style={{ color: "black" }}>HANG</span>
          <span style={{ color: "red" }}>MO</span>
        </h1>
        <div class="buttons"></div>
      </header>
      
      <div className='Hangman container'>
        {/* <p>{answer}</p> */}
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
export default Hangmo;
