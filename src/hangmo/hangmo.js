import React, { useState, useEffect } from "react";
import logo from "../img/Logo.png";
import img0 from "../img/0.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

function HangmanGame() {
  const secretWord = "apple"; // You can change this to be any word you want
  const [guesses, setGuesses] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  const images = [img0, img1, img2, img3, img4, img5, img6];

  const alphabetRows = [];
  for (let i = 0; i < alphabet.length; i += 7) {
    alphabetRows.push(alphabet.slice(i, Math.min(i + 7, alphabet.length)));
  }

  const handleGuess = (letter) => {
    if (gameOver || guesses.includes(letter)) return;

    setGuesses((prevGuesses) => [...prevGuesses, letter]);

    if (!secretWord.includes(letter)) {
      setErrors((prevErrors) => {
        const newErrors = prevErrors + 1;
        if (newErrors === 6) {
          setGameOver(true);
        }
        return newErrors;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key.length === 1 && key >= "a" && key <= "z") {
        handleGuess(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guesses, gameOver]);

  
  useEffect(() => {
    const checkWin = () => {
      if (secretWord.split("").every((letter) => guesses.includes(letter))) {
        setGameOver(true);
        setWin(true);
      }
    };

    checkWin();
  }, [guesses, secretWord]);

  const displayWord = secretWord
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div className="hangman-game">
      <nav className="menu">
        <ul>
          <li>
            <a href="/conta">Conta</a>
          </li>
          <li>
            <a href="/ranking">Ranking</a>
          </li>
        </ul>
      </nav>
      <a href="../hangmo/hangmo">
        <img className="logo" id="logoHangmo" src={logo} alt="Logo hangmo" />{" "}
      </a>
      <div className="game-container">
        <div className="table-container">
          <h5>Top 10 Hangmo players</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td>Usuário {index + 1}</td>
                  <td>{Math.floor(Math.random() * 100)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="game">
          <p id="tema">Tema: Apple</p>
          {/*RECEBER TEMA DA IA*/}
          <img src={images[errors]} alt={`Hangman step ${errors}`} />
          <p>{displayWord}</p>
          {gameOver && <p>{win ? "Você ganhou!" : "Você perdeu!"}</p>}
          <div id="alphabet-container">
            <div id="alphabet">
              {alphabetRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`alphabet-row ${rowIndex === 3 ? "last-row" : ""}`}
                >
                  {row.split("").map((letter) => (
                    <button
                      key={letter}
                      className="letter"
                      onClick={() => handleGuess(letter)}
                      disabled={guesses.includes(letter) || gameOver}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="hangman-theme"></label> <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div id="hangman-theme-group" style={{ paddingRight: "20px" }}>
                <input
                  required=""
                  type="text"
                  id="hangman-theme"
                  onKeyDown={(event) => event.stopPropagation()}
                />
                <span id="hangman-theme-bar"></span>
                <label id="hangman-theme-label">
                  <span className="label-char" style={{ "--index": "0" }}>
                    Tema (alimentado por IA)
                  </span>
                </label>
              </div>
              <button id="send" type="submit">
                <svg class="svgIcon" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <h5>Sua pontuação</h5>
          <div class="score-table-container">
            <table class="score-table">
              <tbody>
                <tr>
                  <td>Jogador:</td>
                  <td>Nome</td>
                </tr>
                <tr>
                  <td>Pontuação:</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HangmanGame;
