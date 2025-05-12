import React from 'react';
import Label from './Label';
import { inputStyles } from '../styles/input-styles';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export default function TextArea({ id, label, ...props }: TextAreaProps) {
  return (
    <>
      <div className="mb-1">
        <Label id={id}>{label}</Label>
      </div>
      <textarea id={id} className={inputStyles} {...props} />
    </>
  );
}
