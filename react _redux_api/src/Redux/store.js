import { legacy_createStore } from "redux";
import {todosReducer} from "./Todo/reducer"
import {initialState} from "./Todo/reducer"
export const store=legacy_createStore(todosReducer,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )