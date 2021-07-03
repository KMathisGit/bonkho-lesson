import React from "react";
import "./Counter.css";

export default function Counter({count, setCount}) {

  const increment = () => setCount(count + 1); 

  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
