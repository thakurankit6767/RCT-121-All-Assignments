import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { authenticateReducer } from "./Auth/reducer";
import { githubreducer } from "./Github/gitReducer";
import { RegisterReducer } from "./Register/registerReducer";
const rootReducer = combineReducers({
  user: githubreducer,
  auth: authenticateReducer,
  register: RegisterReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
