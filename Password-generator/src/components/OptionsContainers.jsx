import CharacterLengthContainer from "./CharacterLengthContainer";
import CheckBoxOptionsContainer from "./CheckBoxOptionsContainer";
import StrengthContainer from "./StrengthContainer";
import ButtonGenerate from "./ButtonGenerate";

function OptionsContainer() {
  return (
    <section>
      <CharacterLengthContainer></CharacterLengthContainer>
      <CheckBoxOptionsContainer></CheckBoxOptionsContainer>
      <StrengthContainer></StrengthContainer>
      <ButtonGenerate></ButtonGenerate>
    </section>
  );
}

export default OptionsContainer;
