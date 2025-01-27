export default function SearchBar({ placeholder, onChange }) {
  let containerClasses = "flex";

  let inputClasses = "rounded-md pl-[10px]";

  function handleOnChange(event) {
    let search = event.target.value;
    onChange(search);
  }

  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type="text"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
