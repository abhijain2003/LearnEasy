import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

function Over() {
    const {over, currAttempt, correctWord, setOver} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{over.guessedWord ? "You Correctly guessed the word": "You got failed"}</h3>
        <h1>Correct:  {correctWord}</h1>
        {over.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts.</h3>
        )}
    </div>
  )
}

export default Over;