import React, { useContext } from "react";
import { FormContext } from "../../context/CounterContext";

const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useContext(FormContext);
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
