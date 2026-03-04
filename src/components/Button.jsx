export default function Button({ onClick, variant, children }) {
  const styles =
    variant === "primary"
      ? "bg-white text-black"
      : "bg-button-secondary-bg text-white";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-lg px-4 py-2.5 text-sm ${styles}`}
    >
      {children}
    </button>
  );
}
