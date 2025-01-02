import {createStore} from "redux";
import {CountReducer} from "../reducer/CountReducer.ts";

export const store= createStore(CountReducer);