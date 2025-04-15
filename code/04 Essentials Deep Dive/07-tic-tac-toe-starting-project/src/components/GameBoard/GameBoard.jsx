const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, index) => (
              <li key={index}>
                <button className="cell">
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