const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, playerSymbol } = turn;
        gameBoard[square.rowIndex][square.columnIndex] = playerSymbol;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, columnIndex) => (
                    <li key={columnIndex}>
                    <button
                        onClick={() => onSelectSquare(rowIndex, columnIndex)} 
                        disabled={playerSymbol !== null}
                    >
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