import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";
import GameOver from "./components/GameOver/GameOver";

/**
 * Initial player configuration mapping player symbols to default player names
 * @type {Object<string, string>}
 * @description
 * - Maps player symbols ("X" and "O") to their default names
 * - "X" is assigned to "Player 1"
 * - "O" is assigned to "Player 2"
 */
const initialPlayers = {
  X: 'Player 1',
  O: 'Player 2'
}

/**
 * Initial state of the game board represented as a 2D array
 * @type {Array<Array<string|null>>}
 * @description
 * - A 3x3 grid where each cell can contain:
 *   - null: empty cell
 *   - "X": cell marked by player X
 *   - "O": cell marked by player O
 */
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * Determines which player's turn it is based on the number of turns taken
 * @param {Array} gameTurns - Array of game turns taken so far
 * @returns {string} The symbol of the active player ("X" or "O")
 * @description
 * - Returns "X" if no turns have been taken
 * - Returns "X" if an even number of turns have been taken
 * - Returns "O" if an odd number of turns have been taken
 */
function getActivePlayerSymbol(gameTurns) {
  if (gameTurns.length === 0) {
    return "X";
  }
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

/**
 * Determines the winner of the game by checking all winning combinations
 * @param {Array<Array<string|null>>} gameBoard - 2D array representing the current state of the game board
 * @param {Object} players - Object mapping player symbols to player names
 * @returns {string|null} The name of the winning player, or null if there is no winner
 * @description
 * - Iterates through all possible winning combinations
 * - Checks if any combination has three matching symbols
 * - Returns the corresponding player name if a winning combination is found
 * - Returns null if no winning combination is found
 */
function deriveWinner(gameBoard, players) {
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
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

/**
 * Creates a 2D array representing the current state of the game board
 * @param {Array} gameTurns - Array of game turns taken so far
 * @returns {Array<Array<string|null>>} 2D array representing the game board
 * @description
 * - Creates a deep copy of the initial game board
 * - Iterates through all turns taken
 * - Updates the board with player symbols at their respective positions
 * - Returns the updated game board
 */
function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map(row => [...row])];
  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    gameBoard[square.rowIndex][square.columnIndex] = playerSymbol;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(initialPlayers)
  const [gameTurns, setGameTurns] = useState([])

  function handleRestart() {
    setGameTurns([]);
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

  function handlePlayerNameChange(symbol, name) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: name
      }
    })
  }

  const activePlayerSymbol = getActivePlayerSymbol(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  let isTie = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player 
                icon="X" 
                name={initialPlayers.X} 
                isActive={activePlayerSymbol === "X"} 
                onChangeName={handlePlayerNameChange} 
            />
            <Player 
                icon="O" 
                name={initialPlayers.O} 
                isActive={activePlayerSymbol === "O"} 
                onChangeName={handlePlayerNameChange} 
            />
        </ol>


        {(winner || isTie) && (
            <GameOver 
                winner={winner} 
                isTie={isTie} 
                onRestart={handleRestart} 
            />
        )}

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
