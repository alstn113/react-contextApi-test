import { useCounter } from "../context/CounterContext";

function Counter() {
  const { state, dispatch } = useCounter();
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count is {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREAMENT", payload: 5 })}>Increase Count</button>
      <button onClick={() => dispatch({ type: "DECREAMENT", payload: 5 })}>Decrease Count</button>
    </div>
  );
}

export default Counter;
