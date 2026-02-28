import generatePassword from "../utils/generatePassword";

function ButtonGenerate({ options, setPassword }) {
  return (
    <button
      type="button"
      aria-label="generation password button"
      className="flex items-center justify-center  text-preset-3 md:text-preset-4 text-center gap-2 md:gap-6 bg-green-200 hover:bg-grey-800 hover:text-green-200 border-green-200 border-2 w-full mt-4 md:mt-8 md:mb-4 py-4 md:py-6 hover:scale-103 active:scale-95 transition-all duration-300"
      onClick={() => setPassword(generatePassword(options))}
    >
      GENERATE
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
}

export default ButtonGenerate;
