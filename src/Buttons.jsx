import React from "react";

const Button = ({ buttons, onButtonClick }) => {
  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`calculator-button ${button.type}-button`}
          onClick={() => onButtonClick(button.value)}
          aria-label={button.display}
        >
          {button.display}
        </button>
      ))}
    </div>
  );
};

export default Button;
