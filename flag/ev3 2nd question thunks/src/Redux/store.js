import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { apiReducer } from "./app/reducer";
import thunk from "redux-thunk";
import { AuthR } from "./auth/reducer";

const rootCombiner = combineReducers({

    app : apiReducer,

    ath : AuthR,

})



export const data = legacy_createStore(rootCombiner,applyMiddleware(thunk))


console.log(data.getState())