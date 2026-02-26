function CharacterLengthContainer({ length, onChange }) {
  const MIN = 0;
  const MAX = 20;
  const fillPercent = ((length - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="py-1 w-full max-w-77.75 md:max-w-119">
      <div className="flex justify-between py-2">
        <h2 className="preset-4 md:preset-3 text-white">Character Length</h2>
        <p className="preset-2 md:preset-1 text-green-200">{length}</p>
      </div>
      <div className="mt-2 md:mt-4">
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={1}
          value={length}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full  cursor-pointer"
          style={{ "--fill": `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}
export default CharacterLengthContainer;
