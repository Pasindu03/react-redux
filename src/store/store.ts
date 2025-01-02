import {combineReducers, createStore} from "redux";
import {CountReducer} from "../reducer/CountReducer.tsx";
import {CustomerReducer} from "../reducer/CustomerReducer.ts";
import {ItemReducer} from "../reducer/ItemReducer.ts";

const rootReducers = combineReducers(
    {
        countReducer : CountReducer,
        customerReducer : CustomerReducer,
        itemReducer: ItemReducer,
    }
)

export const store= createStore(rootReducers);