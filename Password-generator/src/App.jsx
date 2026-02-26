import "./App.css";
import { useState } from "react";
import PasswordContainer from "./components/PasswordContainer";
import OptionsContainer from "./components/OptionsContainers";

function App() {
  const [length, setLength] = useState(0);

  return (
    <main className="flex flex-col items-center">
      <PasswordContainer></PasswordContainer>
      <OptionsContainer length={length} onChange={setLength}></OptionsContainer>
    </main>
  );
}

export default App;
