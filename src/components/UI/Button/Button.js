import React from "react";

import "./Button.css";

const Button = (props) => {
  const buttonClasses = props.isActive ? "button" : "button inactive";

  return (
    <button type={props.type} className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
