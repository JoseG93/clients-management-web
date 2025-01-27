export default function Button({ children, outline, role, disabled, ...props }) {
  let classes =
    "px-4 py-2 md:text-base font-bold rounded-md bg-blue-800 text-white hover:bg-blue-500";

  if (outline) {
    classes =
      "px-4 py-2 md:text-base font-bold rounded-md border border-gray-300 hover:bg-gray-300";
  }

  if (role === 'danger') {
    classes =
      "px-4 py-2 md:text-base font-bold rounded-md bg-red-600 text-white hover:bg-red-500";
  }

  // if (type === "danger") {
  //   classes =
  //     "px-4 py-2 md:text-base font-bold rounded-md bg-red-600 text-white hover:bg-red-500";
  // }

  if (disabled) {
    classes += " cursor-not-allowed";
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
