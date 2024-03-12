import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevVal) => {
      const newInput = { ...prevVal, [inputIdentifier]: +newValue };
      return newInput;
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Results userInputs={userInput} />
      ) : (
        <p className="center">Please Enter Valid duration ( duration >= 1) </p>
      )}
    </main>
  );
}

export default App;
