import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer, isWon, numOfGuess }) {
  const result = checkGuess(value, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
      {isWon ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numOfGuess} guesses</strong>.
          </p>
        </div>
      ) : null}
      {numOfGuess >= NUM_OF_GUESSES_ALLOWED ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Guess;
