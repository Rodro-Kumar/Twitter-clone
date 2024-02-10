import React from "react";

const Button = ({ children, className }) => {
  return (
    <>
      <button className={` ${className}`}>
        {children ? children : "Button"}
      </button>
    </>
  );
};

export default Button;
