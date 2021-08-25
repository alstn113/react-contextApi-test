import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import CounterReducer from "./CounterReducer";

import { INCREASE, DECREASE } from "./CounterActions";

const initialState = {
  count: 0,
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const increase = (value) => {
    dispatch({
      type: INCREASE,
      payload: value,
    });
  };

  const decrease = (value) => {
    dispatch({
      type: DECREASE,
      payload: value,
    });
  };

  return <CounterContext.Provider value={{ count: state.count, increase, decrease }}>{children}</CounterContext.Provider>;
}

export default CounterProvider;
