function StrengthContainer({ options }) {
  const getStrength = (options) => {
    const score =
      options.length *
      (Number(options.includeNumbers) +
        Number(options.includeUppercase) +
        Number(options.includeLowercase) +
        Number(options.includeSymbols));

    let strength = 0;
    if (score > 0) strength = 1;
    if (score > 20) strength = 2;
    if (score > 40) strength = 3;
    if (score > 60) strength = 4;

    const labels = ["", "TOO WEAK", "WEAK", "MEDIUM", "STRONG"];

    return { strength, label: labels[strength] };
  };

  const { strength, label } = getStrength(options);
  const barColors = [
    "",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-300",
    "bg-green-200",
  ];

  return (
    <div className="flex justify-between w-full max-w-77.75 md:max-w-119 items-center bg-grey-850 md:py-4 md:px-8 mt-8">
      <p className="text-preset-4 md:text-preset-3 text-grey-600">STRENGTH</p>
      <div className="flex flex-row items-center justify-between gap-4">
        <p className="text-preset-3 md:text-preset-2 text-grey-200">{label}</p>
        <div className="flex  gap-2">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`h-8 w-4 border border-white ${level <= strength ? barColors[strength] : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default StrengthContainer;
