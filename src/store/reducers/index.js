import { counter } from "./counter";
import { combineReducers } from "redux";
import { ChangeName } from "./changename";
export const rootReducer = combineReducers({counter,ChangeName});