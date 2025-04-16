import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");

  function handleSelectSquare() {
    setActivePlayerSymbol((p) => p === "X" ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player icon="X" name="Player 1" isActive={activePlayerSymbol === "X"} />
          <Player icon="O" name="Player 2" isActive={activePlayerSymbol === "O"} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayerSymbol} />
      </div>

      LOG
    </main>
  )
}

export default App
