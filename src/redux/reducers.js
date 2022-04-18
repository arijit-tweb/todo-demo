import { combineReducers } from "redux";
import { todoSlice } from "./reducers/todoSlice";


export const rootReducer = combineReducers({
    todo: todoSlice.reducer
});