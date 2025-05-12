export default function Button({ children, onClick }) {
  return (
    <button
      className={`
            bg-stone-700 
            px-4 
            py-2 
            rounded-md 
            text-stone-400 
            hover:text-stone-300
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
