import CharacterLengthContainer from "./CharacterLengthContainer";
import CheckBoxOptionsContainer from "./CheckBoxOptionsContainer";
import StrengthContainer from "./StrengthContainer";
import ButtonGenerate from "./ButtonGenerate";

function OptionsContainer({ options, setOptions }) {
  return (
    <section className=" bg-grey-800  w-full max-w-77 md:max-w-119 flex flex-col items-center mt-4 md:mt-6 px-4 md:px-6 ">
      <CharacterLengthContainer
        options={options}
        setOptions={setOptions}
      ></CharacterLengthContainer>
      <CheckBoxOptionsContainer></CheckBoxOptionsContainer>
      <StrengthContainer></StrengthContainer>
      <ButtonGenerate></ButtonGenerate>
    </section>
  );
}

export default OptionsContainer;
