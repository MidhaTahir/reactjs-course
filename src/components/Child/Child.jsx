import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

const Child = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Child;
