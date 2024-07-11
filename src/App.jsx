import { useState } from "react";
import "./App.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const disabled = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="counter-app">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="display-flex">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={disabled}>Disabled</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
