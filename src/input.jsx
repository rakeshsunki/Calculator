import React from "react";

const Input = ({ value }) => {
  return (
    <div className="calculator-display">
      <input
        type="text"
        value={value}
        readOnly
        aria-label="Calculator display"
      />
    </div>
  );
};

export default Input;
