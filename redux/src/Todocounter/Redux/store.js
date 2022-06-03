import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { counterReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  auth: authReducer,
});

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action, getState());

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

function logger2({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch logger 2", action, getState());

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch logger 2", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const myCustomThunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) =>
    typeof action === "function" ? action(dispatch, getState) : next(action);

const store = createStore(
  rootReducer,
  applyMiddleware(myCustomThunk, logger, logger2)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(`state`, store.getState());

export default store;
