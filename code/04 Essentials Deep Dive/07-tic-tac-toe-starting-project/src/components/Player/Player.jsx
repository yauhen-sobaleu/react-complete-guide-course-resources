import "./Player.css";
import { useState } from "react";

function Player({ icon, name }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
        <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
        />
    );
  }

  const buttonText = isEditing ? "Save" : "Edit";

  return (
    <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-icon">{icon}</span>
        </span>
        <button onClick={handleEdit}>{buttonText}</button>
    </li>
  )
}

export default Player;