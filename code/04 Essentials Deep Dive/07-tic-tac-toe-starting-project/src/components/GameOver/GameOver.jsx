function GameOver({ winner, isTie }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} won!</p>}
            {isTie && <p>It's a draw!</p>}
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    )
}

export default GameOver;