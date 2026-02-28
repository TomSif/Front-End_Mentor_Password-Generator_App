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

  const [password, setPassword] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center mt-16 md:mt-33">
      <PasswordContainer password={password}></PasswordContainer>
      <OptionsContainer
        options={options}
        setOptions={setOptions}
        setPassword={setPassword}
      ></OptionsContainer>
    </main>
  );
}

export default App;
