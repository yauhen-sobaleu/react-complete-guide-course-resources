import './UserInput.css';
import { useState } from 'react';

function UserInput( { name, initialValue, step }) {
    const [inputValue, setInputValue] = useState(initialValue);

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <p>
            <label htmlFor={name}>{name}</label>
            <input
                type="number"
                name={name}
                id={name}
                value={inputValue}
                step={step}
                onChange={inputChangeHandler}
            />
        </p>
    );
}

export default UserInput;