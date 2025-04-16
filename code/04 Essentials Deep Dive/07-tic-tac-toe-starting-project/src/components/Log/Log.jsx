function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.rowIndex}-${turn.square.columnIndex}`}>
                    {turn.playerSymbol} selected {turn.square.rowIndex}, {turn.square.columnIndex}
                </li>
            ))}
        </ol>
    )
}

export default Log;