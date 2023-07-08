import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider
      value={{
        count,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
