import "./App.css";
import React, { useState } from "react";

function App() {
  const [squares, setSquares] = useState(utils.range(1, 25));
  return (
    <>
      <div className="grid justify-center w-full h-screen">
        <h2 className="text-center">color game</h2>
        <div className="grid grid-cols-5 w-80 h-80 left-10 border-spacing-1">
          {squares.map((square) => {
            return (
              <div
                key={square}
                className="bg-current hover:bg-current-50 w-12 h-12 "
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
};

export default App;
