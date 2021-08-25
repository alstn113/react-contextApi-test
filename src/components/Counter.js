import CounterContext from "../context/Counter/CounterContext";
import { useContext } from "react";

function Counter() {
  const { count, increase, decrease } = useContext(CounterContext);
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count is {count}</p>
      <button onClick={() => increase(5)}>Increase Count</button>
      <button onClick={() => decrease(5)}>Decrease Count</button>
    </div>
  );
}

export default Counter;
