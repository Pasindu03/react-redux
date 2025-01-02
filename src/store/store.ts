import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducer/CustomerReducer.ts";
import {ItemReducer} from "../reducer/ItemReducer.ts";

const rootReducers = combineReducers(
    {
        customerReducer : CustomerReducer,
        itemReducer: ItemReducer,
    }
)

export const store= createStore(rootReducers);