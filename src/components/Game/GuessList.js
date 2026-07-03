import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessList({ guesses, answer }) {
  const maxGuesses = 5;
  const wordLength = 5;
  const hasWon = guesses.includes(answer);
  const hasLost = guesses.length === 5 && !hasWon;

  return (
    <>
      {Array.from({ length: maxGuesses }).map((_, rowIndex) => {
        const guess = guesses[rowIndex];

        return (
          <p key={rowIndex} className="guess">
            {guess
              ? checkGuess(guess, answer).map((item, index) => (
                  <span key={index} className={`cell ${item.status}`}>
                    {item.letter}
                  </span>
                ))
              : Array.from({ length: wordLength }).map((_, index) => (
                  <span key={index} className="cell"></span>
                ))}
          </p>
        );
      })}

      {hasWon && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length } guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessList;
