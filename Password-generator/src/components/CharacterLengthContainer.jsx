function CharacterLengthContainer({ options, setOptions, setShowError }) {
  const MIN = 0;
  const MAX = 20;
  const fillPercent = ((options.length - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="py-1 w-full max-w-77.75 md:max-w-119">
      <div className="flex justify-between py-2">
        <h2
          className="preset-4 md:preset-3 text-white"
          id="characterLengthTitle"
        >
          Character Length
        </h2>
        <p className="preset-2 md:preset-1 text-green-200" id="characterLength">
          {options.length}
        </p>
      </div>
      <div className="mt-2 md:mt-4">
        <input
          type="range"
          aria-labelledby="characterLengthTitle"
          aria-describedby="characterLength"
          min={MIN}
          max={MAX}
          step={1}
          value={options.length}
          onChange={(e) => {
            setOptions({ ...options, length: Number(e.target.value) });
            setShowError(false);
          }}
          className="w-full  cursor-pointer"
          style={{ "--fill": `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}
export default CharacterLengthContainer;
