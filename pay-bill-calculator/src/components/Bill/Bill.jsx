export default function Bill({ bill, setBill }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />
    </div>
  );
}
