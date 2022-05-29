import React, { useReducer } from "react";

const initState = {
  counter: 0,
  noOfClicks: 0,
};

const CounterActions = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};

const reducer = (state, action) => {
  //action is acton of{}
  //a key called type
  //a key called payload
  switch (action.type) {
    case CounterActions.increment: {
      return {
        ...state,
        counter: state.counter + 1,
        noOfClicks: state.noOfClicks + 1,
      };
    }
    case CounterActions.decrement: {
      return {
        ...state,
        counter: state.counter - 1,
        noOfClicks: state.noOfClicks + 1,
      };
    }

    case CounterActions.reset: {
      return {
        ...initState,
      };
    }

    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <div>
      <h2>{state.counter}</h2>
      <h2>No of Clicks :{state.noOfClicks}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>Add</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Reduce</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
