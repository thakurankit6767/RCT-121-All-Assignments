import { combineReducers, createStore } from "redux";
import { todosReducer } from "./reducer";

const rootReducer = combineReducers({
  todos: todosReducer
});

const store = createStore(rootReducer);
console.log(`state`, store.getState());

export default store;