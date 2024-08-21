// src/Game.js
import React, { useState } from "react";
import { Square } from "./Square";
import "./styles.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div>{status}</div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row}>
            {[0, 1, 2].map((col) => (
              <Square
                key={row * 3 + col}
                value={squares[row * 3 + col]}
                onClick={() => handleClick(row * 3 + col)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Game;
