import "./Player.css";
import { useState } from "react";

function Player({ icon, name}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }

  const buttonText = isEditing ? "Save" : "Edit";

  return (
    <li>
        <span className="player">
          {playerName}
          <span className="player-icon">{icon}</span>
        </span>
        <button onClick={handleEdit}>{buttonText}</button>
    </li>
  )
}

export default Player;