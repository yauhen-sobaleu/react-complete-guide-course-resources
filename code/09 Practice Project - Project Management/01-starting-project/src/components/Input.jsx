export default function Input({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="
            block 
            text-stone-600
            uppercase 
            text-xs 
            font-semibold
            mb-1
            "
      >
        {label}
      </label>
      <input
        id={id}
        className={`
        bg-stone-200
        w-96
        hover:border-b-2
        hover:border-stone-800
        `}
        {...props}
      />
    </div>
  );
}
