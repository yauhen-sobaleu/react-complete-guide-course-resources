import './InputGroup.css';

function InputGroup( { children }) {
    return (
        <form id="user-input">  
            <div className="input-group">
                {children}
            </div>
        </form>
    )
}

export default InputGroup;