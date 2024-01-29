export default function Service({ text, options, onServiceChange }) {
  return (
    <div>
      {text}
      <select onChange={(e) => onServiceChange(Number(e.target.value))}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
