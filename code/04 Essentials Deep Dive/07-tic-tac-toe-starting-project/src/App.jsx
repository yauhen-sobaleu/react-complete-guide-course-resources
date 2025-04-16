import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";
import GameOver from "./components/GameOver/GameOver";

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

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    
    if (
      firstSquareSymbol &&
      secondSquareSymbol &&
      thirdSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  let isTie = gameTurns.length === 9 && !winner;


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

        {(winner || isTie) && <GameOver winner={winner} isTie={isTie} />}

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
