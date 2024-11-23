export default function Button({
  onClick,
  children,
  type = "button",
  variant = "primary",
}) {
  const baseStyles = "w-full py-2 rounded-lg transition font-semibold";

  const variants = {
    primary: "bg-[#03d5b2] text-white hover:bg-[#019e87]",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    facebook: "bg-[#1877F2] text-white ",
    google: "bg-white text-[#3f3f3f] border border-[#4285F4]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
