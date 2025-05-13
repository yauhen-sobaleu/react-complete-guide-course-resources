import React from 'react';
import Label from './Label';
import { inputStyles } from '../styles/input-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ id, label, onChange, ...props }: InputProps) {
  return (
    <>
      <div className="mb-1">
        <Label id={id}>{label}</Label>
      </div>

      <input id={id} className={inputStyles} {...props} onChange={onChange} />
    </>
  );
}
