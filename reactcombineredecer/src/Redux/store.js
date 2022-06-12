import { legacy_createStore as createStore,combineReducers } from "redux";
import { todoReducer } from "./Todos/reducer";
import { AuthReducer } from "./Auth/reducer";
const rootReducer=combineReducers({
    todos:todoReducer,
    auth:AuthReducer
})
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


