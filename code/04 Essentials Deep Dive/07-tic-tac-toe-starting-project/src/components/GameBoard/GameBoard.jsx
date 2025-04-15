import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, columnIndex) {
        setGameBoard(gameBoard => {
            const updatedGameBoard = [...gameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][columnIndex] = "X";
            return updatedGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, columnIndex) => (
                    <li key={columnIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>
                        {playerSymbol}
                    </button>
                    </li>
                ))}
                </ol>
            </li>
            ))}
        </ol>
    )
}
export default GameBoard;