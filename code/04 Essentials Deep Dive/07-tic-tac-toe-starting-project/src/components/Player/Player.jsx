import "./Player.css";

function Player({ icon, name}) {
  return (
    <li>
        <span className="player">
            <span className="player-icon">{icon}</span>
            <span className="player-name">{name}</span>
        </span>
        <button>Edit</button>
    </li>
  )
}

export default Player;