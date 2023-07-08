import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [count, setCount] = useState(4);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <FormContext.Provider
      value={{
        count,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
