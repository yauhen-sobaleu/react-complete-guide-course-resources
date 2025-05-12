import React from 'react';

interface LabelProps {
  id: string;
  children: React.ReactNode;
}

export default function Label({ id, children }: LabelProps) {
  return (
    <label htmlFor={id} className="block text-stone-600 uppercase text-xs font-semibold">
      {children}
    </label>
  );
}
