import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");

  function handleSelectSquare(rowIndex, columnIndex) {
    setActivePlayerSymbol((p) => p === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      let currentPlayerSymbol = 'X';

      if (prevTurns.length > 0 && prevTurns[0].playerSymbol === 'X') {
        currentPlayerSymbol = 'O'
      }
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
          turns={gameTurns} 
        />
      </div>

      LOG
    </main>
  )
}

export default App
