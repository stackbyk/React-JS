import { useState } from "react"; //hooks come from here
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //counter- variable, setCounter- function that's responsible for updating the variable
  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1);

    //console.log("values are being added!", Math.random());
  };

  const removeValu = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Catherine with React</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add Values:{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Values:{counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}
export default App;
