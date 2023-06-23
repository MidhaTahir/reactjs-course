import React, { useState } from "react";

const Counter = () => {
  // State to track the feedback count
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1)
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    // setCount(count - 1);
    setCount((prev) => prev - 1)
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      {/* Alternative way to update the count using inline arrow functions */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </>
  );
};

export default Counter;

