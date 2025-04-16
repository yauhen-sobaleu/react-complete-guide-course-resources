import "./Player.css";
import { useState } from "react";

function Player({ icon, name, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(icon, playerName);
    }
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
    <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-icon">{icon}</span>
        </span>
        <button onClick={handleEdit}>{buttonText}</button>
    </li>
  )
}

export default Player;