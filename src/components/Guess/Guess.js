import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checkResult = checkGuess(value, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={checkResult ? checkResult[num].letter : undefined}
            status={checkResult ? checkResult[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
