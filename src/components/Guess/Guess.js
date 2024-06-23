import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ key, value, answer, isWon }) {
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
            <strong> {key} guesses</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Guess;
