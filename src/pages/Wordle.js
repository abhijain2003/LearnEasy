import { useState, createContext, useEffect } from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { boardDefault, WordGenerator } from "../components/Words";
import Over from "../components/Over";

export const AppContext = createContext();

function Wordle() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [over, setOver] = useState({ over: false, guessedWord: false });

  useEffect(() => {
    WordGenerator().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.sahiWord)
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found");
    }

    if (currWord === correctWord) {
      setOver({ over: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setOver({ over: true, guessedWord: false });
      return;
    }
  };

  return (
    <div className="text-center w-screen h-screen overflow-y-hidden text-white overflow-x-hidden">

      <div className="grid place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl">
          Wordle
        </h1>
        <div className="inline-flex h-1 bg-secondary rounded-full w-40"></div>
      </div>

      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
          over,
          setOver,
          disabledLetters,
          setDisabledLetters,
        }}
      >
        <div className="min-h-screen flex relative justify-center items-center">
          <Board />
          {over.over ? <Over /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Wordle;
