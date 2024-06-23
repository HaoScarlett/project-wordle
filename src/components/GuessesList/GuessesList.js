import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses, answer, isWon}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess
          key={rowIndex}
          value={guesses[rowIndex]}
          answer={answer}
          isWon={isWon} // pass a boolean instead of fn
          numOfGuess={guesses.length}
        />
      ))}
    </div>
  );
}

export default GuessesList;
