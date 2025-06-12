import { useState } from "react";
import "./App.css";
import Button from "./Buttons";
import Input from "./Input";

function App() {
  // Organized buttons in a grid-like structure for better readability
  const calculatorButtons = [
    // Row 1
    { value: "c", type: "function", display: "C" },
    { value: "%", type: "function", display: "%" },
    { value: "dlt", type: "function", display: "⌫" },
    { value: "/", type: "function", display: "÷" },

    // Row 2
    { value: "7", type: "number", display: "7" },
    { value: "8", type: "number", display: "8" },
    { value: "9", type: "number", display: "9" },
    { value: "*", type: "function", display: "×" },

    // Row 3
    { value: "4", type: "number", display: "4" },
    { value: "5", type: "number", display: "5" },
    { value: "6", type: "number", display: "6" },
    { value: "-", type: "function", display: "-" },

    // Row 4
    { value: "1", type: "number", display: "1" },
    { value: "2", type: "number", display: "2" },
    { value: "3", type: "number", display: "3" },
    { value: "+", type: "function", display: "+" },

    // Row 5
    { value: "00", type: "number", display: "00" },
    { value: "0", type: "number", display: "0" },
    { value: ".", type: "function", display: "." },
    { value: "=", type: "equals", display: "=" },
  ];

  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case "c":
        setDisplayValue("0");
        break;

      case "=":
        try {
          // Calculate and format the result
          const result = eval(displayValue);
          setDisplayValue(
            Number.isInteger(result)
              ? result.toString()
              : result.toFixed(8).replace(/\.?0+$/, "")
          );
        } catch (error) {
          setDisplayValue("Error");
        }
        break;

      case "dlt":
        setDisplayValue((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
        break;

      default:
        setDisplayValue((prev) =>
          prev === "0" && buttonValue !== "." ? buttonValue : prev + buttonValue
        );
        break;
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Input value={displayValue} />
        <Button buttons={calculatorButtons} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
