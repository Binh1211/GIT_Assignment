import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mes, setMes] = useState("");
  const [mes1, setMes1] = useState("");

  const handleClick = () => {
    setMes("Xin Chào");
  };

  const handleClick1 = () => {
    setMes1("Tạm Biệt");
  };
  return (
    <>
      <button onClick={() => handleClick()}>Click me</button>
      <p>{mes}</p>

      <button onClick={() => handleClick1()}>Click me</button>
      <p>{mes1}</p>
    </>
  );
}

export default App;
