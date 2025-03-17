import { useState } from "react";
import "./App.css";
import Button from "./Buttons";
import Input from "./input";

function App() {
  let bt = [
    "c",
    "%",
    "dlt",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  const [value, calmethod] = useState("0");

  const handle = (b) => {
    if (b === "c") {
      calmethod("0");
    } else if (b === "=") {
      try {
        const result = eval(value);
        calmethod(result.toString());
      } catch {
        calmethod("Error");
      }
    } else if (b === "dlt") {
      if (value.length === 1) {
        calmethod("0");
      } else {
        calmethod(value.slice(0, -1));
      }
    } else {
      if (value === "0" && b !== ".") {
        calmethod(b); // Replace "0" with new input, unless it's "."
      } else {
        calmethod(value + b);
      }
    }
  };

  return (
    <>
      <center className="calculator">
        <Input text={value} />
        <Button a={bt} handle={handle} />
      </center>
    </>
  );
}

export default App;
