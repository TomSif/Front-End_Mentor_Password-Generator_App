import CharacterLengthContainer from "./CharacterLengthContainer";
import CheckBoxOptionsContainer from "./CheckBoxOptionsContainer";
import StrengthContainer from "./StrengthContainer";
import ButtonGenerate from "./ButtonGenerate";

function OptionsContainer({
  options,
  setOptions,
  setPassword,
  hasError,
  showError,
  setShowError,
}) {
  return (
    <section className=" bg-grey-800  w-full max-w-77 md:max-w-119 flex flex-col items-center mt-4 md:mt-6 px-4 md:px-6 py-4 md:py-6">
      <CharacterLengthContainer
        options={options}
        setOptions={setOptions}
        setShowError={setShowError}
      ></CharacterLengthContainer>
      <CheckBoxOptionsContainer
        options={options}
        setOptions={setOptions}
        setShowError={setShowError}
      ></CheckBoxOptionsContainer>
      <StrengthContainer options={options}></StrengthContainer>
      <ButtonGenerate
        options={options}
        setPassword={setPassword}
        hasError={hasError}
        setShowError={setShowError}
      ></ButtonGenerate>
      {showError && (
        <span className="text-red-400 text-preset-4 absolute bottom-2">
          {options.length === 0
            ? "Length must be at least 1"
            : "Select at least one option"}
        </span>
      )}
    </section>
  );
}

export default OptionsContainer;
