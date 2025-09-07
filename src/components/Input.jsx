export const Input = ({ type, placeholder, value, onChange, errorMessage }) => {
  return (
    <div className="flex flex-col mb-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      {errorMessage && (
        <span className="text-sm text-red-600 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
