import { useReducer, createContext, useContext } from "react";

// REDUCER
const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + action.payload };
    case "DECREAMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

// STATE
const initialState = {
  count: 0,
};

// CREATE CONTEXT
const CounterContext = createContext();

// CONTEXTPROVIDER
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const value = { state, dispatch };
  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export const useCounter = () => useContext(CounterContext);
export default CounterProvider;
