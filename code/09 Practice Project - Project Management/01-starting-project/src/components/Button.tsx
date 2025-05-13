import { buttonStyles, ButtonVariant } from '../styles/input-styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  form?: string;
  variant: ButtonVariant;
  onClick?: () => void;
}
export default function Button({ children, form, variant, onClick = undefined }: ButtonProps) {
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
