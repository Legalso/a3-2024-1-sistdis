import React, { useState } from 'react';

function HangmanGame() {
  const secretWord = 'apple'; // You can change this to be any word you want
  const [guesses, setGuesses] = useState([]);
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');

  const handleGuess = (letter) => {
    setGuesses([...guesses, letter]);
  };

  const displayWord = secretWord
    .split('')
    .map((letter) => (guesses.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div>
      <h1>Hangman Game -- HANGMO</h1>
      <p>{displayWord}</p>
      <div id="alphabet">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="letter"
            onClick={() => handleGuess(letter)}
            disabled={guesses.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HangmanGame;