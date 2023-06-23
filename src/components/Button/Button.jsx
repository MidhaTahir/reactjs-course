import React from "react";
import "./Button.css";

const Button = ({ onClick, children, isSubmitting}) => {
  return (
    <button className="custom-button" onClick={onClick} disabled={isSubmitting}>
      {children}
    </button>
  );
};

export default Button;
