import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  todoReducer: todoReducer,
});

export const store = legacy_createStore(rootReducer);