import React from "react";
import "./Button.css";

const Button = ({ onClick, children, type,isSubmitting}) => {
  return (
    <button 
    type={type}
    className="custom-button" onClick={onClick} disabled={isSubmitting}>
      {children}
    </button>
  );
};

export default Button;
