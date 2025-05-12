import { buttonStyles } from '../styles/input-styles';

export default function Button({ children, form, variant, onClick = undefined }) {
  const buttonStyle = buttonStyles[variant];

  return (
    <button
      form={form}
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
