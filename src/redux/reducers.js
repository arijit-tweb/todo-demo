import { combineReducers } from "redux";
import { multiplexSlice } from "./reducers/multiplex";
import { todoSlice } from "./reducers/todoSlice";
import { userSlice } from "./reducers/userSlice";


export const rootReducer = combineReducers({
    todo: todoSlice.reducer,
    user: userSlice.reducer,
    multiplex: multiplexSlice.reducer
});