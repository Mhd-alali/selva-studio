export default function Button({ children, className }) {
  return (
    <button className={`bg-sia_pink hover:opacity-90 py-1 px-6 rounded-2xl  ${className}`}>
      {children}
    </button>
  );
}