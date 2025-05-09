export default function Button({ children, className = '', onClick }) {
    return (
        <button className={`
            bg-stone-700 
            p-2 
            rounded-md 
            text-stone-400 
            hover:text-stone-300 
            ${className}
        `} onClick={onClick}>
            { children }
        </button>
    ) 
}