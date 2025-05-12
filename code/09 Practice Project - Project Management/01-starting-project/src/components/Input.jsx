export default function Input({ id, label, ...props }) {
  return (
    <>
      <label
        htmlFor={id}
        className="
            block 
            text-stone-600
            uppercase 
            text-xs 
            font-semibold
            "
      >
        {label}
      </label>

      <input
        id={id}
        className={`
        bg-stone-200
        w-full
        hover:border-b-2
        hover:border-stone-800
        `}
        {...props}
      />
    </>
  );
}
