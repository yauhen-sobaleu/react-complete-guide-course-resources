import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayerSymbol(gameTurns) {
  if (gameTurns.length === 0) {
    return "X";
  }
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayerSymbol = getActivePlayerSymbol(gameTurns);

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    gameBoard[square.rowIndex][square.columnIndex] = playerSymbol;
  }


  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns(prevTurns => {
      let currentPlayerSymbol = getActivePlayerSymbol(prevTurns);

      const updatedTurns = [
        {
          square: {
            rowIndex,
            columnIndex
          },
          playerSymbol: currentPlayerSymbol
        },
        ...prevTurns
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player icon="X" name="Player 1" isActive={activePlayerSymbol === "X"} />
          <Player icon="O" name="Player 2" isActive={activePlayerSymbol === "O"} />
        </ol>

        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}
        />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
