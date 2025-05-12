import { buttonStyles } from '../styles/input-styles';

export default function Button({ children, variant, onClick = undefined }) {
  const buttonStyle = buttonStyles[variant];

  return (
    <button
      className={`
            px-4 
            py-2 
            rounded-md 
            ${buttonStyle}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
