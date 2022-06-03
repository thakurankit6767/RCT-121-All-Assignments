import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Components/Todo/Todo";
import { incrementCountAction } from "./Redux/counter/action";
// import { ReduxContext } from "./Redux/ReduxProvider";


export default function TodoCounter() {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementCountAction(1))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</button>
      <br />
      <br />
      <br />
      <Todo />
    </div>
  );
}
