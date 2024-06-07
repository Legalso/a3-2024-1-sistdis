import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../img/Logo.png";
import img0 from "../img/0.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

function HangmanGame() {
  const [secretWord, setSecretWord] = useState("");
  const [themeSent, setThemeSent] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [theme, setTheme] = useState("");

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const images = [img0, img1, img2, img3, img4, img5, img6];

  const topPlayers = [
    { usuario: "Player", pontuacao: 100 },
    { usuario: "Usuário 2", pontuacao: 85 },
    { usuario: "Usuário 3", pontuacao: 80 },
    { usuario: "Usuário 4", pontuacao: 75 },
    { usuario: "Usuário 5", pontuacao: 70 },
    { usuario: "Usuário 6", pontuacao: 65 },
    { usuario: "Usuário 7", pontuacao: 60 },
    { usuario: "Usuário 8", pontuacao: 55 },
    { usuario: "Usuário 9", pontuacao: 50 },
    { usuario: "Usuário 10", pontuacao: 45 },
  ];

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
    if (guesses.length > 0) {
      const wordGuessed = secretWord
        .split("")
        .every((letter) => guesses.includes(letter));
      if (wordGuessed) {
        setWin(true);
        setGameOver(true);
      }
    }
  }, [guesses]);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await axios.get(
          "https://hangmo-game-ad894dbd8da1.herokuapp.com/WordGeneration"
        );
        setSecretWord(response.data.palavra);
      } catch (error) {
        console.error("Erro ao buscar palavra:", error);
      }
    };

    if (themeSent) {
      fetchWord();
    }
  }, [themeSent]);

  const handleThemeSubmit = async () => {
    // if (theme) {
    //   try {
    //     await axios.post(
    //       "https://hangmo-game-ad894dbd8da1.herokuapp.com/WordGeneration",
    //       { tema: theme }
    //     );
    //     setThemeSent(true);
    //   } catch (error) {
    //     console.error("Erro ao enviar tema:", error);
    //   }
    // }
    if (theme) {
      try {
        await axios.get(
          "https://hangmo-game-ad894dbd8da1.herokuapp.com/WordGeneration/prompt:" + theme,
          { tema: theme }
        );
        setThemeSent(true);
      } catch (error) {
        console.error("Erro ao enviar tema:", error);
      }
    }
  };

  return (
    <div className="hangman-game">
      <nav className="menu">
        <ul>
          <li>
            <a href="/Conta">Conta</a>
          </li>
          <li>
            <a href="/Ranking">Ranking</a>
          </li>
        </ul>
      </nav>
      <a href="./hangmogame">
        <img className="logo" id="logoHangmo" src={logo} alt="Logo hangmo" />{" "}
      </a>
      <div className="game-container">
        <div className="table-container">
          <h5>Top 10 players</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player, index) => (
                <tr key={index}>
                  <td>{player.usuario}</td>
                  <td>{player.pontuacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="game">
          {!themeSent ? (
            <p id="Enviar">Envie um tema para a IA para jogar o Hangmo!</p>
          ) : (
            <>
              <p id="tema">Tema: {theme}</p>
              <img src={images[errors]} alt={`Hangman step ${errors}`} />
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
            </>
          )}
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
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  onKeyDown={(event) => event.stopPropagation()}
                />
                <span id="hangman-theme-bar"></span>
                <label id="hangman-theme-label">
                  <span className="label-char" style={{ "--index": "0" }}>
                    {themeSent
                      ? "Altere o tema do jogo:"
                      : "Tema alimentado por IA"}
                  </span>
                </label>
              </div>
              <button id="send" type="submit" onClick={handleThemeSubmit}>
                <svg className="svgIcon" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="sidebar">
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
                Código do multijogador
              </span>
            </label>
          </div>
          <h5>Sua pontuação</h5>
          <div className="score-table-container">
            <table className="score-table">
              <tbody>
                <tr>
                  <td>Jogador:</td>
                  <td>Player</td>
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
