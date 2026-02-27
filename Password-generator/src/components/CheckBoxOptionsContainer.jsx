function CheckBoxOptionsContainer({ options, setOptions }) {
  return (
    <fieldset className="flex flex-col gap-4 mt-8  w-full max-w-77.75 md:max-w-119">
      <label className="flex items-center gap-4 cursor-pointer text-preset-4 md:text-preset-3 text-grey-200">
        <input
          className="appearance-none w-5 h-5 border-2 border-white checked:bg-green-400"
          type="checkbox"
          name="includeUppercase"
          id="includeUppercase"
          checked={options.includeUppercase}
          onChange={(e) =>
            setOptions({ ...options, includeUppercase: e.target.checked })
          }
        />
        Include Uppercase Letters
      </label>
      <label className="flex items-center gap-4 cursor-pointer text-preset-4 md:text-preset-3 text-grey-200">
        <input
          className="appearance-none w-5 h-5 border-2 border-white checked:bg-green-400"
          type="checkbox"
          name="includeLowercase"
          id="includeLowercase"
          checked={options.includeLowercase}
          onChange={(e) =>
            setOptions({ ...options, includeLowercase: e.target.checked })
          }
        />
        Include Lowercase Letters
      </label>
      <label className="flex items-center gap-4 cursor-pointer text-preset-4 md:text-preset-3 text-grey-200">
        <input
          className="appearance-none w-5 h-5 border-2 border-white checked:bg-green-400"
          type="checkbox"
          name="includeNumbers"
          id="includeNumbers"
          checked={options.includeNumbers}
          onChange={(e) =>
            setOptions({ ...options, includeNumbers: e.target.checked })
          }
        />
        Include Numbers
      </label>
      <label className="flex items-center gap-4 cursor-pointer text-preset-4 md:text-preset-3 text-grey-200">
        <input
          className="appearance-none w-5 h-5 border-2 border-white checked:bg-green-400"
          type="checkbox"
          name="includeSymbols"
          id="includeSymbols"
          checked={options.includeSymbols}
          onChange={(e) =>
            setOptions({ ...options, includeSymbols: e.target.checked })
          }
        />
        Include Symbols
      </label>
    </fieldset>
  );
}

export default CheckBoxOptionsContainer;
