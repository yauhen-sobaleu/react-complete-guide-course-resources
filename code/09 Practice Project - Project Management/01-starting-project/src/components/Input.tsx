import React from 'react';
import Label from './Label';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <>
      <div className="mb-1">
        <Label id={id}>{label}</Label>
      </div>

      <input
        id={id}
        className={`
        text-sm
        text-stone-600
        font-sans
        w-full
        border-b-2
        bg-stone-200
        border-gray-200
        hover:border-stone-800
        p-1
        `}
        {...props}
      />
    </>
  );
}
