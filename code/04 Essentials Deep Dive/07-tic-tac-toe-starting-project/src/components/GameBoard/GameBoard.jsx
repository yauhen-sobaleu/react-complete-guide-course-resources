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
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, columnIndex) {
    //     setGameBoard(gameBoard => {
    //         const updatedGameBoard = [
    //             ...gameBoard.map(innerArray => [...innerArray]),
    //         ];
    //         updatedGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, columnIndex) => (
                    <li key={columnIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>
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