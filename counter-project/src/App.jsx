import { useState } from "react"; //hooks come from here
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //counter- variable, setCounter- function that's responsible for updating the variable
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Maximum limit reached!");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be negative!");
    }
  };
  return (
    <>
      <h1>Catherine with React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>

      <br />
      <br />

      <button onClick={removeValue}>Remove Value: {counter}</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
