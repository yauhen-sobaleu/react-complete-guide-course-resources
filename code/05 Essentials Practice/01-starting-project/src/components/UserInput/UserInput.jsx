import './UserInput.css';

function UserInput( { name, value, step, onChange }) {

    function onInputChange(event) {
        onChange(name, event.target.value);
    }

    return (
        <p>
            <label htmlFor={name}>{name}</label>
            <input
                type="number"
                name={name}
                id={name}
                value={value}
                step={step}
                onChange={onInputChange}
            />
        </p>
    );
}

export default UserInput;