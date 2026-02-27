import "./App.css";
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

  return (
    <main className="flex flex-col items-center">
      <PasswordContainer></PasswordContainer>
      <OptionsContainer
        options={options}
        setOptions={setOptions}
      ></OptionsContainer>
    </main>
  );
}

export default App;
