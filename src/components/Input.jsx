export default function Input({ label, id, error, textarea, ...props }) {
  let containerClasses = "flex flex-col gap-2 my-4";
  let labelClasses = "text-sm font-bold";
  let inputClasses = "w-full p-1 rounded-sm border-stone-300 bg-stone-200";
  let errorClasses = "text-sm text-red-500";

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea className={inputClasses} id={id} {...props} />
      ) : (
        <input className={inputClasses} id={id} {...props} />
      )}
      <div className={errorClasses}>
        <p className="h-4">{error}</p>
      </div>
    </div>
  );
}
