import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import Child from "../Child/Child";

const Counter = () => {
  const { handleIncrement, handleDecrement } = useContext(CounterContext);
  return (
    <>
      <h1>Counter</h1>
      {/* <Child count={count} />  without context */}
      <Child />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
