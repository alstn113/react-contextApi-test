import { INCREASE, DECREASE } from "./CounterActions";

const CounterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.payload };
    case DECREASE:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default CounterReducer;
