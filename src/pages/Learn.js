import React from 'react'
import { Link } from 'react-router-dom'
import MathsImg from "../assets/maths.svg"
import WordleImg from "../assets/wordle.svg"

export default function Learn() {
  return (
    <div className="pt-8 min-h-screen">

      <div className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl text-white">
          Choose Game
        </h1>
        <div className="inline-flex h-1 bg-secondary rounded-full w-72"></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-4">

        <Link to="/wordle">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg p-4 bg-gray-100">
                <img width="480" height="280" src={WordleImg} alt="" className="rounded-t-md" /></div>
              <div className="grid -mt-9 font-bold place-content-center mx-1 text-xl bg-gray-100">Wordle</div>
            </div>
          </div>
        </Link>

        <Link to="/maths">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg p-4 bg-gray-100">
                <img width="480" height="280" src={MathsImg} alt="" className="rounded-t-md" /></div>
              <div className="grid -mt-9 font-bold place-content-center mx-1 text-xl bg-gray-100">Maths</div>
            </div>
          </div>
        </Link>

        <div className="m-8">
          <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">More games comming soon..</div>
          </div>
        </div>

      </div>

    </div>
  )
}
