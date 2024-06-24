import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessesList from "../GuessesList/GuessesList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const isWon = guesses.includes(answer);
  const isDisabled = guesses.length >= NUM_OF_GUESSES_ALLOWED; // boolean value

  function handleAddGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessesList guesses={guesses} answer={answer} isWon={isWon} />
      <GuessInput handleAddGuess={handleAddGuess} isDisabled={isDisabled} />
    </>
  );
}

export default Game;
