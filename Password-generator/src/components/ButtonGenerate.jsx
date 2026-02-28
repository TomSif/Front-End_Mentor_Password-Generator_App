import generatePassword from "../utils/generatePassword";

function ButtonGenerate({ options, setPassword }) {
  return (
    <button
      type="button"
      aria-label="generation password button"
      className="flex items-center gap-2 text-green-200 border-green-200 border-2"
      onClick={() => setPassword(generatePassword(options))}
    >
      Generate
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
