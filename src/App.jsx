import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mes, setMes] = useState("");
  const handleClick = () => {
    setMes("Xin Chào");
  };
  return (
    <>
      <button onClick={() => handleClick()}>Click me</button>
      <p>{mes}</p>
    </>
  );
}

export default App;
