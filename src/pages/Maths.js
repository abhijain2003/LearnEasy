import React, { useState } from "react";

export default function Maths() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mult, setMult] = useState(0);
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    setNum1(Math.ceil(Math.random() * 10));
    setNum2(Math.ceil(Math.random() * 10));
  };

  const submit = (e) => {
    e.preventDefault();
    const formValid = +mult >= 0;
    if (!formValid) {
      return;
    }
    if (+num1 * +num2 === +mult) {
      setScore((score) => score + 1);
    }
    generateQuestion();
  };

  return (
    <div className="pt-8 min-h-screen text-white">

      <div className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl">
          Multiplication Game
        </h1>
        <div className="inline-flex h-1 bg-secondary rounded-full w-80"></div>
      </div>

      <form onSubmit={submit} className="">
        <div className="py-2 text-3xl grid place-items-center">
          <label>
            {num1} x {num2}
          </label>
          <input value={mult} onChange={(e) => setMult(e.target.value)} className="text-black my-2 rounded-md" />
        </div>
        <div className="py-2 grid place-items-center">
          <button className="text-white bg-secondary text-2xl px-3 py-2 rounded-md" type="submit">Check</button>
        </div>
      </form>

      <div className="py-2 grid place-items-center">
        <button className="text-white bg-tertiary text-2xl px-3 py-2 rounded-md my-2" type="button" onClick={generateQuestion}>
          Start game
        </button>
        <p className="text-2xl">My Score: {score}</p>
      </div>

    </div>
  );
}
