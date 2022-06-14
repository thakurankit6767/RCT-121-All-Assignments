import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { companyreducer } from "./company/companyreducer";
import thunk from "redux-thunk";
import { employeereducer } from "./employee/employeereducer";

const rootCombiner = combineReducers({

    company : companyreducer,

    employee : employeereducer

})

export const store = legacy_createStore(rootCombiner,applyMiddleware(thunk))


console.log(store.getState())