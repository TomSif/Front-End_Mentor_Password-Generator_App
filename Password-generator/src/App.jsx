import { useState } from "react";
import PasswordContainer from "./components/PasswordContainer";
import OptionsContainer from "./components/OptionsContainers";

function App() {
  const [options, setOptions] = useState({
    length: 0,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const hasError =
    options.length === 0 ||
    (!options.includeUppercase &&
      !options.includeLowercase &&
      !options.includeNumbers &&
      !options.includeSymbols);

  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center mt-16 md:mt-33">
      <PasswordContainer password={password}></PasswordContainer>
      <OptionsContainer
        options={options}
        setOptions={setOptions}
        setPassword={setPassword}
        hasError={hasError}
        setShowError={setShowError}
        showError={showError}
      ></OptionsContainer>
    </main>
  );
}

export default App;
