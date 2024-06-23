import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess
          key={rowIndex}
          value={guesses[rowIndex]}
          answer={answer}
          isWon={guesses[rowIndex] === answer} // pass a boolean instead of fn
        />
      ))}
    </div>
  );
}

export default GuessesList;
