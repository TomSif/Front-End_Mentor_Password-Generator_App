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
    if (score > 10) strength = 2;
    if (score > 20) strength = 3;
    if (score > 30) strength = 4;

    const labels = ["", "Too Weak", "Weak", "Medium", "Strong"];

    return { strength, label: labels[strength] };
  };

  const { strength, label } = getStrength(options);
  const barColors = [
    "",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-green-500",
  ];

  return (
    <div className="flex justify-between w-full max-w-77.75 md:max-w-119 items-center">
      <p className="text-preset-4 text-grey-600">STRENGTH</p>
      <div className="flex flex-row items-center justify-between gap-4">
        <p className="text-preset-3 text-grey-200">{label}</p>
        <div className="flex  gap-2">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`h-8 w-4 border border-white ${level <= strength ? barColors[strength] : "bg-transparent"}`} // ↑ strength est accessible directement, pas besoin de le passer
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default StrengthContainer;
