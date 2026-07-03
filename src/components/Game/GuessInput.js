import React from "react";

function GuessInput({ setGuess , setGuesses}) {
    const [inputValue, setInputValue] = React.useState('');

    function submitInput(event) {
        event.preventDefault();
        const upperCaseGuess = inputValue.toUpperCase();
        setGuess(upperCaseGuess);
        setGuesses((prevGuesses) => [...prevGuesses, upperCaseGuess]);
        setInputValue('');
    }


  return (
    <form onSubmit={submitInput} class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input"
       type="text"
        value={inputValue} 
        min={5}
        max={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        required
        onChange={(event)=> {
            setInputValue(event.target.value)
            }} 
            />
    </form>
  );
}

export default GuessInput;
