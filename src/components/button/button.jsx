export const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 text-lg bg-blue-500 border border-blue-800 rounded-xl min-w-min">
      {children}
    </button>
  );
};
