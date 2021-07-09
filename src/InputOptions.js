import React from "react";
import "./InputOptions.css";
function InputOptions({ Icon, title, colour }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: colour, height: "25px", widht: "25px" }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
